"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_ios_firefox_1 = require("./is-ios-firefox");
var is_firefox_1 = require("./is-firefox");
function isMobileFirefox(ua) {
    ua = ua || window.navigator.userAgent;
    return (is_ios_firefox_1.default(ua) ||
        (/iPhone|iPod|iPad|Mobile|Tablet/i.test(ua) && is_firefox_1.default(ua)));
}
exports.default = isMobileFirefox;
