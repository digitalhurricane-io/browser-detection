"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_edge_1 = require("./is-edge");
var is_samsung_1 = require("./is-samsung");
function isChrome(ua) {
    ua = ua || window.navigator.userAgent;
    return ((ua.indexOf("Chrome") !== -1 || ua.indexOf("CriOS") !== -1) &&
        !is_edge_1.default(ua) &&
        !is_samsung_1.default(ua));
}
exports.default = isChrome;
