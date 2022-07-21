/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let maxA = (r - l) * Math.min(height[l], height[r]);
  while (r > l) {
    const oriL = l;
    const oriR = r;

    if (height[oriL] <= height[oriR]) {
      while (r > l && height[oriL] >= height[l]) {
        l++;
      }
    }

    if (height[oriL] >= height[oriR]) {
      while (r > l && height[r] <= height[oriR]) {
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