param(
  [Parameter(Mandatory=$true)][ValidateSet('C','D')][string]$Volume
)
$ErrorActionPreference = 'Stop'
# Read directory metadata only. Never traverse junctions or file symlinks,
# read file contents, hash files, or delete anything during the inventory.
Add-Type -TypeDefinition @'
using System;
using System.IO;
using System.Collections.Generic;
public class AuditDirectory {
  public string Path {get;set;} public long Bytes {get;set;}
  public long Files {get;set;} public long Folders {get;set;}
  public int Depth {get;set;} public DateTime LastWriteUtc {get;set;}
}
public class AuditFile {
  public string Path {get;set;} public long Bytes {get;set;}
  public DateTime LastWriteUtc {get;set;}
}
public class AuditIssue { public string Path {get;set;} public string Kind {get;set;} }
public class AuditExtension { public string Extension {get;set;} public long Bytes {get;set;} public long Files {get;set;} }
public class AuditResult {
  public string Root {get;set;} public DateTime StartedUtc {get;set;}
  public DateTime CompletedUtc {get;set;} public long TotalBytes {get;set;}
  public long UsedBytes {get;set;} public long AvailableBytes {get;set;}
  public long EnumeratedBytes {get;set;} public long Files {get;set;}
  public long Folders {get;set;} public long SkippedReparsePoints {get;set;}
  public long ErrorCount {get;set;}
  public List<AuditDirectory> Directories {get;set;} = new List<AuditDirectory>();
  public List<AuditFile> LargeFiles {get;set;} = new List<AuditFile>();
  public List<AuditFile> RootFiles {get;set;} = new List<AuditFile>();
  public List<AuditIssue> Issues {get;set;} = new List<AuditIssue>();
  public List<AuditExtension> Extensions {get;set;} = new List<AuditExtension>();
}
public class ReadOnlyDiskAudit {
  private AuditResult result;
  private string progress;
  private DateTime lastProgress = DateTime.MinValue;
  private Dictionary<string,AuditExtension> extensions = new Dictionary<string,AuditExtension>(StringComparer.OrdinalIgnoreCase);
  private void Issue(string path, Exception e) {
    result.ErrorCount++;
    if(result.Issues.Count < 300) result.Issues.Add(new AuditIssue {Path=path,Kind=e.GetType().Name});
  }
  private AuditDirectory Walk(DirectoryInfo directory, int depth) {
    AuditDirectory row = new AuditDirectory {Path=directory.FullName,Depth=depth};
    result.Folders++;
    if((DateTime.UtcNow-lastProgress).TotalSeconds>=5) {
      File.WriteAllText(progress, DateTime.UtcNow.ToString("o")+"\n"+directory.FullName+"\nFiles="+result.Files+" Folders="+result.Folders+" Bytes="+result.EnumeratedBytes+" Errors="+result.ErrorCount);
      lastProgress=DateTime.UtcNow;
    }
    try {
      row.LastWriteUtc=directory.LastWriteTimeUtc;
      EnumerationOptions options = new EnumerationOptions { RecurseSubdirectories=false,IgnoreInaccessible=false,AttributesToSkip=0,ReturnSpecialDirectories=false };
      foreach(FileSystemInfo item in directory.EnumerateFileSystemInfos("*",options)) {
        try {
          FileAttributes attributes=item.Attributes;
          if((attributes&FileAttributes.ReparsePoint)!=0) {result.SkippedReparsePoints++;continue;}
          if((attributes&FileAttributes.Directory)!=0) {
            AuditDirectory child=Walk((DirectoryInfo)item,depth+1);
            row.Bytes+=child.Bytes;row.Files+=child.Files;row.Folders+=child.Folders+1;
          } else {
            FileInfo file=(FileInfo)item;
            long bytes=file.Length;
            row.Bytes+=bytes;row.Files++;result.Files++;result.EnumeratedBytes+=bytes;
            string extension=file.Extension;
            if(extension.Length==0) extension="[none]";
            AuditExtension total;
            if(!extensions.TryGetValue(extension,out total)) {
              total=new AuditExtension {Extension=extension};extensions.Add(extension,total);
            }
            total.Bytes+=bytes;total.Files++;
            if(bytes>=268435456 || depth==0) {
              AuditFile f=new AuditFile {Path=file.FullName,Bytes=bytes,LastWriteUtc=file.LastWriteTimeUtc};
              if(bytes>=268435456) result.LargeFiles.Add(f);
              if(depth==0) result.RootFiles.Add(f);
            }
          }
        } catch(Exception e) { Issue(item.FullName,e); }
      }
    } catch(Exception e) { Issue(directory.FullName,e); }
    // Store all shallow folders plus substantial deeper folders. This bounds
    // output size without losing large caches buried in project directories.
    if(depth<=5 || row.Bytes>=67108864) result.Directories.Add(row);
    return row;
  }
  public AuditResult Run(string root,string progressPath) {
    progress=progressPath;result=new AuditResult {Root=root,StartedUtc=DateTime.UtcNow};
    DriveInfo drive=new DriveInfo(root);
    result.TotalBytes=drive.TotalSize;result.AvailableBytes=drive.AvailableFreeSpace;
    result.UsedBytes=drive.TotalSize-drive.TotalFreeSpace;
    Walk(new DirectoryInfo(root),0);
    result.CompletedUtc=DateTime.UtcNow;
    result.Extensions=new List<AuditExtension>(extensions.Values);
    return result;
  }
}
'@
$diskAuditDirectory = 'D:/AnLi/.codex-artifacts/2026-11-02-disk-audit'
$diskAuditOutput = Join-Path $diskAuditDirectory ($Volume + '-inventory.json')
$diskAuditResult = [ReadOnlyDiskAudit]::new().Run(($Volume + ':\'), (Join-Path $diskAuditDirectory ($Volume + '-progress.txt')))
$diskAuditResult | ConvertTo-Json -Depth 6 | Set-Content -LiteralPath $diskAuditOutput -Encoding utf8
[pscustomobject]@{
  Drive=$Volume;TotalGiB=[math]::Round($diskAuditResult.TotalBytes/1GB,2)
  UsedGiB=[math]::Round($diskAuditResult.UsedBytes/1GB,2)
  FreeGiB=[math]::Round($diskAuditResult.AvailableBytes/1GB,2)
  Files=$diskAuditResult.Files;Folders=$diskAuditResult.Folders
  AccessErrors=$diskAuditResult.ErrorCount;SkippedLinks=$diskAuditResult.SkippedReparsePoints
  Seconds=[math]::Round(($diskAuditResult.CompletedUtc-$diskAuditResult.StartedUtc).TotalSeconds,1)
} | ConvertTo-Json
