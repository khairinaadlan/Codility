// MaxDoubleSliceSum

function solution(A) {
    let s = new Array(A.length).fill(0);
    let e = new Array(A.length).fill(0);

    for (let i = 1; i < A.length - 1; i++) {
        s[i] = Math.max(A[i], s[i - 1] + A[i]);
        if (s[i] < 0) {
            s[i] = 0;
        }
    }
    for (let i = A.length - 2; i > 0; i--) {
        e[i] = Math.max(A[i], e[i + 1] + A[i]);
        if (e[i] < 0) {
            e[i] = 0;
        }
    }

    let max = 0;
    for (let i = 1; i < A.length - 1; i++) {
        max = Math.max(s[i - 1] + e[i + 1], max);
    }
    return max;
}

[[[3, 2, 6, -1, 4, 5, -1, 2]]].forEach(([e]) => console.log(solution(e)));