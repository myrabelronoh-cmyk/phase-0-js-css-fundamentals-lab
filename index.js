// 1. calculateTax
function calculateTax(amount) {
  return amount * 0.1;
}

// 2. convertToUpperCase
function convertToUpperCase(text) {
  return String(text).toUpperCase();
}

// 3. findMaximum
function findMaximum(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2;
}

// 4. isPalindrome
function isPalindrome(word) {
  const normalized = String(word).toLowerCase().replace(/\s+/g, '');
  const reversed = normalized.split('').reverse().join('');
  return normalized === reversed;
}

// 5. calculateDiscountedPrice
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  return originalPrice - (originalPrice * discountPercentage) / 100;
}

if (typeof module !== 'undefined') {
  module.exports = {
    calculateTax,
    convertToUpperCase,
    findMaximum,
    isPalindrome,
    calculateDiscountedPrice,
  };
}