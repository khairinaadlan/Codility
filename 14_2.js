// NailingPlanks

function solution(A, B, C) {
    let begin = 0;
    let end = C.length - 1;
    let res = -1;
    while (begin <= end) {
        var mid = parseInt((begin + end) / 2);
        if (check(A, B, C, mid + 1)) {
            end = mid - 1;
            res = mid + 1;
        } else {
            begin = mid + 1;
        }
    }
    return res;
}

function check(a, b, c, num) {
    let pNails = new Array(2 * c.length + 1).fill(0);
    for (var i = 0; i < num; ++i) {
        ++pNails[c[i]];
    }
    for (i = 1; i < pNails.length; ++i) {
        pNails[i] += pNails[i - 1];
    }
    for (i = 0; i < a.length; ++i) {
        if (pNails[b[i]] <= pNails[a[i] - 1]) return false;
    }
    return true;
}

[[[1, 4, 5, 8], [4, 5, 9, 10], [4, 6, 7, 10, 2]]].forEach(([e1, e2, e3]) => console.log(solution(e1, e2, e3)))