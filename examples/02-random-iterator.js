const randomIterator = {
  next: function () {
    return {
      value: Math.random(),
      done: false,
    };
  },
};

randomIterator.next(); // { value: 0.123456789, done: false }
randomIterator.next(); // { value: 0.987654321, done: false }
