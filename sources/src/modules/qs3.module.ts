import { Product } from "../demoData";
import { Stack } from "../questions/q3";
import { yesno } from "../units/inquirer";

export async function qs3(products: Product[]) {
    if (!await yesno('\x1b[36mQUESTION 3\x1b[0m: \x1b[33mPush all products to stack?\x1b[0m')) return;
    const myStack = new Stack<Product>(1000);
    products.forEach(item => myStack.push(item));
    console.log('\x1b[32mPushing completed!\x1b[0m');
    let str = ``;
    myStack.toArray().forEach(item => str += `${item.name} \x1b[33m->\x1b[0m `);
    str += '\x1b[33mFRONT\x1b[0m';
    console.log(str);
    if (await yesno('Back to selections?')) return
}