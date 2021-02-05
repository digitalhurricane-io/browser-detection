"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isIe11(ua) {
    ua = ua || window.navigator.userAgent;
    return ua.indexOf("Trident/7") !== -1;
}
exports.default = isIe11;
