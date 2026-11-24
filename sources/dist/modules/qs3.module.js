"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qs3 = qs3;
const q3_1 = require("../questions/q3");
const inquirer_1 = require("../units/inquirer");
async function qs3(products) {
    if (!await (0, inquirer_1.yesno)('\x1b[36mQUESTION 3\x1b[0m: \x1b[33mPush all products to stack?\x1b[0m'))
        return;
    const myStack = new q3_1.Stack(1000);
    products.forEach(item => myStack.push(item));
    console.log('\x1b[32mPushing completed!\x1b[0m');
    let str = ``;
    myStack.toArray().forEach(item => str += `${item.name} \x1b[33m->\x1b[0m `);
    str += '\x1b[33mFRONT\x1b[0m';
    console.log(str);
    if (await (0, inquirer_1.yesno)('Back to selections?'))
        return;
}
