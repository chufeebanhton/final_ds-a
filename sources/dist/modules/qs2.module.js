"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qs2 = qs2;
const q1_q2_1 = require("../questions/q1&q2");
const inquirer_1 = require("../units/inquirer");
async function qs2(products) {
    console.log('\x1b[1;36mQUESTION 2: Get Amount of Products\x1b[0m');
    console.log('\x1b[32mLook at amount column that has just been changed!\x1b[0m');
    (0, q1_q2_1.calculateAmount)(products);
    (0, q1_q2_1.printProducts)(products);
    await (0, inquirer_1.yesno)('Back to Selections');
    return;
}
