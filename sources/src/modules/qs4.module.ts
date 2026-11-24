import { Product } from "../demoData";
import { circleQueue } from "../questions/q4";
import { yesno } from "../units/inquirer";

export async function qs4(products: Product[]) {
    if (!await yesno('\x1b[36mQUESTION 3\x1b[0m: \x1b[33mPush all products to Queue?\x1b[0m')) return;
    const myQueue = new circleQueue<Product>(1000);
    products.forEach(item => myQueue.enQueue(item));
    console.log('\x1b[32mPushing completed!\x1b[0m');
    let str = `FRONT ->`;
    products.forEach(item => {
        str += `${item.name} \x1b[33m->\x1b[0m`
    });
    str += '\x1b[33mTAIL\x1b[0m';
    console.log(str);
    if (await yesno('Back to selections?')) return
}