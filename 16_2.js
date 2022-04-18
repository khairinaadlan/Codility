// TieRopes

function solution(K, A) {
    let currentLength = 0;
    let rope = 0;

    for (let i = 0; i < A.length; i++) {
        currentLength += A[i]
        if (currentLength >= K) {
            rope++;
            currentLength = 0;
        }
        
    }
    return rope;
}

[[4, [1, 2, 3, 4, 1, 1, 3]]].forEach(([e1, e2]) => console.log(solution(e1, e2)))