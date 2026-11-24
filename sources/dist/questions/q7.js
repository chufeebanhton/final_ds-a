"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qsById = qsById;
exports.binarySearchById = binarySearchById;
// QuickSort Used | Sorting for ID
function pivotIndex(products, left, right) {
    const pivot = products[right].id;
    let i = left - 1;
    for (let j = left; j < right; j++) {
        if (products[j].id <= pivot) { // Id Comparison
            i++;
            [products[i], products[j]] = [products[j], products[i]];
        }
    }
    // Turn out Pivot
    [products[i + 1], products[right]] = [products[right], products[i + 1]];
    return i + 1;
}
// Quick Sort by ID
function qsById(products, left, right) {
    if (left > right)
        return;
    const pindex = pivotIndex(products, left, right);
    qsById(products, left, pindex - 1);
    qsById(products, pindex + 1, right);
}
function binarySearchById(products, target, left, right) {
    if (left >= right)
        return undefined;
    const mid = Math.floor(left + (right - left) / 2);
    if (products[mid].id === target)
        return products[mid];
    if (products[mid].id < target) {
        return binarySearchById(products, target, mid + 1, right);
    }
    else {
        return binarySearchById(products, target, left, mid);
    }
}
