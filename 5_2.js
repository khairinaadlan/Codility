// CountDiv

function solution(A, B, K) {
    return Math.floor(B / K) - Math.floor(A / K) + (A % K === 0 ? 1 : 0);
};

[[6, 11, 2]].forEach(([e1, e2, e3]) => console.log(solution(e1, e2, e3)))

// for efficiency can't use brute force. use math.