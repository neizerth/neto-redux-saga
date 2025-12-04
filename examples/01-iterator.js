const iterator = {
  next: function () {
    return {
      value: 1,
      done: false,
    };
  },
};

iterator.next(); // { value: 1, done: false }
iterator.next(); // { value: 1, done: false }
