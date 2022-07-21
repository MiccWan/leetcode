var calculateMinimumHP = function (dungeon) {
    const m = dungeon.length
    const n = dungeon[0].length;
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(-1));
    function get(i, j) {
        if (dp[i][j] === -1) {
            dp[i][j] = find(i, j);
        }
        return dp[i][j];
    }

    function find(i, j) {
        if (i === m - 1 && j === n - 1) {
            return Math.max(1 - dungeon[i][j], 1);
        }

        if (i === m || j === n) {
            return Infinity;
        }

        const right = get(i, j + 1);
        const down = get(i + 1, j);

        return Math.max(Math.min(right, down) - dungeon[i][j], 1);
    }
    return get(0, 0);
};

// const arr = [[-2,-5,10],[-3,-10,30],[3,1,-5]];
const arr = [[-2, -3, 3], [-5, -10, 1], [10, 30, -5]]
console.log(calculateMinimumHP(arr));