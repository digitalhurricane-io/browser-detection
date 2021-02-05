"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isIos(ua) {
    ua = ua || window.navigator.userAgent;
    return /iPhone|iPod|iPad/i.test(ua);
}
exports.default = isIos;
