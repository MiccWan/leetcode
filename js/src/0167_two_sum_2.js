/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let a = 0;
  let b = nums.length - 1;

  while (b > a) {
    const s = nums[a] + nums[b];
    if (s === target) {
      return [a + 1, b + 1];
    }
    else if (s > target) {
      b--;
    }
    else {
      a++;
    }
  }
};

console.log(twoSum([5,25,75]));