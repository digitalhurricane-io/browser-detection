"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_ie11_1 = require("./is-ie11");
function isIE(ua) {
    ua = ua || window.navigator.userAgent;
    return ua.indexOf("MSIE") !== -1 || is_ie11_1.default(ua);
}
exports.default = isIE;
