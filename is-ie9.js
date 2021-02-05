"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isIe9(ua) {
    ua = ua || window.navigator.userAgent;
    return ua.indexOf("MSIE 9") !== -1;
}
exports.default = isIe9;
