"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_chrome_1 = require("./is-chrome");
var MINIMUM_SUPPORTED_CHROME_VERSION = 61;
function isSupportedChromeVersion(ua) {
    var match = ua.match(/Chrome\/(\d+)\./);
    if (!match) {
        return false;
    }
    var version = parseInt(match[1], 10);
    return version >= MINIMUM_SUPPORTED_CHROME_VERSION;
}
function supportsPaymentRequestApi(ua) {
    ua = ua || window.navigator.userAgent;
    if (!window.PaymentRequest) {
        return false;
    }
    if (!is_chrome_1.default(ua)) {
        // if browser is not chrome based, but has Payment Request API
        // this means that it implemented the API after it was finalized
        return true;
    }
    // Chrome introduce the Payment Request API in some versions of
    // Android Chrome as early as Chrome v53, but it was not
    // finalized until v61
    return isSupportedChromeVersion(ua);
}
exports.default = supportsPaymentRequestApi;
