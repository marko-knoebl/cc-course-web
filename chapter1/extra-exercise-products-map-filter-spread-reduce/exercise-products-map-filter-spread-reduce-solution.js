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
  return products.filter((product) => product.type === "phone");
}

/**
 * returns an array of laptops chaper than 1000
 */
function getCheapLaptops(products) {
  return products.filter(
    (product) => product.price < 1000 && product.type === "laptop"
  );
}

/**
 * returns an array of phone names
 * e.g. ["IPhone 12", "IPhone 13"]
 */
function getPhoneNames(products) {
  return products
    .filter((product) => product.type === "phone")
    .map((product) => product.name);
}

/**
 * given an array of products with dimensions in cm,
 * returns an array where "width" and "height" are converted to inches
 * the rest of the product information remains the same
 */
function toInches(products) {
  return products.map((product) => ({
    ...product,
    width: product.width / 2.54,
    height: product.height / 2.54,
  }));
}

/**
 * given an array of products,
 * return an array of the same products where all laptops appear first
 */
function laptopsFirst(products) {
  const laptops = products.filter((product) => product.type === "laptop");
  const rest = products.filter((product) => product.type !== "laptop");
  return [...laptops, ...rest];
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
