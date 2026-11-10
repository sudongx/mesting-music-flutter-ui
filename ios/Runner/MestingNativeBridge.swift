import AVFoundation
import AVKit
import Flutter
import MediaPlayer
import Photos
import UIKit

/// Platform services share the existing Flutter audio_service player/session.
final class MestingNativeBridge: NSObject, AVRoutePickerViewDelegate {
  private var channels: [FlutterMethodChannel] = []
  private var streams: [FlutterEventChannel] = []
  private var handlers: [MusicEventStream] = []
  private let volumeView = MPVolumeView(frame: CGRect(x: -1000, y: -1000, width: 1, height: 1))
  private var files: MestingFilesBridge?
  private var location: MestingLocationBridge?
  private var observation: NSKeyValueObservation?
  private var routeObservation: NSObjectProtocol?
  private var privacyObservers: [NSObjectProtocol] = []
  private var secureScreens = 0
  private var privacyViews: [UIView] = []
  private var routePicker: AVRoutePickerView?

  init(messenger: FlutterBinaryMessenger) {
    super.init()
    location = MestingLocationBridge(messenger: messenger)
    files = MestingFilesBridge(
      messenger: messenger, presenter: { [weak self] in self?.presenter() })
    register("share", messenger: messenger, handler: share)
    register("media_library", messenger: messenger, handler: saveImage)
    register("app_update", messenger: messenger) { call, result in
      guard call.method == "getAppInfo" else {
        result(FlutterMethodNotImplemented)
        return
      }
      let info = Bundle.main.infoDictionary ?? [:]
      result([
        "packageName": Bundle.main.bundleIdentifier ?? "com.mesting.music",
        "versionName": info["CFBundleShortVersionString"] as? String ?? "1.0.0",
        "versionCode": Int(info["CFBundleVersion"] as? String ?? "1") ?? 1,
      ])
    }
    register("media_volume", messenger: messenger) { [weak self] call, result in
      guard let self else { return }
      if call.method == "getVolume" {
        result(Double(AVAudioSession.sharedInstance().outputVolume))
      } else if call.method == "setVolume",
        let args = call.arguments as? [String: Any], let value = args["value"] as? Double
      {
        if self.volumeView.superview == nil { self.presenter()?.view.addSubview(self.volumeView) }
        let slider = self.volumeView.subviews.compactMap { $0 as? UISlider }.first
        slider?.setValue(Float(min(1, max(0, value))), animated: false)
        slider?.sendActions(for: .valueChanged)
        result(Double(AVAudioSession.sharedInstance().outputVolume))
      } else {
        result(FlutterMethodNotImplemented)
      }
    }
    register("audio_output", messenger: messenger) { [weak self] call, result in
      if call.method == "current" || call.method == "routes" {
        result(self?.output())
      } else if call.method == "choose" {
        guard let view = self?.presenter()?.view else {
          result(false)
          return
        }
        let picker = AVRoutePickerView(
          frame: CGRect(x: view.bounds.midX - 22, y: view.bounds.midY - 22, width: 44, height: 44))
        picker.alpha = 0.01
        picker.prioritizesVideoDevices = false
        picker.delegate = self
        self?.routePicker?.removeFromSuperview()
        self?.routePicker = picker
        view.addSubview(picker)
        picker.subviews.compactMap { $0 as? UIButton }.first?.sendActions(for: .touchUpInside)
        result(true)
      } else {
        result(FlutterMethodNotImplemented)
      }
    }
    let volume = event("media_volume_events", messenger: messenger) {
      Double(AVAudioSession.sharedInstance().outputVolume)
    }
    observation = AVAudioSession.sharedInstance().observe(\.outputVolume, options: [.new]) { _, _ in
      DispatchQueue.main.async { volume.emit(Double(AVAudioSession.sharedInstance().outputVolume)) }
    }
    let route = event("audio_output_events", messenger: messenger) { [weak self] in self?.output() }
    routeObservation = NotificationCenter.default.addObserver(
      forName: AVAudioSession.routeChangeNotification, object: nil, queue: .main
    ) { [weak self] _ in route.emit(self?.output()) }
    privacyObservers = [
      UIApplication.willResignActiveNotification, UIApplication.didBecomeActiveNotification,
      UIScreen.capturedDidChangeNotification,
    ].map { name in
      NotificationCenter.default.addObserver(forName: name, object: nil, queue: .main) {
        [weak self] notification in
        self?.updatePrivacy(
          resigning: notification.name == UIApplication.willResignActiveNotification)
      }
    }
    register("system_media", messenger: messenger) { [weak self] call, result in
      switch call.method {
      case "enterSecureScreen":
        self?.secureScreens += 1
        self?.updatePrivacy()
        result(nil)
      case "exitSecureScreen":
        if let self { self.secureScreens = max(0, self.secureScreens - 1) }
        self?.updatePrivacy()
        result(nil)
      case "getListeningDeviceInfo":
        let bounds = UIScreen.main.nativeBounds
        result([
          "model": UIDevice.current.model,
          "systemVersion": UIDevice.current.systemVersion,
          "screenWidth": Int(bounds.width), "screenHeight": Int(bounds.height),
        ])
      case "setPlaybackDiagnostics": result(nil)
      default: result(FlutterMethodNotImplemented)
      }
    }
  }

  deinit {
    if let routeObservation { NotificationCenter.default.removeObserver(routeObservation) }
    privacyObservers.forEach { NotificationCenter.default.removeObserver($0) }
  }

  func routePickerViewDidEndPresentingRoutes(_ routePickerView: AVRoutePickerView) {
    routePickerView.removeFromSuperview()
    routePicker = nil
  }

