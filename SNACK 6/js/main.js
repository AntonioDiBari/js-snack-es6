const products = [
  { title: "Mela", price: 2.3 },
  { title: "Banana", price: 1.5 },
  { title: "Mango", price: 2 },
  { title: "Pesca", price: 1.8 },
  { title: "Pera", price: 1.5 },
  { title: "Arancia", price: 2.2 },
];
/**
 *
 * @param {number} max il numero massimo
 * @param {number} min il numero minimo
 * @returns {number} number il numero generato
 */
function generateNumber(max, min) {
  const number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
}

// let ingredients = generateNumber(4, 2);
let product = 0;
let totalPrice = 0;

for (let i = 0; i < 4; i++) {
  product = generateNumber(5, 0);
  totalPrice += products[product].price;
  console.log(products[product]);
}
console.log(totalPrice);

// products.forEach((product) => {
//   console.log(products);
// });
