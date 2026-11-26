import { Product } from "../demoData";
import { select } from "@inquirer/prompts";
import { Choice } from "../interfaces/interfaces";
import { insertProduct, printProducts, removeById, updateById } from "../questions/q1&q2";
import { clear } from "../units/terminal";
import { readline, yesno } from "../units/inquirer";

const subQuestions: Choice[] = [
    { name: '1. Print list of products', value: 'print' },
    { name: '2. Insert new product', value: 'insert'},
    { name: '3. Remove by Id', value: 'remove'},
    { name: '4. Update by Id', value: 'update'},
    { name: '5. Back to selections!', value: 'exit'}
];

export async function qs1(products: Product[]): Promise<void> {
    console.log('\n\x1b[1;36m❓ QUESTION 1: ARRAY\x1b[0m\n');
    const question = await select({
        message: 'Choise a Question:',
        choices: [...subQuestions]
    });
    switch (question) {
        case "print": {
            clear();
            printProducts(products);
            if (await yesno('Back to selections?')) return await qs1(products);
            break;
        };
        case "insert": {
            clear();
            const data = { id: 31, name: "TP-Link Nvidia AX55", image: "nvidia-ax55.jpg", price: 1800000, quantity: 9, discount: 20, amount: 0 };
            console.log(`\n\x1b[1;36mINSERT WITH DEMO DATA:\x1b[0m\n`);
            console.table([data]);
            if (await yesno()) {
                const result = insertProduct(products, data);
                clear();
                if (result !== undefined) {
                    console.log('\x1b[1;32mINSERT COMPELTED!\x1b[0m\n')
                    console.table([result]);
                } else {
                    console.log('\x1b[1;31mPRODUCT IS EXISTED!\x1b[0m\n');
                }
            }
            if (await yesno('Back to selections?')) return await qs1(products);
            break;
        }

        case "remove": {
            clear();
            const id = await readline('Enter ID', {type: 'number'});
            const result = removeById(products, id as number);
            console.log((result) ? '\x1b[1;32mRemove completed!\x1b[0m' : '\x1b[1;31mPRODUCT NOT FOUND!\x1b[0m');
            console.table((result) ? [result] : '');
            if (await yesno('Back to selections?')) return await qs1(products);
            break;
        }
        case "update": {
            clear();
            const id = await readline('Enter ID', {type: 'number'});
            const data = {name: "Update test"};
            console.log('\x1b[1;36mUPDATE NAME with DEMO DATA UNDER...\x1b[0m');
            console.table([data]);
            if (await yesno()) {
                const result = updateById(products, id as number, data);
                console.log(
                    (result) 
                    ? '\x1b[1;32mProduct updated!\x1b[0m' 
                    : '\x1b[1;31mProduct ID Not Found!\x1b[0m'
                );
                console.table((result)? [result] : '');
                break;
            }
            if (await yesno('Back to selections?')) return await qs1(products);
            break;
        };
        case "exit": return;
    }
}