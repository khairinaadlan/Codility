// Distinct

function solution(A) {
    let distint = new Set(A);
    return distint.size
};

[[[2, 1, 1, 2, 3, 1]]].forEach(([e]) => console.log(solution(e)))