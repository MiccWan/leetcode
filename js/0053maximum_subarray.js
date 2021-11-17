/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubArray = function (A) {
    let bestLeft;
    let bestRight;

    let bestI;
    var maxI = 0;
    var max = -Number.MAX_VALUE;

    for (var i = 0; i < A.length; i++) {

        if (maxI <= 0) {
            bestI = i;
            maxI = A[i]
        }
        else {
            maxI += A[i]
        }

        // bestISum = Math.max(bestISum + A[i], A[i]);
        
        // max = Math.max(max, bestISum);
        if (maxI >= max) {
            max = maxI;
            bestLeft = bestI;
            bestRight = i;
        }
    }
    console.log(bestLeft, bestRight);
    return max;
};

function test() {
    maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
    maxSubArray([5,4,-1,7,8]);
    maxSubArray([1]);
}

test();