import type { Product } from "../demoData.js";
// question 1, array

// Print list of Products
export function printProducts(products: Product[]): void {
    console.table(products);
}

// Insert new Prodcut
export function insertProduct(products: Product[], newProduct: Product): Product | undefined {
    const index = products.indexOf(products.find(item => item.id === newProduct.id)!);
    if (index !== -1) return undefined;
    products.push(newProduct);
    return newProduct;
}

// Remove By Id. Not in-place sorting
export function removeById(products: Product[], id: number): Product | undefined {
    let result: Product | undefined;
    for (let i = products.length - 1; i >= 0; i--) {
        if (products[i].id === id) {
            result = products[i];
            products.splice(i, 1);
        }
    }
    return result;
}

// Update products
export function updateById(products: Product[], id: number, product: Partial<Product>): Product | undefined {
    const index = products.indexOf(products.find(item => item.id === id)!);
    if (index === -1) console.log('Product not Found!');
    else {
        const result = Object.assign(products[index], product);
        return result
    }
}

// Question 2
export function calculateAmount(products: Product[]) {
    for (let i: number = 0; i < products.length; i++) {
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


