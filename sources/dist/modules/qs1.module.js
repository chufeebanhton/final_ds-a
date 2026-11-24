"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qs1 = qs1;
const prompts_1 = require("@inquirer/prompts");
const q1_q2_1 = require("../questions/q1&q2");
const terminal_1 = require("../units/terminal");
const inquirer_1 = require("../units/inquirer");
const subQuestions = [
    { name: '1. Print list of products', value: 'print' },
    { name: '2. Insert new product', value: 'insert' },
    { name: '3. Remove by Id', value: 'remove' },
    { name: '4. Update by Id', value: 'update' },
    { name: '5. Back to selections!', value: 'exit' }
];
async function qs1(products) {
    console.log('QUESTION 1: ARRAY');
    const question = await (0, prompts_1.select)({
        message: 'Choise a Question:',
        choices: [...subQuestions]
    });
    switch (question) {
        case "print":
            {
                (0, terminal_1.clear)();
                (0, q1_q2_1.printProducts)(products);
                await qs1(products);
                break;
            }
            ;
        case "insert": {
            (0, terminal_1.clear)();
            const data = { id: 31, name: "TP-Link Nvidia AX55", image: "nvidia-ax55.jpg", price: 1800000, quantity: 9, discount: 20, amount: 0 };
            console.log(`INSERT WITH DEMO DATA:`);
            console.table([data]);
            if (await (0, inquirer_1.yesno)()) {
                const result = (0, q1_q2_1.insertProduct)(products, data);
                (0, terminal_1.clear)();
                if (result !== undefined) {
                    console.log('INSERT COMPELTED!');
                    console.table([result]);
                }
                else {
                    console.log('PRODUCT IS EXISTED!');
                }
            }
            await qs1(products);
            break;
        }
        case "remove": {
            (0, terminal_1.clear)();
            const id = await (0, inquirer_1.readline)('Enter ID', { type: 'number' });
            const result = (0, q1_q2_1.removeById)(products, id);
            console.log((result) ? 'Remove completed!' : '\x1b[31mPRODUCT NOT FOUND!\x1b[0m');
            console.table((result) ? [result] : '');
            await qs1(products);
            break;
        }
        case "update":
            {
                (0, terminal_1.clear)();
                const id = await (0, inquirer_1.readline)('Enter ID', { type: 'number' });
                const data = { name: "Update test" };
                console.log('UPDATE NAME with DEMO DATA UNDER...');
                console.table([data]);
                if (await (0, inquirer_1.yesno)()) {
                    (0, terminal_1.clear)();
                    const result = (0, q1_q2_1.updateById)(products, id, data);
                    console.log('Product updated!');
                    console.table([result]);
                    break;
                }
                await qs1(products);
            }
            ;
        default: return;
    }
}
