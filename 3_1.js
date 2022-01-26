// FrogJmp

function solution (X, Y, D) {
    let distance = Y - X;
    let jumps = Math.ceil(distance / D);
    return jumps;
}

[[10, 85, 30]].forEach(([e1, e2, e3]) => console.log(solution(e1, e2, e3)));