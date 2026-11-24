import { Product } from "../demoData";
import { calculateAmount, printProducts } from "../questions/q1&q2";
import { yesno } from "../units/inquirer";

export async function qs2(products: Product[]) {
    console.log('QUESTION 2: Get Amount of Products');
    console.log('Look at amount column that has just been changed!');
    calculateAmount(products);
    printProducts(products);
    await yesno('Back to Selections');
    return;
}