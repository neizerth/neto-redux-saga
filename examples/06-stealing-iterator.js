const arrayLike = {
  [Symbol.iterator]: [][Symbol.iterator],
  0: "Ivan",
  1: "Petr",
  2: "Sidor",
  length: 3,
};

for (const name of arrayLike) {
  console.log(name);
}
