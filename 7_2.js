// Fish

function solution(A, B) {
    let survivals = 0;
    let stack = [];

    for (let i = 0; i < A.length; i++) {
        let fish = A[i];
        let direction = B[i];
        if (direction == 0) {
            let survives = true;
            // stack.length > 0 works, but stack !== [] doesn't
            while (stack.length > 0) {
                let oppFish = stack.pop();
                if (oppFish > fish) {
                    stack.push(oppFish);
                    survives = false;
                    break;
                }
            }
            if (survives) {
                survivals++;
            }
        } else {
            stack.push(fish);
        }
    }
    // to add fish 0 that survives
    survivals += stack.length;
    return survivals;
};

[[[4, 3, 2, 1, 5], [0, 1, 0, 0, 0]]].forEach(([e1, e2]) => console.log(solution(e1, e2)));