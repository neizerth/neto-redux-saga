function* productGenerator(products) {
  for (const product of products) {
    yield product;
  }
}

const products = [
  {
    name: "Milk",
    price: 100,
    quantity: 10,
  },
  {
    name: "Bread",
    price: 20,
    quantity: 20,
  },
  {
    name: "Eggs",
    price: 30,
    quantity: 30,
  },
];

const productIterator = productGenerator(products);

console.log(productIterator.next()); // { value: { name: 'Milk', price: 100, quantity: 10 }, done: false }
console.log(productIterator.next()); // { value: { name: 'Bread', price: 20, quantity: 20 }, done: false }
console.log(productIterator.next()); // { value: { name: 'Eggs', price: 30, quantity: 30 }, done: false }
console.log(productIterator.next()); // { value: undefined, done: true }
