const jsProductGenerator = function () {
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
  let index = 0;
  return {
    next: function () {
      if (index < products.length) {
        return {
          value: products[index++],
          done: false,
        };
      }
      return { done: true };
    },
  };
};
