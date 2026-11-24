import { clear } from "node:console";
import { Product } from "../demoData";
import { yesno } from "../units/inquirer";
import { sortingPrice } from "../questions/q8";
import { printProducts } from "../questions/q1&q2";

export async function qs8(products: Product[]): Promise<void> {
    if (!await yesno(`\x1b[36mSort products by price using Bubble Sort\x1b[0m?`)) return;
    clear();
    sortingPrice(products);
    console.log(`\x1b[32mSORTING COMPLETED!\x1b[0m?`)
    printProducts(products);
    console.log();
    if (await yesno('Back to selections?')) return;
}