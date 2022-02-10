// FibFrog

let fibNums = new Array();
let target;
let A = new Array();
let positions = new Array();

function solution(A) {
    this.A = A
    target = A.length;

    fibNums = new Array();
    fibNums.push(0);
    fibNums.push(1);
    
    for (let i = 0; ; i++) {
        let nextFibNum = fibNums[i] + fibNums[i + 1];
        if (nextFibNum <= A.length + 1) {
            fibNums.push(nextFibNum);
        } else {
            break;
        }
    }

    let steps = 0;
    positions.push(-1);

    while(!positions.length == 0) {
        steps++;
        if (attempJump()) {
            return steps;
        }
    }
    return -1;
}

function attempJump() {
    let newPositions = new Array();

    for (let position of positions) {
        for (let i = fibNums.length - 1; i >= 2; i--) {
            let fibNum = fibNums[i];

            if (position + fibNum == target) {
                return true;
            }

            if (position + fibNum < target) {
                if (this.A[position + fibNum] == 1) {
                    this.A[position + fibNum] = 0;                    
                    newPositions.push(position + fibNum);
                }
            }
        }
    }
    positions = newPositions;
    return false;
}

[[[0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0]]].forEach(([e]) => console.log(solution(e)))