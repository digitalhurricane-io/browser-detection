"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_ios_1 = require("./is-ios");
var webkitRegexp = /webkit/i;
function isWebkit(ua) {
    return webkitRegexp.test(ua);
}
function isIosSafari(ua) {
    ua = ua || window.navigator.userAgent;
    return is_ios_1.default(ua) && isWebkit(ua) && ua.indexOf("CriOS") === -1;
}
exports.default = isIosSafari;
