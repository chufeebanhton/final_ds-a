import { clear } from "node:console";
import { Product } from "../demoData";
import { yesno } from "../units/inquirer";
import { calculateAmount, printProducts } from "../questions/q1&q2";
import { qsSortByAmount } from "../questions/q9";

export async function qs9(products: Product[]): Promise<void> {
     if (!await yesno(`\x1b[36mCACULATE AMOUNT?\x1b[0m?`)) return;
        clear();
        calculateAmount(products);
        console.log(`\x1b[32mCOMPLETED!\x1b[0m?`)
        printProducts(products);
        console.log();
        if (await yesno(`\x1b[36mSORTING AMOUNT BY QUICK SORT\x1b[0m?`)) {
            qsSortByAmount(products, 0, products.length - 1);
            clear();
            console.log(`\x1b[32mCOMPLETED!\x1b[0m?`)
            printProducts(products);
            console.log();
        };
        if (await yesno('Back to selections?')) return;
}