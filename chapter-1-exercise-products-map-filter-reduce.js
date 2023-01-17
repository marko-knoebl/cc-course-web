const products = [
  {
    name: "IPhone 12",
    type: "phone",
    price: 799,
    height: 11,
    width: 6.5,
  },
  {
    name: "ThinkPad",
    type: "laptop",
    price: 1599,
    height: 23,
    width: 35,
  },
  // todo: fill in some more products
  // ...
];

// todo: implement: return an array of phones
const getPhones = (products) => null;

// todo: implement: get all laptops cheaper than 1000
const getCheapLaptops = (products) => null;

// todo:
// at the moment, all product dimensions are in cm.
// return an array where all dimensions are in inches
// and the rest of the information is the same
const toInches = (products) => null;

// todo:
// based on array of products,
// return the price of all products together (the sum)
const priceOfAllProducts = (products) => null;

console.log(getPhones(products));
console.log(getCheapLaptops(products));
console.log(toInches(products));
console.log(priceOfAllProducts(products));
