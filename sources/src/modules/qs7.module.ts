import { clear } from "node:console";
import { Product } from "../demoData";
import { binarySearchById, qsById } from "../questions/q7";
import { yesno } from "../units/inquirer";
import { printProducts } from "../questions/q1&q2";

export async function qs7(products: Product[]) {
    if (!await yesno(`\x1b[36mSort products by ID using Quick Sort\x1b[0m?`)) return;
    clear();
    qsById(products, 0, products.length - 1);
    console.log(`\x1b[32mSORTING COMPLETED!\x1b[0m?`)
    printProducts(products);
    console.log();
    if (await yesno(`\x1b[36mBinary Search By ID ${20}\x1b[0m?`)) {
        const result = binarySearchById(products, 20, 0, products.length - 1);
        clear();
        if (result) {
            console.log();
            console.log('\x1b[32mFinding success!\x1b[0m?');
            console.log();
            console.table([result]);
        } else console.log('\x1b[31mPRODUCT NOT FOUND!\x1b[0m')
    };
    if (await yesno('Back to selections?')) return;
}