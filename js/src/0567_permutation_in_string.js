class CharCounter {
  constructor() {
    this.counts = Array(26).fill(0);
    this.nonZero = 0;
  }

  add(c) {
    // 'a'.charCodeAt(0) === 97
    const n = c.charCodeAt(0) - 97;
    if (this.counts[n] === -1) {
      this.nonZero--;
    }
    else if (this.counts[n] === 0) {
      this.nonZero++;
    }

    this.counts[n]++;
  }

  remove(c) {
    // 'a'.charCodeAt(0) === 97
    const n = c.charCodeAt(0) - 97;
    if (this.counts[n] === 1) {
      this.nonZero--;
    }
    else if (this.counts[n] === 0) {
      this.nonZero++;
    }

    this.counts[n]--;
  }

  isEmpty() {
    return !this.nonZero;
  }
}

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) {
    return false;
  }

  const counter = new CharCounter();

  for (let i = 0; i < s1.length; i++) {
    counter.add(s1[i]);
    counter.remove(s2[i]);
  }

  if (counter.isEmpty()) {
    return true;
  }

  for (let i = 0; i < s2.length - s1.length; i++) {
    counter.add(s2[i]);
    counter.remove(s2[i + s1.length]);

    if (counter.isEmpty()) {
      return true;
    }
  }

  return false;
};

console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("ab", "eidboaoo"));
