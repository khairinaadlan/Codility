// GenomicRangeQuery

function solution(S, P, Q) {
    const counters = new Array(3).fill(0).map(() => new Array(S.length).fill(0));

    let a = 0;
    let c = 0;
    let g = 0;

    for (let i = 0; i < S.length; i++) {
        let ch = S.substring(i, i + 1);
        if (ch == "A") {
            a++;
        } else if (ch == "C") {
            c++;
        } else if (ch == "G") {
            g++;
        }
        counters[0][i + 1] = a;
        counters[1][i + 1] = c;
        counters[2][i + 1] = g;
    }
    
    let result = new Array(P.length);
    for (let i = 0; i < result.length; i++) {
        let startIndex = P[i];
        let endIndex = Q[i] + 1;

        let r = 4;

        for (let j = 0; j < 3; j++) {
            if (counters[j][startIndex] != counters[j][endIndex]) {
                r = j + 1;
                break;
            }
        }
        result[i] = r;
    }
    return result;
};

[['CAGCCTA', [2, 5, 0], [4, 5, 6]]].forEach(([e1, e2, e3]) => console.log(solution(e1, e2, e3)));