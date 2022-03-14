// Peaks

function isPeak(A, i) {
    if (A.length === 0 || A.length === 1) {
        return 0;
    }
    if (i === 0 || i === A.length - 1) {
        return 0;
    } else {
        if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
            return 1;
        } else {
            return 0;
        }
    }
}
function solution(A) {
    var peak = [];
    for (var i = 0; i < A.length; ++i) {
        peak.push(isPeak(A, i));
    }
    // eg peak: [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0];

    var count_peak = [0];
    for (i = 0; i < A.length; ++i) {
        count_peak.push(count_peak[i] + peak[i]);
    }
    // eg count_peak: [0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 3, 3];

    if (count_peak[A.length] === 0) {
        return 0;
    }
    if (count_peak[A.length] === 1) {
        return 1;
    }

    var verifying;
    for (var div = 2; div < A.length + 1; ++div) {
        if (A.length % div === 0) {
            verifying = 0;
            for (i = 0; i < A.length / div; ++i) {
                if (count_peak[(i + 1) * div] - count_peak[i * div] > 0) {
                    ++verifying;
                }
            }
            if (verifying === A.length / div) {
                return A.length / div;
            }
        }
    }
}

// function solution(A) {
    // // score 90%:
    // let peaks = [];

    // for (let i = 1; i < A.length - 1; i++) {
    //     if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
    //         peaks.push(i);
    //     }
    // }

    // let max = 0;

    // for (let i = 1; i < A.length; i++) {
    //     if (A.length % i == 0) {
    //         let bi = 0;
    //         let block = A.length / i;
    //         for (let ind in peaks) {
    //             let p = peaks[ind];
    //             if (bi * block <= p && p < (bi + 1) * block) {
    //                 bi++;
    //             }
    //         }
    //         if (bi == i) {
    //             max = i;
    //         }
    //     }
    // }

    // return max;

    // // score 90%:
    // if (A.length < 3) {
    //     return 0;
    // }

    // let peaks = [];
    // for (let i = 0; i < A.length - 1; i++) {
    //     if (A[i - 1] < A[i] && A[i + 1] < A[i]) {
    //         peaks.push(i);
    //     }   
    // }

    // if (peaks.length == 0) {
    //     return 0;
    // }

    // for (let blockLength = 3; blockLength < A.length / 2; blockLength++) {
    //     if (A.length % blockLength !== 0) {
    //         continue;
    //     }

    //     let currentPeak = 0;

    //     let ok = true;

    //     for (let blockStart = 0; blockStart < A.length; blockStart += blockLength) {
    //         let foundPeak = false;

    //         while (currentPeak < peaks.length) {
    //             if (peaks[currentPeak] < blockStart + blockLength) {
    //                 foundPeak = true;
    //                 currentPeak++;
    //             } else if (peaks[currentPeak] >= blockStart + blockLength) {
    //                 break;
    //             }
    //         }
    //         if (!foundPeak) {
    //             ok = false;
    //             break;
    //         }
    //     }

    //     if (ok) {
    //         return A.length / blockLength;
    //     }
    // }
    // return 1;
// }

[[[1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]]].forEach(([e]) => console.log(solution(e)))