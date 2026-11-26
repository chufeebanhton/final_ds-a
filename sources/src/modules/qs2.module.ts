import { Product } from "../demoData";
import { calculateAmount, printProducts } from "../questions/q1&q2";
import { yesno } from "../units/inquirer";

export async function qs2(products: Product[]) {
    console.log('\x1b[1;36mQUESTION 2: Get Amount of Products\x1b[0m');
    console.log('\x1b[32mLook at amount column that has just been changed!\x1b[0m');
    calculateAmount(products);
    printProducts(products);
    await yesno('Back to Selections');
    return;
}