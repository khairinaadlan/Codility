// MinAvgTwoSlice

function solution (A) {
     //  console.log(A)
     //  let MinAvgTwoSlice = new Set();
     
     let indexOfMinOf2 = -1;
     let minSumOf2 = Number.MAX_VALUE;
     
     let indexOfMinOf3 = -1;
     let minSumOf3 = Number.MAX_VALUE;

     for (let i = 0; i < A.length - 1; i++) {
         let val_1 = A[i];
         let val_2 = A[i + 1];
         let sumOf2 = val_1 + val_2;
         if (sumOf2 < minSumOf2) {
             minSumOf2 = sumOf2;
             indexOfMinOf2 = i;
         }
         
         if (i < A.length - 2) {
             let val_3 = A[i + 2];
             let sumOf3 = val_1 + val_2 + val_3;
             if (sumOf3 < minSumOf3) {
                 minSumOf3 = sumOf3;
                 indexOfMinOf3 = i;
             }
         }
    }
     if (indexOfMinOf3 == -1) {
         return indexOfMinOf2;
     }
     let avg2 = minSumOf2 / 2;
     let avg3 = minSumOf3 / 2;
     if (avg2 < avg3) {
         return indexOfMinOf2;
     }
     return Math.min(indexOfMinOf2, indexOfMinOf3);
}

[[[ 4,2,2,5,1,5,8 ]]].forEach(([e]) => console.log(solution(e)));