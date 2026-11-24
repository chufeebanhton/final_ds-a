import type { Product } from "../demoData.js";

export function linearSearchByName(products: Product[],key: string): Product[] | string {
    let result: Product[] | undefined = [];
    for(let i = 0; i < products.length; i++) {
        if (products[i].name.trim().toLowerCase() === key.trim().toLowerCase()) {
            result.push(products[i])
            break;
        }
    } return result.length > 0 ? result : 'Item is not Found';
}