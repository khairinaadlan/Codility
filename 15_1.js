// AbsDistinct

function solution(A) {
    let long = new Set();
    let count = 0;
    for (let a of A) {
        if (long.has(Math.abs(a))) {

        } else {
            long.add(Math.abs(a));
            count++;
        }
    }
    return count;
}

[[[-5, -3, -1, 0, 3, 6]]].forEach(([e]) => console.log(solution(e)))