const products = [
  "Laptop",
  "Phone",
  "Headphones",
  "Monitor"
];

console.log(products);

function logFirstProduct() {
  console.log(products[0]);
}

logFirstProduct();

function addProduct(productName) {
  products.push(productName);
}

addProduct("Keyboard");
console.log(products);

function updateProductName(position, newName) {
  products[position] = newName;
}

function removeLastProduct() {
  products.pop();
}

