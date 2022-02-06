// CountNonDivisible

function solution(A) {
    // solution 1
    const divisors = A.map((e) => 0);
    // *console.log(divisors);*
    for (let i = 0; i<A.length; i++) {
        let e = A[i];
        for (let j = i+1; j<A.length; j++) {
            let f = A[j];
            if (f % e === 0) {
                divisors[j]++;
            }
            if (e % f === 0) {
                divisors[i]++;
            }
        }        
    }

    const res = divisors.map(e => A.length - e - 1);
    // *console.log("res: ", res);*
    return res;
    

    // solution 2
    // const lenOfA = A.length;
    // *So an array of counters is created with length 2*N + 1(max index equal to max possible value in array)*
    // const counters = Array(lenOfA * 2 + 1).fill(0);
    // for (let i = 0; i < lenOfA; i++) counters[A[i]]++;
    // *console.log(counters)*
    // *console.log('___________');*
    // const arrayOfNondivisors = [];

    // for (let i = 0; i < A.length; i++) {
    //     let nonDivisor = A.length;
    //     for (let j = 1; j * j <= A[i]; j++) {
    //         if (A[i] % j !== 0) continue;
    //         nonDivisor -= counters[j];
    //         if (j * j !== A[i]) nonDivisor -= counters[A[i] / j];
    //     }
    //     arrayOfNondivisors.push(nonDivisor);
    // }

    // return arrayOfNondivisors;
    
};

[[[3, 1, 2, 3, 6]]].forEach(([e]) =>
    console.log(solution(e))
);