// StoneWall

function solution(H) {
    let stack = new Array()
    let blockCount = 0;

    for (let h of H) {
        while((!stack.length < 1) && (stack[stack.length - 1] > h)) {
            stack.pop();
        }
        if ((!stack.length < 1) && (stack[stack.length - 1] == h)) {

        } else {
            stack.push(h);
            blockCount++;
        }
    }
    return blockCount;
}

[[[8, 8, 5, 7, 9, 8, 7, 4, 8]]].forEach(([e]) => console.log(solution(e)))