// CyclicRotation

function solution (A,K) {
     if (A.length == 0 | A.length == K) {
         return A;
     }

     for (let i = 0; i < K; i++) {
         let lastValue = A[A.length - 1]
         
         for (let j = A.length - 2; j >= 0; j--) {
            //  console.log(A[j + 1]);
            //  console.log(A[j]);
             A[j+1] = A[j];
         }
         A[0] = lastValue;
     }
     return A;

}

[[[3, 8, 9, 7, 6], 3]].forEach(([e1, e2]) => console.log(solution(e1, e2)));