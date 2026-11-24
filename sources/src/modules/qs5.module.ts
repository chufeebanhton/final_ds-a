import { clear } from "node:console";
import { Product } from "../demoData";
import { LinkedList } from "../questions/q5";
import { yesno } from "../units/inquirer";

export async function qs5(products: Product[]) {
    const myLinkedList = new LinkedList<Product>();
    if (!await yesno('\x1b[32mADD FIRST 7 ITEMS TO TAIL AND 3 TO HEAD ?[0m')) return;
    for (let i = 0; i < 7; i++) {
        myLinkedList.append(products[i]);
    }
    for (let i = 7; i< 10; i++) {
        myLinkedList.prepend(products[i]);
    }
    clear();
    console.log('\x1b[32mCOMPLETED\x1b[0m');
    let str = `\x1b[33mHEAD\x1b[0m ->`
    for(let item of myLinkedList.traverse()) {
        str += `${item.data!.name} \x1b[33m->\x1b[0m `
    };
    console.log();
    str += `\x1b[33mTAIL\x1b[0m`;
    console.log(str);
    console.log();
    if (await yesno('Back to selections?')) return;
}