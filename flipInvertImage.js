const flipAndInvertImage = function (a) {
  const b = [];
  for (let i = 0; i < a.length; i += 1) {
    b[i] = [];
    for (let j = 0; j < a[i].length; j += 1) {
      b[i][a[i].length - 1 - j] = 1 - a[i][j];
    }
  }
  return b;
};
// const b = [[1, 1, 0], [1, 0, 1], [0, 0, 0]];
const b = [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]];
const result = flipAndInvertImage(b);
console.log(result);

