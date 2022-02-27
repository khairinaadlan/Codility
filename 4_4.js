// MissingInteger

function solution(A) {
    // // try 1
    // const len = A.length;
    // const hash = {};
    // for (let i = 0; i < len; i++) {
    //     hash[A[i]] = A[i];
    // }
    // for (let i = 1; i < 1000002; i++) {
    //     if(!hash[i]) return i;
    // }
    // return 1;

    const set = new Set(A);
    let i = 1;
    while (true) {
        if (!set.has(i)) return i;
        i++;
    }

    // // try 3
    // let nums = new Set();

    // for (let i = 1; i < A.length + 1; i++) {
    //     nums.add(i);
    // }
    // console.log(nums);
    
    // for (let a of A) {
    //     nums.delete(a)
    // }
    // console.log(nums);
    
    // let setIter = nums.values();
    // return setIter.next().value;


    // // try 4
    // let smallNum = 1;
    // let unique = [...new Set(A)];
    // let sorted = unique.sort();

    // if (sorted[sorted.length - 1] < 1) {
    // } else if (sorted.length == 1) {
    //     if (sorted[0] == 1) {
    //         smallNum = 2
    //     } else {}
    // } else {
    //     for (let i = 0; i < sorted.length - 1; i++) {
    //         if (sorted[i] + 1 > 0) {
    //             if (sorted[i] !== sorted[i + 1] - 1) {
    //                 smallNum = sorted[i] + 1
    //                 break;
    //             } else {
    //                 smallNum = sorted[sorted.length - 1] + 1;
    //             }
    //         }
    //     }
    // }
    // return smallNum;
}

[
    [[1, 3, 6, 4, 1, 2]],
    [[1, 2, 3]],
    [[-1, -3]],
    [[3]]
].forEach(([e]) => console.log(solution(e)));