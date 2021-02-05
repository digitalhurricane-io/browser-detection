"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isChromeOS(ua) {
    ua = ua || window.navigator.userAgent;
    return /CrOS/i.test(ua);
}
exports.default = isChromeOS;
