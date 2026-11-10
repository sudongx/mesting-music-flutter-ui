import CoreLocation
import Flutter

/// A one-shot, foreground grant. No background location or retained coordinates.
final class MestingLocationBridge: NSObject, CLLocationManagerDelegate {
  private let channel: FlutterMethodChannel
  private let manager = CLLocationManager()
  private var pending: FlutterResult?
  private var deadline: Timer?

  init(messenger: FlutterBinaryMessenger) {
    channel = FlutterMethodChannel(name: "mesting/together_location", binaryMessenger: messenger)
    super.init()
    manager.delegate = self
    manager.desiredAccuracy = kCLLocationAccuracyHundredMeters
    channel.setMethodCallHandler { [weak self] call, result in
      guard let self else { return }
      guard call.method == "requestFix" else {
        result(FlutterMethodNotImplemented)
        return
      }
      guard self.pending == nil else {
        result(FlutterError(code: "busy", message: "正在获取位置，请稍候", details: nil))
        return
      }
      self.pending = result
      self.deadline = Timer.scheduledTimer(withTimeInterval: 30, repeats: false) { [weak self] _ in
        self?.finish(FlutterError(code: "timeout", message: "获取位置超时，请重试", details: nil))
      }
      self.authorizeOrRequest()
    }
  }

  private func authorizeOrRequest() {
    guard pending != nil else { return }
    switch manager.authorizationStatus {
    case .notDetermined: manager.requestWhenInUseAuthorization()
    case .authorizedAlways, .authorizedWhenInUse: manager.requestLocation()
    default:
      finish(FlutterError(code: "permission_denied", message: "请在设置中允许使用当前位置", details: nil))
    }
  }

  func locationManagerDidChangeAuthorization(_ manager: CLLocationManager) {
    authorizeOrRequest()
  }

  func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
    guard let location = locations.last,
      location.horizontalAccuracy >= 0,
      abs(location.timestamp.timeIntervalSinceNow) < 60
    else {
      finish(FlutterError(code: "unavailable", message: "当前位置暂不可用，请重试", details: nil))
      return
    }
    finish([
      "latitude": location.coordinate.latitude,
      "longitude": location.coordinate.longitude,
      "accuracyMeters": location.horizontalAccuracy,
    ])
  }

  func locationManager(_ manager: CLLocationManager, didFailWithError error: Error) {
    finish(FlutterError(code: "unavailable", message: "当前位置暂不可用，请重试", details: nil))
  }

  private func finish(_ value: Any?) {
    deadline?.invalidate()
    deadline = nil
    manager.stopUpdatingLocation()
    let result = pending
    pending = nil
    result?(value)
  }
}
