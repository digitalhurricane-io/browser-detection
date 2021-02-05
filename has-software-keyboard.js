"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_android_1 = require("./is-android");
var is_chrome_os_1 = require("./is-chrome-os");
var is_ios_1 = require("./is-ios");
function hasSoftwareKeyboard() {
    return is_android_1.default() || is_chrome_os_1.default() || is_ios_1.default();
}
exports.default = hasSoftwareKeyboard;
