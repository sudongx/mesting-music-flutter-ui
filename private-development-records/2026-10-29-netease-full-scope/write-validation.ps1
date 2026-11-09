$ErrorActionPreference = 'Stop'
$artifactRoot = '.codex-artifacts/2026-10-29-netease-full-scope'

function Read-TestEvidence([string]$name, [string]$flavor) {
  $testEvents = @(Get-Content "$artifactRoot/$name" | ForEach-Object { $_ | ConvertFrom-Json })
  $finished = $testEvents | Where-Object type -eq done | Select-Object -Last 1
  $failures = @($testEvents | Where-Object type -eq error)
  if (-not $finished.success -or $failures.Count -gt 0) { throw "Incomplete or failed test evidence: $name" }
  $suiteFiles = @($testEvents | Where-Object type -eq suite | ForEach-Object { $_.suite.path -replace '^D:/AnLi/', '' })
  return [ordered]@{
    flavor = $flavor
    success = $true
    passed = @($testEvents | Where-Object { $_.type -eq 'testDone' -and $_.hidden -eq $false -and $_.skipped -eq $false -and $_.result -eq 'success' }).Count
    skipped = @($testEvents | Where-Object { $_.type -eq 'testDone' -and $_.hidden -eq $false -and $_.skipped -eq $true }).Count
    errors = $failures.Count
    files = $suiteFiles
    durationMs = $finished.time
    log = "$artifactRoot/$name"
  }
}

$analysisText = Get-Content "$artifactRoot/final-analysis.txt" -Raw
if ($analysisText -notmatch 'No issues found!') { throw 'Static analysis did not pass' }
$betaEvidence = Read-TestEvidence 'completion-regression.jsonl' 'beta'
$stableEvidence = Read-TestEvidence 'stable-search-tests.jsonl' 'stable'
$catalogueEvidence = Read-TestEvidence 'final-catalogue-contracts.jsonl' 'beta'
$catalogue = Get-Content 'assets/data/netease-full-catalog.json' -Raw | ConvertFrom-Json
$upstreamSamples = Get-Content "$artifactRoot/capture-summary.json" -Raw | ConvertFrom-Json
$publicEvidence = Get-Content "$artifactRoot/public-probes.json" -Raw | ConvertFrom-Json
if (@($publicEvidence.results | Where-Object { $_.status -ne 'response' -or $_.code -ne 200 }).Count -gt 0) { throw 'An anonymous probe did not return code200' }
$afpEvidence = Get-Content "$artifactRoot/afp-check.json" -Raw | ConvertFrom-Json
$sourcePackage = @(Get-Content "$artifactRoot/npm-pack.json" -Raw | ConvertFrom-Json)[0]
$acornPackage = Get-Content "$artifactRoot/generator/node_modules/acorn/package.json" -Raw | ConvertFrom-Json
$shaRecords = [ordered]@{}
foreach ($sourcePath in @(
  'pubspec.lock',
  'assets/data/netease-full-catalog.json',
  'lib/features/music_platform/netease/full/netease_native_routes.g.dart',
  'test/fixtures/netease-full-upstream-contracts.json',
  'third_party/netease_protocol/afp/afp.js',
  'third_party/netease_protocol/afp/afp.wasm.js',
  'third_party/netease_protocol/afp/LICENSE'
)) {
  $shaRecords[$sourcePath] = (Get-FileHash -LiteralPath $sourcePath -Algorithm SHA256).Hash.ToLowerInvariant()
}

