// Triangle

function solution(A) {
    if (A.length < 3) {
        return 0;
    }

    let a = A.sort((a, b) => a - b); 
    for (let i = 0; i < A.length; i++) {
        if (A[i] + A[i + 1] > A[i + 2]) {
            return 1;
        }
    }
    return 0;
};

[[[10, 2, 5, 1, 8, 20]], [[10, 50, 5, 1]]].forEach(([e]) => console.log(solution(e)));

// because it is already sorted A[i] + A[i+2] > A[i+1] and A[i+1] + A[i+2] > A[i] is confirmed because A[i+2] is greater than  A[i+1] and also A[i]