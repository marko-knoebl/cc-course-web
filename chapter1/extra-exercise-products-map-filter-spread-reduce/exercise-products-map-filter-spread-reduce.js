const products = [
  {
    name: "ThinkPad X1",
    type: "laptop",
    price: 1599,
    height: 23,
    width: 35,
  },
  {
    name: "IPhone 12",
    type: "phone",
    price: 799,
    height: 11,
    width: 6.5,
  },
  {
    name: "IPhone 13",
    type: "phone",
    price: 999,
    height: 11,
    width: 6.5,
  },
  {
    name: "Thinpad T490",
    type: "laptop",
    price: 399,
    height: 22,
    width: 30,
  },
];

/**
 * returns an array of just the phones
 */
function getPhones(products) {
  // TODO: implement
}

/**
 * returns an array of laptops chaper than 1000
 */
function getCheapLaptops(products) {
  // TODO: implement
}

/**
 * returns an array of phone names
 * e.g. ["IPhone 12", "IPhone 13"]
 */
function getPhoneNames(products) {
  // TODO: implement
}

/**
 * given an array of products with dimensions in cm,
 * returns an array where "width" and "height" are converted to inches
 * the rest of the product information remains the same
 */
function toInches(products) {
  // TODO: implement
}

/**
 * given an array of products,
 * return an array of the same products where all laptops appear first
 */
function laptopsFirst(products) {
  // TODO: implement
}

/**
 * given an array of products,
 * return their total price
 */
function totalPrice(products) {
  // TODO: implement
}

console.log(getPhones(products));
console.log(getCheapLaptops(products));
console.log(getPhoneNames(products));
console.log(toInches(products));
console.log(laptopsFirst(products));
console.log(totalPrice(products));
