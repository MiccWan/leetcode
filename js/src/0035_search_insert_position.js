/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = -1;
  let right = nums.length;
  while (right - left > 1) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    else if (nums[mid] > target) {
      right = mid;
    }
    else {
      left = mid;
    }
  }
  return right;
};
