const data = [1, 2, 3, 4, 5];

const dataIterator = data[Symbol.iterator]();

console.log(dataIterator.next()); // { value: 1, done: false }
console.log(dataIterator.next()); // { value: 2, done: false }
console.log(dataIterator.next()); // { value: 3, done: false }
console.log(dataIterator.next()); // { value: 4, done: false }
console.log(dataIterator.next()); // { value: 5, done: false }
console.log(dataIterator.next()); // { value: undefined, done: true }
