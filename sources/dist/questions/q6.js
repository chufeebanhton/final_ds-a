"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linearSearchByName = linearSearchByName;
function linearSearchByName(products, key) {
    let result = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].name.trim().toLowerCase() === key.trim().toLowerCase()) {
            result.push(products[i]);
            break;
        }
    }
    return result.length > 0 ? result : 'Item is not Found';
}
