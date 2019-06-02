const arrayPairSum = (a) => {
  const b = a.sort((x, y, i = 0) => {
    console.log(x);
    return x - y;
  });
  let sum = 0;
  for (let i = 0; i < b.length; i += 2) {
    sum += b[i];
  }
  return sum;
};
// const result = arrayPairSum([1, 4, 3, 2]);
const result = arrayPairSum([6214, -2290, 2833, -7908]);
console.log(result);
