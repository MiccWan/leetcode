/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length;

  while (right > left) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] >= 0) {
      right = mid;
    }
    else {
      left = mid + 1;
    }
  }
  left--;

  const result = [];
  while (left >= 0 || right < nums.length) {
    if (left < 0) {
      result.push(nums[right] ** 2);
      right++;
    }
    else if (right >= nums.length) {
      result.push(nums[left] ** 2);
      left--;
    }
    else if (-nums[left] < nums[right]) {
      result.push(nums[left] ** 2);
      left--;
    }
    else {
      result.push(nums[right] ** 2);
      right++;
    }
  }
  return result;
};

console.log(sortedSquares([-7, -3, 2, 3, 11]));