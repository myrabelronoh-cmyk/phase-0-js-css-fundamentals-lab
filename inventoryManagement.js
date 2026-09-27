const products = ["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct() {
  console.log(products[0]);
}

function addProduct(productName) {
  products.push(productName);
}

function updateProductName(position, newName) {
  if (position >= 0 && position < products.length) {
    products[position] = newName;
  }
}

function removeLastProduct() {
  return products.pop();
}

module.exports = {
  products,
  logFirstProduct,
  addProduct,
  updateProductName,
  removeLastProduct
};

