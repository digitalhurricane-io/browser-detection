"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isFirefox(ua) {
    ua = ua || window.navigator.userAgent;
    return /Firefox/i.test(ua);
}
exports.default = isFirefox;
