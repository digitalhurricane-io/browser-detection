"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isEdge(ua) {
    ua = ua || window.navigator.userAgent;
    return ua.indexOf("Edge/") !== -1;
}
exports.default = isEdge;
