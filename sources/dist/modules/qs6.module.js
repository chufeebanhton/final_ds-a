"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qs6 = qs6;
const q6_1 = require("../questions/q6");
const inquirer_1 = require("../units/inquirer");
async function qs6(products) {
    const target = `Keychron K8 Pro`;
    const result = (0, q6_1.linearSearchByName)(products, target);
    if (await (0, inquirer_1.yesno)(`Find \x1b[36m${target}\x1b[0m in products?`)) {
        if (result)
            console.table(result);
        else
            console.log('\x1b[31mPRODUCT NOT FOUND!\x1b[0m');
    }
    ;
    if (await (0, inquirer_1.yesno)('Back to selections?'))
        return;
}
