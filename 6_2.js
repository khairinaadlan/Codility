// MaxProductOfThree

function solution(A) {
    let a = A.sort((a, b) => a - b); 
    let last = a[A.length - 1];
    let secLast = a[A.length - 2];
    let thirdLast = a[A.length - 3];
    let maxProduct = last * secLast * thirdLast;

    if (last > 0) {
        if ((a[0] * a[1] > secLast * thirdLast)) {
            maxProduct = a[0] * a[1] * last;
        }
    }
    return maxProduct;
};

[
    [[-3, 1, 2, -2, 5, 6]],
    [[-7, 1, 2, -2, 5]],
    [[-6, -1, 0, 1, 2, 5]],
    [[-5, -6, -4, -7, -10]]
].forEach(([e]) => console.log(solution(e)));