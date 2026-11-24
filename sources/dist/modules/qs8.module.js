"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qs8 = qs8;
const node_console_1 = require("node:console");
const inquirer_1 = require("../units/inquirer");
const q8_1 = require("../questions/q8");
const q1_q2_1 = require("../questions/q1&q2");
async function qs8(products) {
    if (!await (0, inquirer_1.yesno)(`\x1b[36mSort products by price using Bubble Sort\x1b[0m?`))
        return;
    (0, node_console_1.clear)();
    (0, q8_1.sortingPrice)(products);
    console.log(`\x1b[32mSORTING COMPLETED!\x1b[0m?`);
    (0, q1_q2_1.printProducts)(products);
    console.log();
    if (await (0, inquirer_1.yesno)('Back to selections?'))
        return;
}
