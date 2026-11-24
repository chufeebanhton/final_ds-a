"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAmount = calculateAmount;
exports.qsSortByAmount = qsSortByAmount;
function calculateAmount(products, items) {
    for (let i = 0; i < items.length; i++) {
        items[i].amount = items[i].price * -(items[i].discount / 100 - 1);
    }
    console.log('AMOUNT CALCULATING...');
}
function pivotIndex(products, left, right) {
    const pivot = products[right].amount;
    let i = left - 1;
    for (let j = left; j < right; j++) {
        if (products[j].amount <= pivot) { // Id Comparison
            i++;
            [products[i], products[j]] = [products[j], products[i]];
        }
    }
    // Turn out Pivot
    [products[i + 1], products[right]] = [products[right], products[i + 1]];
    return i + 1;
}
function qsSortByAmount(products, left, right) {
    if (left > right)
        return;
    const pindex = pivotIndex(products, left, right);
    qsSortByAmount(products, left, pindex - 1);
    qsSortByAmount(products, pindex + 1, right);
}
