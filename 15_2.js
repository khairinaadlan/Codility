// CountDistinctSlices

function solution(M, A) {
    let sum = 0;
    let front = 0;
    let back = 0;
    let set = new Set();
    while (front < A.length) {
        while (front < A.length && !set.has(A[front])) {
            sum += front - back + 1;
            set.add(A[front]);
            front += 1;
        }
        while (A[back] != A[front]) {
            set.delete(A[back]);
            back += 1;
        }
        set.delete(A[back]);
        back += 1;
    }
    return Math.min(sum, 1000000000);

}

[[6, [3, 4, 5, 5, 2]]].forEach(([e1, e2]) => console.log(solution(e1, e2)))