"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_ios_webview_1 = require("./is-ios-webview");
function isIosUIWebview(ua, statusBarVisible) {
    statusBarVisible =
        typeof statusBarVisible !== "undefined"
            ? statusBarVisible
            : window.statusbar.visible;
    return is_ios_webview_1.default(ua) && !statusBarVisible;
}
exports.default = isIosUIWebview;
