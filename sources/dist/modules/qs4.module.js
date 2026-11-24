"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qs4 = qs4;
const q4_1 = require("../questions/q4");
const inquirer_1 = require("../units/inquirer");
async function qs4(products) {
    if (!await (0, inquirer_1.yesno)('\x1b[36mQUESTION 3\x1b[0m: \x1b[33mPush all products to Queue?\x1b[0m'))
        return;
    const myQueue = new q4_1.circleQueue(1000);
    products.forEach(item => myQueue.enQueue(item));
    console.log('\x1b[32mPushing completed!\x1b[0m');
    let str = `FRONT ->`;
    products.forEach(item => {
        str += `${item.name} \x1b[33m->\x1b[0m`;
    });
    str += '\x1b[33mTAIL\x1b[0m';
    console.log(str);
    if (await (0, inquirer_1.yesno)('Back to selections?'))
        return;
}
