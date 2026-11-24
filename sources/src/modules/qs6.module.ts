import { Product } from "../demoData";
import { linearSearchByName } from "../questions/q6";
import { yesno } from "../units/inquirer";

export async function qs6(products: Product[]) {
    const target = `Keychron K8 Pro`;
    const result = linearSearchByName(products, target);
    if (await yesno(`Find \x1b[36m${target}\x1b[0m in products?`)) {
        if (result) console.table(result)
        else console.log('\x1b[31mPRODUCT NOT FOUND!\x1b[0m')
    };
    if (await yesno('Back to selections?')) return;
}