// Dominator

function solution(A) {
    let counters = new Map();

    for (let i = 0; i < A.length; i++) {
        let a = A[i];
        if (!counters.has(a)) {
            counters.set(a, 1);
        } else {
            counters.set(a, counters.get(a) + 1);
        }
        if (counters.get(a) > A.length/2) {
            return i;
        }
    }
    return -1;
}


[[[3,4,3,2,3,-1,3,3]]].forEach(([e]) => console.log(solution(e)));