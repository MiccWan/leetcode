/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const chars = new Set();
  let maxLength = 0;
  let left = 0;
  let right = 0;
  while (right < s.length) {
    if (!chars.has(s[right])) {
      chars.add(s[right]);
      right++;
      maxLength = Math.max(maxLength, right - left);
    }
    else {
      chars.delete(s[left]);
      left++;
    }
  }

  return maxLength;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
