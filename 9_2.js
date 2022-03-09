// MaxSliceSum

function solution(A) {
//     // 53%
    // let sum = Number.MIN_VALUE;
    // let maxSum = Number.MIN_VALUE;

    // for (let a of A) {
    //     sum = Math.max(sum + a, a);
    //     maxSum = Math.max(sum, maxSum);
    // }
    // return maxSum;

    var sum = 0;
    var max = A[0];
    var maxCell = A[0];
    for (a of A) {
        sum = Math.max(0, sum + a);
        max = Math.max(max, sum);
        maxCell = Math.max(maxCell, a);
    }
    if (max == 0) return maxCell;
    return max;
};

[[[3, 2, -6, 4, 0]]].forEach(([e]) =>
    console.log(solution(e))
);