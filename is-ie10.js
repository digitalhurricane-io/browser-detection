"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isIe10(ua) {
    ua = ua || window.navigator.userAgent;
    return ua.indexOf("MSIE 10") !== -1;
}
exports.default = isIe10;
