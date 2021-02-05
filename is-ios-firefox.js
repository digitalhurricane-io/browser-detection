"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isIosFirefox(ua) {
    ua = ua || window.navigator.userAgent;
    return /FxiOS/i.test(ua);
}
exports.default = isIosFirefox;
