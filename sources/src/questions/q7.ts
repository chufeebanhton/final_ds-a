import type { Product } from '../demoData.js';

// QuickSort Used | Sorting for ID
function pivotIndex(products: Product[], left: number, right: number) {
    const pivot = products[right].id;
    let i = left - 1;

    for (let j = left; j < right; j++) {
        if (products[j].id! <= pivot) { // Id Comparison
            i++;

            [products[i], products[j]] = [products[j], products[i]];
        }
    }

    // Turn out Pivot
    [products[i + 1], products[right]] = [products[right], products[i + 1]];
    return i + 1;
}

// Quick Sort by ID
export function qsById(products: Product[], left: number, right: number): void { // Quick sort Used
    if (left > right) return;
    const pindex = pivotIndex(products, left, right);
    qsById(products, left, pindex - 1);
    qsById(products, pindex + 1, right);
}

export function binarySearchById(products: Product[], target: number, left: number, right: number): Product | undefined {
    if (left >= right) return undefined;
    const mid = Math.floor(left + (right - left) / 2);
    if (products[mid].id === target) return products[mid];
    if (products[mid].id < target) {
        return binarySearchById(products, target, mid + 1, right)
    } else {
        return binarySearchById(products, target, left, mid);
    }
}
