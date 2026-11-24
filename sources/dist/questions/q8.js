"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortingPrice = sortingPrice;
// BubleSort Used | Two point technique | Sorting for Price. Question 8
function sortingPrice(products) {
    for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < products.length - i - 1; j++) {
            if (products[j].price > products[j + 1].price) {
                [products[j], products[j + 1]] = [products[j + 1], products[j]];
            }
        }
    }
}