  // iOS does not expose Android FLAG_SECURE. Obscure sensitive screens while
  // recording and before the app switcher snapshots a backgrounded window.
  private func updatePrivacy(resigning: Bool = false) {
    privacyViews.forEach { $0.removeFromSuperview() }
    privacyViews.removeAll()
    let inactive = resigning || UIApplication.shared.applicationState != .active
    guard secureScreens > 0, inactive || UIScreen.main.isCaptured else { return }
    for window in UIApplication.shared.connectedScenes.compactMap({ $0 as? UIWindowScene })
      .flatMap({ $0.windows }) where !window.isHidden
    {
      let shield = UIView(frame: window.bounds)
      shield.autoresizingMask = [.flexibleWidth, .flexibleHeight]
      shield.backgroundColor = .systemBackground
      window.addSubview(shield)
      privacyViews.append(shield)
    }
  }

  private func register(
    _ name: String, messenger: FlutterBinaryMessenger,
    handler: @escaping FlutterMethodCallHandler
  ) {
    let channel = FlutterMethodChannel(
      name: "com.mesting.music/\(name)", binaryMessenger: messenger)
    channel.setMethodCallHandler(handler)
    channels.append(channel)
  }

  private func event(
    _ name: String, messenger: FlutterBinaryMessenger,
    current: @escaping () -> Any?
  ) -> MusicEventStream {
    let stream = MusicEventStream(current: current)
    let channel = FlutterEventChannel(name: "com.mesting.music/\(name)", binaryMessenger: messenger)
    channel.setStreamHandler(stream)
    streams.append(channel)
    handlers.append(stream)
    return stream
  }

  private func output() -> [String: Any] {
    let port = AVAudioSession.sharedInstance().currentRoute.outputs.first
    let local = port?.portType == .builtInSpeaker || port?.portType == .builtInReceiver
    let id = port?.uid ?? "speaker"
    let name = local ? "本机扬声器" : port?.portName ?? "音频输出"
    let kind = local ? "phone" : "headphones"
    return [
      "id": id, "name": name, "kind": kind, "available": true,
      "routes": [
        [
          "id": id, "name": name, "kind": kind,
          "selected": true, "selectable": false,
        ]
      ],
    ]
  }

  private func presenter() -> UIViewController? {
    var controller = UIApplication.shared.connectedScenes.compactMap { $0 as? UIWindowScene }
      .flatMap { $0.windows }.first { $0.isKeyWindow }?.rootViewController
    while let presented = controller?.presentedViewController { controller = presented }
    return controller
  }

  private func share(_ call: FlutterMethodCall, result: @escaping FlutterResult) {
    let args = call.arguments as? [String: Any] ?? [:]
    let diagnostic = [
      "shareDiagnosticJson", "shareQishuiDiagnosticJson", "shareNeteaseAdDiagnosticJson",
    ].contains(call.method)
    let text = (args[call.method == "shareToWeChat" ? "url" : "text"] as? String) ?? ""
    guard diagnostic || call.method == "shareText" || call.method == "shareToWeChat",
      diagnostic || !text.isEmpty, let controller = presenter()
    else {
      result(FlutterMethodNotImplemented)
      return
    }
    let items: [Any]
    if diagnostic {
      guard let path = args["path"] as? String, FileManager.default.isReadableFile(atPath: path)
      else {
        result(FlutterError(code: "file_unavailable", message: "导出文件不可用，请重试", details: nil))
        return
      }
      items = [URL(fileURLWithPath: path)]
    } else {
      items =
        call.method == "shareToWeChat" && URL(string: text) != nil
        ? [URL(string: text)!] : [text]
    }
    let sheet = UIActivityViewController(activityItems: items, applicationActivities: nil)
    sheet.popoverPresentationController?.sourceView = controller.view
    sheet.popoverPresentationController?.sourceRect = CGRect(
      x: controller.view.bounds.midX, y: controller.view.bounds.midY, width: 1, height: 1)
    controller.present(sheet, animated: true) { result(nil) }
  }

  private func saveImage(_ call: FlutterMethodCall, result: @escaping FlutterResult) {
    guard call.method == "saveImage", let args = call.arguments as? [String: Any],
      let typed = args["bytes"] as? FlutterStandardTypedData,
      typed.data.count <= 10 * 1024 * 1024, UIImage(data: typed.data) != nil
    else {
      result(FlutterError(code: "invalid_image", message: "图片文件不可用", details: nil))
      return
    }
    PHPhotoLibrary.requestAuthorization(for: .addOnly) { status in
      guard status == .authorized || status == .limited else {
        DispatchQueue.main.async {
          result(
            FlutterError(
              code: "permission_denied",
              message: "请在系统设置中允许保存照片", details: nil))
        }
        return
      }
      var identifier: String?
      PHPhotoLibrary.shared().performChanges({
        let request = PHAssetCreationRequest.forAsset()
        request.addResource(with: .photo, data: typed.data, options: nil)
        identifier = request.placeholderForCreatedAsset?.localIdentifier
      }) { success, _ in
        DispatchQueue.main.async {
          if success {
            result(identifier)
          } else {
            result(FlutterError(code: "save_failed", message: "图片保存失败，请重试", details: nil))
          }
        }
      }
    }
  }
}

private final class MusicEventStream: NSObject, FlutterStreamHandler {
  private let current: () -> Any?
  private var sink: FlutterEventSink?
  init(current: @escaping () -> Any?) { self.current = current }
  func emit(_ value: Any?) { sink?(value) }
  func onListen(withArguments arguments: Any?, eventSink events: @escaping FlutterEventSink)
    -> FlutterError?
  {
    sink = events
    events(current())
    return nil
  }
  func onCancel(withArguments arguments: Any?) -> FlutterError? {
    sink = nil
    return nil
  }
}
