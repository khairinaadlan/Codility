// NumberSolitaire

function solution(A) {
    let r = new Array(A.length);
    // console.log(r);
    for (let i = 0; i < r.length; i++) {
        if (i == 0) {
            r[i] = A[i];
        } else {
            let maxOnThisSquare = Number.MIN_VALUE;
            // console.log(maxOnThisSquare);
            
            for (let j = 1; j <= 6; j++) {
                if (i - j >= 0) {
                    maxOnThisSquare = Math.max(
                        maxOnThisSquare,
                        r[i - j] + A[i]
                    );
                } 
            }
            r[i] = maxOnThisSquare;
        }
        
    }
    return r[r.length - 1];
};

[[[1, -2, 0, 9, -1,-2]]].forEach(([e]) => console.log(solution(e)))