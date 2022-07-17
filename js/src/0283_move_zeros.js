/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let a = 0;
  let b = 0;
  let tmp;

  while (b < nums.length) {
    if (nums[b] !== 0) {
      tmp = nums[a];
      nums[a] = nums[b];
      nums[b] = tmp;
      a++;
    }
    b++;
  }
};

const a = [0,1,0,3,12];
moveZeroes(a);
console.log(a);