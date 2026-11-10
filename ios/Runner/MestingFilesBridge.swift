import AVFoundation
import Flutter
import UIKit
import UniformTypeIdentifiers

/// Imported audio lives in Documents, so sandbox grants survive picker dismissal.
final class MestingFilesBridge: NSObject, UIDocumentPickerDelegate {
  private let queue = DispatchQueue(label: "com.mesting.music.files")
  private var channels: [FlutterMethodChannel] = []
  private let presenter: () -> UIViewController?
  private var pending: FlutterResult?
  private enum PickMode { case local, cloud, downloadFolder }
  private var mode = PickMode.local
  private let downloadBookmarkKey = "mesting.downloadFolderBookmark"
  private let downloadGrantsKey = "mesting.downloadFolderGrants"
  private let grantLock = NSRecursiveLock()
  private var downloadGrants: [String: URL] = [:]
  private let documents = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)[0]
  private var library: URL { documents.appendingPathComponent("Music", isDirectory: true) }
  private var downloads: URL { documents.appendingPathComponent("Downloads", isDirectory: true) }
  private var index: URL {
    FileManager.default.urls(for: .applicationSupportDirectory, in: .userDomainMask)[0]
      .appendingPathComponent("local-music-index.json")
  }

  private func save(_ rows: [[String: Any]]) throws {
    try FileManager.default.createDirectory(
      at: index.deletingLastPathComponent(), withIntermediateDirectories: true)
    try JSONSerialization.data(withJSONObject: rows).write(to: index, options: .atomic)
  }

  /// Resolve the persisted picker grant for each operation, including after relaunch.
  private func downloadDirectory() throws -> URL {
    grantLock.lock()
    defer { grantLock.unlock() }
    // Playback opens published URLs outside this bridge. Keep picker grants
    // alive for the process, including previously selected download folders.
    for data in UserDefaults.standard.array(forKey: downloadGrantsKey) as? [Data] ?? [] {
      var stale = false
      if let url = try? URL(resolvingBookmarkData: data, options: [], bookmarkDataIsStale: &stale),
        downloadGrants[url.path] == nil, url.startAccessingSecurityScopedResource()
      {
        downloadGrants[url.path] = url
      }
    }
    if let data = UserDefaults.standard.data(forKey: downloadBookmarkKey) {
      var stale = false
      let url = try URL(resolvingBookmarkData: data, options: [], bookmarkDataIsStale: &stale)
      if downloadGrants[url.path] == nil, url.startAccessingSecurityScopedResource() {
        downloadGrants[url.path] = url
      }
      if stale {
        UserDefaults.standard.set(
          try url.bookmarkData(options: [], includingResourceValuesForKeys: nil, relativeTo: nil),
          forKey: downloadBookmarkKey)
      }
      return url
    }
    try FileManager.default.createDirectory(at: downloads, withIntermediateDirectories: true)
    return downloads
  }

  init(messenger: FlutterBinaryMessenger, presenter: @escaping () -> UIViewController?) {
    self.presenter = presenter
    super.init()
    queue.async { _ = try? self.downloadDirectory() }
    for name in ["local_music", "audio_download", "netease_cloud_file"] {
      let channel = FlutterMethodChannel(
        name: "com.mesting.music/\(name)", binaryMessenger: messenger)
      channel.setMethodCallHandler { [weak self] call, result in
        guard let self else { return }
        if name == "local_music" {
          self.local(call, result: result)
        } else if name == "audio_download" {
          self.download(call, result: result)
        } else if call.method == "pick" {
          self.pick(folder: false, mode: .cloud, result: result)
        } else {
          result(FlutterMethodNotImplemented)
        }
      }
      channels.append(channel)
    }
  }

  deinit {
    downloadGrants.values.forEach { $0.stopAccessingSecurityScopedResource() }
  }

  private func load() -> [[String: Any]] {
    guard let data = try? Data(contentsOf: index),
      let rows = try? JSONSerialization.jsonObject(with: data) as? [[String: Any]]
    else { return [] }
    return rows
  }

  private func snapshot(_ rows: [[String: Any]]) -> [String: Any] {
    let entries = rows.map { row -> [String: Any] in
      var entry = row
      let name = (row["fileName"] as? String ?? "") as NSString
      let url = library.appendingPathComponent(name.lastPathComponent)
      entry["uri"] = url.absoluteString
      entry["available"] = FileManager.default.fileExists(atPath: url.path)
      entry["folderId"] = "ios-imported"
      entry["folderName"] = "导入的音乐"
      entry["folderPath"] = library.path
      return entry
    }
    return [
      "entries": entries, "permissionGranted": true,
      "notice": "从“文件”导入音乐，或在“文件”App 中管理 Mesting Music 的音乐文件。",
    ]
  }

  private func work(_ result: @escaping FlutterResult, body: @escaping () throws -> Any?) {
    queue.async {
      do {
        let value = try body()
        DispatchQueue.main.async { result(value) }
      } catch {
        DispatchQueue.main.async {
          result(FlutterError(code: "file_failed", message: "文件操作失败，请重新选择文件", details: nil))
        }
      }
    }
  }

  private func local(_ call: FlutterMethodCall, result: @escaping FlutterResult) {
    let args = call.arguments as? [String: Any] ?? [:]
    switch call.method {
    case "importFiles", "scan": pick(folder: false, mode: .local, result: result)
    case "importDirectory": pick(folder: true, mode: .local, result: result)
    case "load", "refresh": work(result) { self.snapshot(self.load()) }
    case "remove":
      work(result) {
        let rows = self.load().filter { $0["id"] as? String != args["id"] as? String }
        try self.save(rows)
        return self.snapshot(rows)
      }
    case "prepare":
      work(result) {
        let data = self.snapshot(self.load())["entries"] as? [[String: Any]]
        guard let row = data?.first(where: { $0["id"] as? String == args["id"] as? String }),
          row["available"] as? Bool == true
        else { throw CocoaError(.fileNoSuchFile) }
        return row
      }
    case "artwork": result("")
    case "openSettings":
      if let url = URL(string: UIApplication.openSettingsURLString) {
        UIApplication.shared.open(url)
      }
      result(nil)
    default: result(FlutterMethodNotImplemented)
    }
  }

  private func pick(folder: Bool, mode: PickMode, result: @escaping FlutterResult) {
    guard pending == nil, let controller = presenter() else {
      result(FlutterError(code: "picker_busy", message: "请先完成当前文件选择", details: nil))
      return
    }
    pending = result
    self.mode = mode
    let picker = UIDocumentPickerViewController(
      forOpeningContentTypes: folder ? [.folder] : [.audio], asCopy: false)
    picker.allowsMultipleSelection = mode == .local
    picker.delegate = self
    controller.present(picker, animated: true)
  }

  func documentPickerWasCancelled(_ controller: UIDocumentPickerViewController) {
    let result = pending
    pending = nil
    if mode != .local {
      result?(nil)
    } else if let result {
      work(result) { self.snapshot(self.load()) }
    }
  }

  func documentPicker(_ controller: UIDocumentPickerViewController, didPickDocumentsAt urls: [URL])
  {
    guard let result = pending else { return }
    let mode = self.mode
    pending = nil
    work(result) {
      if mode == .downloadFolder, let source = urls.first {
        let access = source.startAccessingSecurityScopedResource()
        defer { if access { source.stopAccessingSecurityScopedResource() } }
        let data = try source.bookmarkData(
          options: [], includingResourceValuesForKeys: nil, relativeTo: nil)
        UserDefaults.standard.set(data, forKey: self.downloadBookmarkKey)
        var grants = UserDefaults.standard.array(forKey: self.downloadGrantsKey) as? [Data] ?? []
        if !grants.contains(data) { grants.append(data) }
        UserDefaults.standard.set(grants, forKey: self.downloadGrantsKey)
        _ = try self.downloadDirectory()
        return source.absoluteString
      }
      if mode == .cloud, let source = urls.first {
        let access = source.startAccessingSecurityScopedResource()
        defer { if access { source.stopAccessingSecurityScopedResource() } }
        let destination = FileManager.default.temporaryDirectory.appendingPathComponent(
          UUID().uuidString
        ).appendingPathExtension(source.pathExtension)
        try FileManager.default.copyItem(at: source, to: destination)
        return [
          "path": destination.path, "name": source.lastPathComponent,
          "size": (try destination.resourceValues(forKeys: [.fileSizeKey]).fileSize) ?? 0,
        ]
      }
      try FileManager.default.createDirectory(at: self.library, withIntermediateDirectories: true)
      var rows = self.load()
      for root in urls {
        let access = root.startAccessingSecurityScopedResource()
        defer { if access { root.stopAccessingSecurityScopedResource() } }
        let isDirectory = (try? root.resourceValues(forKeys: [.isDirectoryKey]).isDirectory) == true
        let enumerator =
          isDirectory
          ? FileManager.default.enumerator(
            at: root, includingPropertiesForKeys: [.isRegularFileKey], options: [.skipsHiddenFiles])
          : nil
        var next: URL? = isDirectory ? enumerator?.nextObject() as? URL : root
        while let source = next, rows.count < 10000 {
          next = enumerator?.nextObject() as? URL
          guard let type = UTType(filenameExtension: source.pathExtension),
            type.conforms(to: .audio),
            (try? source.resourceValues(forKeys: [.isRegularFileKey]).isRegularFile) == true,
            !rows.contains(where: { $0["originUri"] as? String == source.absoluteString })
          else { continue }
          let id = "local_" + UUID().uuidString
          let name = id + "." + source.pathExtension
          let target = self.library.appendingPathComponent(name)
          try FileManager.default.copyItem(at: source, to: target)
          let asset = AVURLAsset(url: target)
          let title = AVMetadataItem.metadataItems(
            from: asset.commonMetadata, filteredByIdentifier: .commonIdentifierTitle
          ).first?.stringValue
          let artist = AVMetadataItem.metadataItems(
            from: asset.commonMetadata, filteredByIdentifier: .commonIdentifierArtist
          ).first?.stringValue
          let album = AVMetadataItem.metadataItems(
            from: asset.commonMetadata, filteredByIdentifier: .commonIdentifierAlbumName
          ).first?.stringValue
          let seconds = CMTimeGetSeconds(asset.duration)
          rows.append([
            "id": id, "fileName": name,
            "title": title ?? source.deletingPathExtension().lastPathComponent,
            "artist": artist ?? "未知歌手", "album": album ?? "未知专辑", "origin": "file",
            "originUri": source.absoluteString,
            "durationMs": seconds.isFinite ? Int(max(0, seconds) * 1000) : 0,
          ])
          // Persist each successful copy so interruption keeps the index consistent.
          do { try self.save(rows) } catch {
            try? FileManager.default.removeItem(at: target)
            throw error
          }
        }
      }
      return self.snapshot(rows)
    }
  }

  private func download(_ call: FlutterMethodCall, result: @escaping FlutterResult) {
    let args = call.arguments as? [String: Any] ?? [:]
    switch call.method {
    case "chooseDirectory": pick(folder: true, mode: .downloadFolder, result: result)
    case "directory":
      work(result) {
        try self.downloadDirectory().absoluteString
      }
    case "publish":
      work(result) {
        guard let path = args["path"] as? String, let name = args["name"] as? String else {
          throw CocoaError(.fileReadInvalidFileName)
        }
        let directory = try self.downloadDirectory()
        let access = directory.startAccessingSecurityScopedResource()
        defer { if access { directory.stopAccessingSecurityScopedResource() } }
        let fileName = (name as NSString).lastPathComponent
        guard !fileName.isEmpty, fileName != ".", fileName != ".." else {
          throw CocoaError(.fileWriteInvalidFileName)
        }
        var target = directory.appendingPathComponent(fileName)
        if FileManager.default.fileExists(atPath: target.path) {
          target = directory.appendingPathComponent(
            UUID().uuidString + "-" + target.lastPathComponent)
        }
        try FileManager.default.copyItem(at: URL(fileURLWithPath: path), to: target)
        return target.absoluteString
      }
    case "readable":
      work(result) {
        let directory = try self.downloadDirectory()
        let access = directory.startAccessingSecurityScopedResource()
        defer { if access { directory.stopAccessingSecurityScopedResource() } }
        return (args["uri"] as? String).flatMap(URL.init(string:)).map {
          $0.isFileURL && FileManager.default.fileExists(atPath: $0.path)
        } ?? false
      }
    case "export", "openDirectory":
      guard let directory = try? downloadDirectory() else {
        result(FlutterError(code: "folder_unavailable", message: "请重新选择下载文件夹", details: nil))
        return
      }
      let url = (args["uri"] as? String).flatMap(URL.init(string:)) ?? directory
      guard let controller = presenter(), url.isFileURL else {
        result(nil)
        return
      }
      let sheet = UIActivityViewController(activityItems: [url], applicationActivities: nil)
      let access = directory.startAccessingSecurityScopedResource()
      sheet.completionWithItemsHandler = { _, _, _, _ in
        if access { directory.stopAccessingSecurityScopedResource() }
      }
      sheet.popoverPresentationController?.sourceView = controller.view
      sheet.popoverPresentationController?.sourceRect = CGRect(
        x: controller.view.bounds.midX, y: controller.view.bounds.midY, width: 1, height: 1)
      controller.present(sheet, animated: true) { result(nil) }
    default: result(FlutterMethodNotImplemented)
    }
  }
}
