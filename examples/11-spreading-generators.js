function* product1Generator() {
  yield {
    name: "Milk",
    price: 100,
    quantity: 10,
  };
}

function* product2Generator() {
  yield {
    name: "Bread",
    price: 20,
    quantity: 20,
  };
}

function* productGenerator() {
  yield* product1Generator();
  yield* product2Generator();
}

const productIterator = productGenerator();

console.log(productIterator.next()); // { value: { name: 'Milk', price: 100, quantity: 10 }, done: false }
console.log(productIterator.next()); // { value: { name: 'Bread', price: 20, quantity: 20 }, done: false }
console.log(productIterator.next()); // { value: undefined, done: true }
