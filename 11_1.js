// CountNonDivisible

function solution(A) {
    let count = new Map();

    for (let i = 0; i < A.length; i++) {
        var c = 0
        if(count.has(A[i])) {
            c = count.get(A[i]);
        }
        c++;
        count.set(A[i],c);
    }

    let divisorsCount = new Map();
    count.forEach((value, key) => {
        // console.log(value, key)
        let divisorCount = 0;
        for (let val = 1; val <= Math.sqrt(key); val++) {
            if (key % val == 0) {
                if (count.has(val)) {
                    divisorCount += count.get(val);
                }
                if (val < Math.sqrt(key)) {
                    let opp = key / val;
                    if (count.has(opp)) {
                        divisorCount += count.get(opp);
                    }
                }
            }
        }
        divisorsCount.set(key, divisorCount);
    });

    let nonDivisors = new Array(A.length);
    for (let i = 0; i < A.length; i++) {
        nonDivisors[i] = A.length - divisorsCount.get(A[i]);
    }
    

    return nonDivisors;    
    
    // Object.keys(count) dont work

    // // solution 2
    // const divisors = A.map((e) => 0);
    // // console.log(divisors);
    // for (let i = 0; i<A.length; i++) {
    //     let e = A[i];
    //     for (let j = i+1; j<A.length; j++) {
    //         let f = A[j];
    //         if (f % e === 0) {
    //             divisors[j]++;
    //         }
    //         if (e % f === 0) {
    //             divisors[i]++;
    //         }
    //     }        
    // }

    // const res = divisors.map(e => A.length - e - 1);
    // // console.log("res: ", res);
    // return res;
    

    // // solution 3
    // const lenOfA = A.length;
    // // So an array of counters is created with length 2*N + 1(max index equal to max possible value in array)
    // const counters = Array(lenOfA * 2 + 1).fill(0);
    // for (let i = 0; i < lenOfA; i++) counters[A[i]]++;
    // // console.log(counters)
    // // console.log('___________');
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