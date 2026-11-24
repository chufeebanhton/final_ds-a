import type { Product } from "../demoData.js";

export function calculateAmount(products: Product[], items: Product[]) {
    for (let i: number = 0; i < items.length; i++) {
        items[i].amount = items[i].price * -(items[i].discount / 100 - 1);
    }
    console.log('AMOUNT CALCULATING...')
}

function pivotIndex(products: Product[], left: number, right: number) {
    const pivot = products[right].amount;
    let i = left - 1;

    for (let j = left; j < right; j++) {
        if (products[j].amount! <= pivot) { // Id Comparison
            i++;

            [products[i], products[j]] = [products[j], products[i]];
        }
    }

    // Turn out Pivot
    [products[i + 1], products[right]] = [products[right], products[i + 1]];
    return i + 1;
}

export function qsSortByAmount(products: Product[], left: number, right: number) {
    if (left > right) return;

    const pindex = pivotIndex(products, left, right);
    qsSortByAmount(products, left, pindex - 1);
    qsSortByAmount(products, pindex + 1, right);
}