"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isSamsungBrowser(ua) {
    ua = ua || window.navigator.userAgent;
    return /SamsungBrowser/i.test(ua);
}
exports.default = isSamsungBrowser;
