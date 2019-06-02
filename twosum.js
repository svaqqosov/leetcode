const a = {};
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i += 1) {
    if (a[nums[i]] !== undefined) {
      return [a[nums[i]], i];
    }
    a[target - nums[i]] = i;
    console.log(a);
  }
  return false;
};
const b = [2, 7, 8, 10];
const target = 9;
const result = twoSum(b, target);
console.log(result);
