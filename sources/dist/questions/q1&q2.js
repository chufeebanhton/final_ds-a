"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printProducts = printProducts;
exports.insertProduct = insertProduct;
exports.removeById = removeById;
exports.updateById = updateById;
exports.calculateAmount = calculateAmount;
// question 1, array
// Print list of Products
function printProducts(products) {
    console.table(products);
}
// Insert new Prodcut
function insertProduct(products, newProduct) {
    const index = products.indexOf(products.find(item => item.id === newProduct.id));
    if (index !== -1)
        return undefined;
    products.push(newProduct);
    return newProduct;
}
// Remove By Id. Not in-place sorting
function removeById(products, id) {
    let result;
    for (let i = products.length - 1; i >= 0; i--) {
        if (products[i].id === id) {
            result = products[i];
            products.splice(i, 1);
        }
    }
    return result;
}
// Update products
function updateById(products, id, product) {
    const index = products.indexOf(products.find(item => item.id === id));
    if (index === -1)
        return undefined;
    else {
        const result = Object.assign(products[index], product);
        return result;
    }
}
// Question 2
function calculateAmount(products) {
    for (let i = 0; i < products.length; i++) {
        products[i].amount = products[i].price * -(products[i].discount / 100 - 1);
    }
}
// // variables
// const newProduct: Product = {
//     id: 3, name: "Samsung Folk 6", image: "sangsungfolk.jpg", price: 19000000, quantity: 25, discount: 20,
// amount: 0
// }
// //run
// printProducts(); // Print
// insertProduct(newProduct);
// removeById(1);
// updateById(2, {id: 1, name: 'Test update'});
// calculateAmount(products);
// // 
