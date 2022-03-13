// Flags

function solution(A) {
    let peaks = [];

    for (let i = 1; i < A.length - 1; i++) {
        if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
            peaks.push(i);
        }
    }

    if (peaks.length < 2) {
        return peaks.length;
    }

    let root = Math.floor(Math.sqrt(peaks[peaks.length - 1] - peaks[0]));

    for (i = root + 1; i > 0; i--) {
        let distanceSum = 0;
        let flags = 1;

        for (let j = 0; j < peaks.length - 1; j++) {
            let current = peaks[j];
            let next = peaks[j + 1];
            let difference = Math.abs(next - current);

            if (difference + distanceSum >= i) {
                flags++;
                distanceSum = 0;
            } else distanceSum += difference;

            if (flags == i) return flags;
        }
    }
}

[[[5]],[[1, 3, 2]],[[1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]]].forEach(([e]) =>
    console.log(solution(e))
)

// WRONG
    // let peak = new Array();
    // let k = 0;
    // let flags = 0;

    // if (A.length < 3) {

    // } else {
    //     for (let i = 1; i < A.length - 1; i++) {
    //         if (A[i] > A[i + 1] && A[i] > A[i - 1]) {
    //             peak.push(i);
    //             k++;
    //         }
    //     }

    //     if (k > 1) {
    //         for (let i = 1; i < peak.length; i++) {
    //             if (peak[i - 1] - peak[i] <= k) {
    //                 flags++;
    //             }
    //         }
    //     } else {
    //         flags = 1;
    //     }
    // }
    // return flags;