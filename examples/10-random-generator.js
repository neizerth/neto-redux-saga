function* randomGenerator() {
  while (true) {
    yield Math.random();
  }
}

const randomIterator = randomGenerator();

console.log(randomIterator.next()); // { value: 0.123456789, done: false }
console.log(randomIterator.next()); // { value: 0.987654321, done: false }
console.log(randomIterator.next()); // { value: 0.123456789, done: false }
