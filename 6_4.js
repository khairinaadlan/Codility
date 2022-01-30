// NumberOfDIscIntersections

function solution(A) {
    let starts = new Array(A.length).fill(0);

    for (let i = 0; i < A.length; i++) {
        let radius = A[i];
        let startPos = i - radius;
        if (startPos < 0) {
            startPos = 0;
        }
        starts[startPos]++;
    }

    let total = 0;
    for (let i = 0; i < starts.length; i++) {
        total += starts[i];
        starts[i] = total;
    }

    let totalIntersections = 0;
    for (let i = 0; i < A.length; i++) {
        let radius = A[i];
        let endPos = i + radius;
        if (endPos > A.length - 1) {
            endPos = A.length - 1;
        }
        let intersections = Math.max(starts[i], starts[endPos]) - (i + 1);
        // console.log(starts[i], endPos, starts[endPos], i+1, intersections);
        totalIntersections += intersections;
        if (totalIntersections > 10000000) {
            return -1;
        }
    }
    return totalIntersections;
}

[[[1,5,2,1,4,0]]].forEach(([e]) => console.log(solution(e)))