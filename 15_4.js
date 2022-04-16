// MinAbsSumOfTwo

function solution(A) {
    let a = A.sort((a, b) => a - b);
    // [-3, 1, 4]
    // [-10, -8, 3, 4, 5]
    
    let startIndex = 0;
    let endIndex = A.length - 1;
    let minAbsSum = Number.MAX_VALUE
    
    while (startIndex <= endIndex) {
        
        let absSum = Math.abs(a[startIndex] + a[endIndex]);
        if (absSum < minAbsSum) {
            minAbsSum = absSum;
        }

        if (Math.abs(a[startIndex]) > Math.abs(a[endIndex])) {
            startIndex++;
        } else {
            endIndex--;
        }
    }
    return minAbsSum
}

[[[1, 4, -3]], [[-8, 4, 5, -10, 3]]].forEach(([e]) => console.log(solution(e)))