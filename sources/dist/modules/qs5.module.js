"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qs5 = qs5;
const node_console_1 = require("node:console");
const q5_1 = require("../questions/q5");
const inquirer_1 = require("../units/inquirer");
async function qs5(products) {
    const myLinkedList = new q5_1.LinkedList();
    if (!await (0, inquirer_1.yesno)('\x1b[32mADD FIRST 7 ITEMS TO TAIL AND 3 TO HEAD ?[0m'))
        return;
    for (let i = 0; i < 7; i++) {
        myLinkedList.append(products[i]);
    }
    for (let i = 7; i < 10; i++) {
        myLinkedList.prepend(products[i]);
    }
    (0, node_console_1.clear)();
    console.log('\x1b[32mCOMPLETED\x1b[0m');
    let str = `\x1b[33mHEAD\x1b[0m ->`;
    for (let item of myLinkedList.traverse()) {
        str += `${item.data.name} \x1b[33m->\x1b[0m `;
    }
    ;
    console.log();
    str += `\x1b[33mTAIL\x1b[0m`;
    console.log(str);
    console.log();
    if (await (0, inquirer_1.yesno)('Back to selections?'))
        return;
}
