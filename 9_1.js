// MaxProfit

function solution(A) {
    let maxProfit = 0;
    let cumulativeProfit = 0;
    for (let i = 1; i < A.length; i++) {
        let profitThisDay = A[i] - A[i -1];
        if (profitThisDay > maxProfit) {
            maxProfit = profitThisDay;
        }
        cumulativeProfit += profitThisDay;
        if (cumulativeProfit > 0) {
            if (cumulativeProfit > maxProfit) {
                maxProfit = cumulativeProfit;
            }
        } else {
            cumulativeProfit = 0;
        }
    }
    return maxProfit;
}

[[[23171, 21011, 21123, 21366, 21013, 21367]]].forEach(([e]) => console.log(solution(e)));