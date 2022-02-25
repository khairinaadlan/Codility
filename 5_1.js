// PassingCars

function solution(A) {
    let eastBoundCarSeen = 0;
    let passingCars = 0;
    for (let a of A) {
        if (a == 0) {
            eastBoundCarSeen++;
        } else {
            passingCars+= eastBoundCarSeen;
            if (passingCars > 1000000000) {
                return -1;
            }
        }
    }
    return passingCars;
}

[[[0, 1, 0, 1, 1]]].forEach(([e]) => console.log(solution(e)));