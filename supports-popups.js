"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MINIMUM_SUPPORTED_CHROME_IOS_VERSION = 48;
var is_android_1 = require("./is-android");
var is_ios_firefox_1 = require("./is-ios-firefox");
var is_ios_webview_1 = require("./is-ios-webview");
var is_chrome_1 = require("./is-chrome");
var is_samsung_1 = require("./is-samsung");
function isUnsupportedIosChrome(ua) {
    ua = ua || window.navigator.userAgent;
    var match = ua.match(/CriOS\/(\d+)\./);
    if (!match) {
        return false;
    }
    var version = parseInt(match[1], 10);
    return version < MINIMUM_SUPPORTED_CHROME_IOS_VERSION;
}
function isOperaMini(ua) {
    ua = ua || window.navigator.userAgent;
    return ua.indexOf("Opera Mini") > -1;
}
function isAndroidWebview(ua) {
    var androidWebviewRegExp = /Version\/[\d.]+/;
    ua = ua || window.navigator.userAgent;
    if (is_android_1.default(ua)) {
        return androidWebviewRegExp.test(ua) && !isOperaMini(ua);
    }
    return false;
}
function isOldSamsungBrowserOrSamsungWebview(ua) {
    return !is_chrome_1.default(ua) && !is_samsung_1.default(ua) && /samsung/i.test(ua);
}
function supportsPopups(ua) {
    ua = ua || window.navigator.userAgent;
    return !(is_ios_webview_1.default(ua) ||
        is_ios_firefox_1.default(ua) ||
        isAndroidWebview(ua) ||
        isOperaMini(ua) ||
        isUnsupportedIosChrome(ua) ||
        isOldSamsungBrowserOrSamsungWebview(ua));
}
exports.default = supportsPopups;
