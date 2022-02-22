// TapeEquilibrium

function solution(A) {
    let sumDiff = 0;
    let sum1 = 0;
    
    let minSumDiff = Number.MAX_VALUE;

    for (let i = 0; i < A.length - 1; i++) {
        sum1 += A[i];
        let sum2 = A.reduce((a, b) => a + b, 0) - sum1;
        sumDiff = Math.abs(sum1 - sum2);

        if (sumDiff < minSumDiff) {
            minSumDiff = sumDiff;
        }       
    }
    return minSumDiff;
}

[[[3, 1, 2, 4, 3]]].forEach(([e]) => console.log(solution(e)))