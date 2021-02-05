"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isAndroid(ua) {
    ua = ua || window.navigator.userAgent;
    return /Android/.test(ua);
}
exports.default = isAndroid;
