// Ladder

function solution(A, B) {
    let f = new Array(A.length+1);
    f[0] = 1;
    f[1] = 1;
    // Bitwise shifting any number x to the left by y bits yields x * 2 ** y. So e.g.: 9 << 3 translates to: 9 * (2 ** 3) = 9 * (8) = 72.
    let MAX = 1<<30;

    for (let i = 2; i < f.length; ++i) {
        f[i] = f[i-1] + f[i-2];
        f[i] = f[i] % MAX;
    }
    // console.log(f)

    let res = new Array(A.length);

    for (let i = 0; i < A.length; ++i) {
        res[i] = f[A[i]] % (1 << B[i]);
    }

    return res;
}

[[[4, 4, 5, 5, 1], [3, 2, 4, 3, 1]]].forEach(([e1, e2]) => console.log(solution(e1, e2)))


// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
// 0, 1, 1, 2, 3, 1, 0,  1,  1,  2,  3

// 2, 4, 8, 16, 32, 64, 