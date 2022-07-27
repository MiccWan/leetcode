/**
 * @param {number[]} x
 * @param {number[]} y
 * @return {number}
 */
var findMedianSortedArrays = function (x, y) {
  // TODO
  console.log(`##############################`);

  // x.length < y.length
  if (x.length > y.length) {
    [x, y] = [y, x];
  }

  // ensure both not empty
  const m1 = Math.floor((x.length + y.length - 1) / 2);
  const m2 = Math.floor((x.length + y.length) / 2);
  if (!x.length) {
    return (y[m1] + y[m2]) / 2
  }

  function findk(x, y, m) {
    let l1 = 0, l2 = 0, r1 = x.length - 1, r2 = y.length - 1;
    let p1 = Math.ceil((l1 + r1) / 2), p2 = m - p1;
    while (l1 <= r1 && l2 <= r2) {
      if (p2 < 0 || p2 >= y.length) {
        // sanity check
        console.error('y[p2] out of bound', p2);
      }

      if (x[p1] === y[p2]) {
        return x[p1];
      }
      else if (x[p1] > y[p2]) {
        r1 = p1 - 1;
        l2 = p2;
      }
      else {
        l1 = p1;
        r2 = p2 - 1;
      }
      p1 = Math.ceil((l1 + r1) / 2);
      p2 = m - p1;
    }

    if (l1 <= r1) {
      return x[p1];
    }
    else if (l2 <= r2) {
      return y[p2];
    }
    else {
      console.error(`No ans found`);
      // return Math.min(x[p1], y[p2]);
    }
  }

  const v1 = findk(x, y, m1);
  const v2 = findk(x, y, m2);
  return (v1 + v2) / 2;
};
