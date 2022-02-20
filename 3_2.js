// PermMissingElem

function solution(A) {
// // sort method
//     let sorted = A.sort();
//     let missingElem = 0;
//     // console.log(sorted);
    
//     for (let i = 0; i < A.length; i++) {
//         // console.log(sorted[i]);
        
//         if (sorted[i] != sorted[i + 1] - 1) {
//             missingElem = sorted[i] + 1;
//             // return missingElem;
//             break;
//         }
        
//     }
//     return missingElem;

// // XOR method
//     let missingNumber = A.length + 1;
//     for (let i = 0; i < A.length; i++) {
//         missingNumber ^= (i + 1) ^ A[i];
//     }
//     return missingNumber;

// set method
    let list = new Set();

    for (let i = 1; i < A.length + 1; i++) {
        list.add(i)
    }
    for (let i = 0; i < A.length; i++) {
        list.delete(A[i]);
    }
    let setIter = list.values();
    return setIter.next().value;
};

[[[2, 3, 1, 5]]].forEach(([e]) => console.log(solution(e)));