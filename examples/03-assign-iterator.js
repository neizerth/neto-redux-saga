const randomIterator = {
  next: function () {
    return {
      value: Math.random(),
      done: false,
    };
  },
};

const randomData = {
  [Symbol.iterator]: function () {
    return randomIterator;
  },
};

for (const value of randomData) {
  console.log(value);
}
