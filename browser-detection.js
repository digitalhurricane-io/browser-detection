"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supportsPaymentRequestApi = exports.supportsPopups = exports.hasSoftwareKeyboard = exports.isSamsungBrowser = exports.isMobileFirefox = exports.isIosWKWebview = exports.isIosWebview = exports.isIosUIWebview = exports.isIosSafari = exports.isIosFirefox = exports.isIos = exports.isFirefox = exports.isEdge = exports.isIe11 = exports.isIe10 = exports.isIe9 = exports.isIe = exports.isChrome = exports.isChromeOS = exports.isAndroid = void 0;
var is_android_1 = require("./is-android");
exports.isAndroid = is_android_1.default;
var is_chrome_os_1 = require("./is-chrome-os");
exports.isChromeOS = is_chrome_os_1.default;
var is_chrome_1 = require("./is-chrome");
exports.isChrome = is_chrome_1.default;
var is_ie_1 = require("./is-ie");
exports.isIe = is_ie_1.default;
var is_ie9_1 = require("./is-ie9");
exports.isIe9 = is_ie9_1.default;
var is_ie10_1 = require("./is-ie10");
exports.isIe10 = is_ie10_1.default;
var is_ie11_1 = require("./is-ie11");
exports.isIe11 = is_ie11_1.default;
var is_edge_1 = require("./is-edge");
exports.isEdge = is_edge_1.default;
var is_firefox_1 = require("./is-firefox");
exports.isFirefox = is_firefox_1.default;
var is_ios_1 = require("./is-ios");
exports.isIos = is_ios_1.default;
var is_ios_firefox_1 = require("./is-ios-firefox");
exports.isIosFirefox = is_ios_firefox_1.default;
var is_ios_safari_1 = require("./is-ios-safari");
exports.isIosSafari = is_ios_safari_1.default;
var is_ios_uiwebview_1 = require("./is-ios-uiwebview");
exports.isIosUIWebview = is_ios_uiwebview_1.default;
var is_ios_webview_1 = require("./is-ios-webview");
exports.isIosWebview = is_ios_webview_1.default;
var is_ios_wkwebview_1 = require("./is-ios-wkwebview");
exports.isIosWKWebview = is_ios_wkwebview_1.default;
var is_mobile_firefox_1 = require("./is-mobile-firefox");
exports.isMobileFirefox = is_mobile_firefox_1.default;
var is_samsung_1 = require("./is-samsung");
exports.isSamsungBrowser = is_samsung_1.default;
var has_software_keyboard_1 = require("./has-software-keyboard");
exports.hasSoftwareKeyboard = has_software_keyboard_1.default;
var supports_popups_1 = require("./supports-popups");
exports.supportsPopups = supports_popups_1.default;
var supports_payment_request_api_1 = require("./supports-payment-request-api");
exports.supportsPaymentRequestApi = supports_payment_request_api_1.default;
