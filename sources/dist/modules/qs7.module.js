"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qs7 = qs7;
const node_console_1 = require("node:console");
const q7_1 = require("../questions/q7");
const inquirer_1 = require("../units/inquirer");
const q1_q2_1 = require("../questions/q1&q2");
async function qs7(products) {
    if (!await (0, inquirer_1.yesno)(`\x1b[36mSort products by ID using Quick Sort\x1b[0m?`))
        return;
    (0, node_console_1.clear)();
    (0, q7_1.qsById)(products, 0, products.length - 1);
    console.log(`\x1b[32mSORTING COMPLETED!\x1b[0m?`);
    (0, q1_q2_1.printProducts)(products);
    console.log();
    if (await (0, inquirer_1.yesno)(`\x1b[36mBinary Search By ID ${20}\x1b[0m?`)) {
        const result = (0, q7_1.binarySearchById)(products, 20, 0, products.length - 1);
        (0, node_console_1.clear)();
        if (result) {
            console.log();
            console.log('\x1b[32mFinding success!\x1b[0m?');
            console.log();
            console.table([result]);
        }
        else
            console.log('\x1b[31mPRODUCT NOT FOUND!\x1b[0m');
    }
    ;
    if (await (0, inquirer_1.yesno)('Back to selections?'))
        return;
}
