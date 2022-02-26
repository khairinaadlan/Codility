// MaxCounters

function solution(N, A) {
    let maxValue = 0;
    let minValue = 0;
    let counters = new Array(N).fill(0);

    for (let i = 0; i < A.length; i++) {
        let operation = A[i];
        if (operation == N + 1) {
            minValue = maxValue;
        } else {
            operation--;
            counters[operation] = Math.max(counters[operation] + 1, minValue + 1);
            maxValue = Math.max(maxValue, counters[operation]);
        }
    }

    for (let i = 0; i < counters.length; i++) {
        counters[i] = Math.max(counters[i], minValue)
    }
    return counters
}

[[5, [3, 4, 4, 6, 1, 4, 4]]].forEach(([e1, e2]) => console.log(solution(e1, e2)))

// Wrong
    // let arr = new Array(N).fill(0);
    // let num = 0;
    // let maxCounter = 0;

    // for (let i = 0; i < A.length; i++) {
    //     num = A[i];
    //     if (num < N) {
    //         arr[num - 1]++;
    //         // console.log(arr);
    //     } else {
    //         maxCounter = Math.max(...arr);
    //         new_arr = arr.map((a) => maxCounter);
    //         arr = new_arr;
    //     }
    // }
    // return arr;