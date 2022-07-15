/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let pivot;

  // find pivot
  while (right > left) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    }
    else {
      right = mid;
    }
  }
  pivot = left;

  // do actual binary search with pivot
  left = 0;
  right = nums.length - 1;
  while (right >= left) {
    const mid = Math.floor((left + right) / 2);
    const actualMid = (mid + pivot) % nums.length;
    if (nums[actualMid] === target) {
      return actualMid;
    }
    if (nums[actualMid] < target) {
      left = mid + 1;
    }
    else {
      right = mid - 1;
    }
  }
  return -1;
};

console.log(search([4,5,6,7,0,1,2], 0));
console.log(search([4,5,6,7,0,1,2], 3));
console.log(search([1], 0));
console.log(search([1, 3], 3));