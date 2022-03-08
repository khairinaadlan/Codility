// EquiLeader

function solution(A) {

    let dominator = 0;
    let dominatorCount = 0;

    let counters = new Map();

    for (let i = 0; i < A.length; i++) {
        let a = A[i];
        if (!counters.has(a)) {
            counters.set(a, 1);
        } else {
            counters.set(a, counters.get(a) + 1);
        }
        if (counters.get(a) > A.length / 2) {
            dominator = a;
            dominatorCount = counters.get(a);
        }
    }

    let equiLeaders = 0;

    let leadersInRightSide = dominatorCount;
    let countRightSide = A.length;
    let countLeftSide = 0;
    let leadersInLeftSide = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] == dominator) {
            leadersInRightSide--;
            leadersInLeftSide++;
        }
        countLeftSide++;
        countRightSide--;

        if (leadersInLeftSide > countLeftSide / 2) {
            if (leadersInRightSide > countRightSide / 2) {
                equiLeaders++;
            }
        }
    }
    return equiLeaders;
}

[[[4, 3, 4, 4, 4, 2]]].forEach(([e]) => console.log(solution(e)))