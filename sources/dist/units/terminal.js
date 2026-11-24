"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clear = clear;
const node_process_1 = require("node:process");
function clear() {
    node_process_1.stdout.write("\x1Bc");
}
