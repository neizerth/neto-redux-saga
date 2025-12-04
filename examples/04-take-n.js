const randomData = {
  [Symbol.iterator]: function () {
    let i = 0;
    return {
      next: function () {
        if (i < 10) {
          i++;
          return {
            value: Math.random(),
            done: false,
          };
        }

        return {
          done: true,
        };
      },
    };
  },
};

for (const value of randomData) {
  console.log(value);
}

console.log("--------------------------------");

for (const value of randomData) {
  console.log(value);
}
