"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qs9 = qs9;
const node_console_1 = require("node:console");
const inquirer_1 = require("../units/inquirer");
const q1_q2_1 = require("../questions/q1&q2");
const q9_1 = require("../questions/q9");
async function qs9(products) {
    if (!await (0, inquirer_1.yesno)(`\x1b[36mCACULATE AMOUNT?\x1b[0m?`))
        return;
    (0, node_console_1.clear)();
    (0, q1_q2_1.calculateAmount)(products);
    console.log(`\x1b[32mCOMPLETED!\x1b[0m?`);
    (0, q1_q2_1.printProducts)(products);
    console.log();
    if (await (0, inquirer_1.yesno)(`\x1b[36mSORTING AMOUNT BY QUICK SORT\x1b[0m?`)) {
        (0, q9_1.qsSortByAmount)(products, 0, products.length - 1);
        (0, node_console_1.clear)();
        console.log(`\x1b[32mCOMPLETED!\x1b[0m?`);
        (0, q1_q2_1.printProducts)(products);
        console.log();
    }
    ;
    if (await (0, inquirer_1.yesno)('Back to selections?'))
        return;
}
