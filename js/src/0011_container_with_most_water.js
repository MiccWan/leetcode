/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let maxA = (r - l) * Math.min(height[l], height[r]);
  while (r > l) {
    const oldL = l;
    const oldR = r;

    if (height[l] <= height[oldR]) {
      while (r > l && height[oldL] >= height[l]) {
        l++;
      }
    }

    if (height[oldL] >= height[r]) {
      while (r > l && height[r] <= height[oldR]) {
        r--;
      }
    }

    const newA = (r - l) * Math.min(height[l], height[r]);
    if (newA > maxA) {
      maxA = newA;
    }
  }

  return maxA;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
console.log(maxArea([2, 3, 4, 5, 18, 17, 6]));