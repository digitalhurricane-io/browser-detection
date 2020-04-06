import isIos from "./is-ios";

// The Google Search iOS app is technically a webview and doesn't support popups.
function isGoogleSearchApp(ua): boolean {
  return /\bGSA\b/.test(ua);
}

export default function isIosWebview(ua): boolean {
  ua = ua || window.navigator.userAgent;
  if (isIos(ua)) {
    if (isGoogleSearchApp(ua)) {
      return true;
    }

    return /.+AppleWebKit(?!.*Safari)/.test(ua);
  }

  return false;
}
