"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_ios_1 = require("./is-ios");
// The Google Search iOS app is technically a webview and doesn't support popups.
function isGoogleSearchApp(ua) {
    return /\bGSA\b/.test(ua);
}
function isIosWebview(ua) {
    ua = ua || window.navigator.userAgent;
    if (is_ios_1.default(ua)) {
        if (isGoogleSearchApp(ua)) {
            return true;
        }
        return /.+AppleWebKit(?!.*Safari)/.test(ua);
    }
    return false;
}
exports.default = isIosWebview;
