function gcd(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const g = gcd(nums.length, k);

  for (let i = 0; i < g; i++) {
    let j = i;
    let tmp = nums[j];
    let next;
    while(next != i) {
      next = (j + k) % nums.length;
      nums[next] ^= tmp;
      tmp ^= nums[next];
      nums[next] ^= tmp;
      j = next;
    }
  }
};

const a = [1,2,3,4,5,6,7];
rotate(a, 3);
console.log(a);