$validation = [ordered]@{
  schemaVersion = 1
  date = '2026-10-29'
  project = 'Mesting Music'
  base = [ordered]@{ branch = 'beta'; revision = 'deb68e4b4bad84d422085e4567d556b4441b5e48'; version = '1.0.12'; androidVersionCode = 33 }
  environment = [ordered]@{ host = 'Windows'; flutter = '3.41.9'; dart = '3.11.5'; generatorParser = "acorn@$($acornPackage.version)" }
  scope = [ordered]@{ allDocumentedFeatures = $true; directAppHttps = $true; extraApiServer = $false; globalBottomGlassSearch = $true; retainUnsupportedEntries = $true }
  source = [ordered]@{
    documentation = $catalogue.documentation
    package = $catalogue.source
    license = 'MIT'
    archiveIntegrity = $sourcePackage.integrity
    archiveSha256 = (Get-FileHash -LiteralPath "$artifactRoot/neteaseapireborn-api-4.29.7.tgz" -Algorithm SHA256).Hash.ToLowerInvariant()
    originalFingerprintRepositoryCurrentStatus = 'HTTP 404; provenance is the pinned npm distribution'
  }
  catalogue = [ordered]@{
    entries = $catalogue.entries.Count
    distinctDocumentAddresses = 296
    togetherExampleCommands = 9
    nativeGenerated = @($catalogue.entries | Where-Object builder -eq generated).Count
    compositeExistingLocalOrRetired = @($catalogue.entries | Where-Object builder -eq manual).Count
    reviewedMutationRoutes = @($catalogue.entries | Where-Object write).Count
    unsupportedRoutes = @($catalogue.entries | Where-Object unavailable | ForEach-Object route)
    tabs = @($catalogue.entries | Group-Object tab | ForEach-Object { [ordered]@{ name = $_.Name; count = $_.Count } })
  }
  verification = [ordered]@{
    staticAnalysis = [ordered]@{ success = $true; issues = 0; log = "$artifactRoot/final-analysis.txt" }
    betaRegression = $betaEvidence
    independentStableSearch = $stableEvidence
    finalCatalogueContracts = $catalogueEvidence
    testStagesAreNotAdditive = $true
    upstreamRequestSamples = $upstreamSamples
    anonymousReadOnly = $publicEvidence
    localFingerprintSmoke = $afpEvidence
    hostScreenshots = [ordered]@{
      count = @(Get-ChildItem -LiteralPath "$artifactRoot/ui" -Filter '*.png').Count
      directory = "$artifactRoot/ui"
      themes = @('light', 'dark')
      viewports = @('390x844 at text scale 1.0', '320x650 at text scale 1.5')
      surfaces = @('message catalogue', 'private-message form', 'account level', 'retired feature')
      inspected = $true
      realDeviceCapture = $false
    }
    whitespaceDiffCheck = 'passed with git -c core.whitespace=cr-at-eol diff --check'
  }
  runtimeSearchLocations = @(
    'existing music shell', 'independent music search', 'local music',
    'audiobooks', 'Kugou effect filter', 'NetEase feature catalogue',
    'NetEase entity chooser', 'NetEase keyword search tasks'
  )
  liveAccountWritesExecuted = $false
  phoneAccessOrAdb = $false
  apkBuildOrSigningPerformed = $false
  publishedOrPushed = $false
  preserved = @('existing AGENTS.md edit', 'local session handoff', '1.0.12 frozen artifacts', 'retained music browser', 'existing SDK and signing material')
  notVerifiedOnRealAccountOrDevice = @(
    'login and secure credential persistence', 'social writes and private messages',
    'registration, phone rebinding and password changes', 'membership and musician permissions',
    'orders and payment', 'Android file picker and upload',
    'Android microphone and fingerprint WebView', 'two-party Together synchronization',
    'native rendering performance and long-term platform availability'
  )
  commandExamples = [ordered]@{
    analyze = 'flutter analyze --no-pub'
    beta = 'flutter test --no-pub --flavor beta <verification.betaRegression.files> --reporter json'
    stableSearch = 'flutter test --no-pub test/music_search_ui_test.dart --reporter json'
    anonymousProbe = 'flutter test --no-pub --flavor beta tool/probe_netease_full_public.dart --reporter expanded'
    fingerprint = 'node tool/check_netease_afp.cjs'
  }
  sha256 = $shaRecords
}
$validation | ConvertTo-Json -Depth 20 | Set-Content -LiteralPath 'docs/validation-netease-full-2026-10-29.json' -Encoding UTF8
[ordered]@{ betaPassed = $betaEvidence.passed; betaFiles = $betaEvidence.files.Count; stablePassed = $stableEvidence.passed; anonymousCode200 = $publicEvidence.results.Count; entries = $catalogue.entries.Count } | ConvertTo-Json
