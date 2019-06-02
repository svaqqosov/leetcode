const sort = (a) => {
  const b = [];
  let j = 0;
  let k = a.length - 1;
  for (let i = 0; i < a.length / 2; i += 1) {
    if (a[i] % 2 === 0) {
      b[j++] = a[i];
    } else {
      b[k--] = a[i];
    }
    if (a.length - 1 - i !== i) {
      if (a[a.length - 1 - i] % 2 === 0) {
        b[j++] = a[a.length - 1 - i];
      } else {
        b[k--] = a[a.length - 1 - i];
      }
    }
  }
  return b;
};
const result = sort([2, 7, 5, 10]);
console.log(result);
