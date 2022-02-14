// MaxNonoverlappingSegments

function solution(A, B) {
    let currentPosition = -1;
    let segmentCount = 0;

    for(let i = 0; i < A.length; i++) {
        if(A[i] > currentPosition) {
            currentPosition = B[i];
            segmentCount++;
        }
    }
    return segmentCount;
}

[[[1, 3, 7, 9, 9] , [5, 6, 8, 9, 10]]].forEach(([e1,e2]) => console.log(solution(e1, e2)))