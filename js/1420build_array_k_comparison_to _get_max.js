/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var numOfArrays = function (n, m, k) {
    const MODULO = 1e9 + 7;
    const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0).map(() => new Array(k + 2).fill(-1)));

    function get(a, b, c) {
        console.log(dp);
        console.log(a, b, c);
        if (dp[a][b][c] === -1) {
            return dp[a][b][c] = find(a, b, c);
        }
        return dp[a][b][c];
    }

    function find(a, b, c) {
        if (c > k) {
            return 0;
        }

        if (a === n) {
            return 1;
        }
        else {
            let sum = 0;
            for (let i = 1; i <= m; ++i) {
                if (i > b) {
                    sum = (sum + get(a + 1, i, c + 1)) % MODULO;
                }
                else {
                    sum += (sum + get(a + 1, b, c)) % MODULO;
                }
            }
            return sum;
        }
    }

    return get(0, 0, 0);
};

console.log(numOfArrays(2, 3, 1));