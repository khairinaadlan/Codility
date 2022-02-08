// ChocolatesByNumbers

function solution(N, M) {
    return N/gcd(N, M, 1);
}

function gcd(a, b, res) {
    if (a == b) {
        return res * a;
    }
    else if ((a % 2 == 0) && (b % 2 == 0)) {
        return gcd(a / 2, b / 2, 2 * res);
    }
    else if (a % 2 == 0) {
        return gcd(a / 2, b, res);
    }
    else if (b % 2 == 0) {
        return gcd(a, b / 2, res);
    }
    else if (a > b) {
        return gcd(a - b, b, res);
    }
    else {
        return gcd(a, b - a, res);
    }
}

[[10, 4]].forEach(([e1, e2]) => console.log(solution(e1, e2)));