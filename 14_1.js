// MinMaxDivision

function solution(K, M, A) {
    let min = 0;
    let max = 0;
    for (let a of A) {
        max += a;
        min = Math.max(min, a);
    }
    let bestAnswer = max;

    while(min <= max) {
        let mid = Math.floor((min + max) / 2);
        // console.log(mid)
        let blocks = checkBlocks(A, mid);
        if (blocks > K) {
            min = mid + 1;
        } else {
            max = mid - 1;
            if (mid < bestAnswer) {
                bestAnswer = mid;
            }
        }
    }
    return bestAnswer;
}

function checkBlocks(A, guess) {
    let blocks = 1;
    let blockSum = 0;

    for (let a of A) {
        blockSum += a;
        if (blockSum > guess) {
            blockSum = a;
            blocks++
        }
    }
    return blocks;
}

[[3, 5, [2, 1, 5, 1, 2, 2, 2]]].forEach(([e1, e2, e3]) => console.log(solution(e1, e2, e3)));