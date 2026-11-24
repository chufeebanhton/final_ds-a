"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readline = readline;
const prompts_1 = require("@inquirer/prompts");
const node_console_1 = require("node:console");
async function readline(message, type = { type: 'number' }) {
    (0, node_console_1.clear)();
    let result = await (0, prompts_1.input)({
        message: message
    });
    if (type.type === 'number') {
        return (parseInt(result) === -1) ? readline(`${message} again`) : Number(result);
    }
    else {
        return result;
    }
}
