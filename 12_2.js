// CommonPrimeDivisors

function solution(A, B) {
    let count = 0;

    for (let i = 0; i < A.length; i++) {
        if (hasAllPrimeFactors(A[i], B[i]) && hasAllPrimeFactors(B[i], A[i])) {
            count++;
        }
    }
    return count;
}

// If all prime factors of Y are factors of X,
// then Y/gcd(X,Y) will be 1 or also contain only factors of X.

function hasAllPrimeFactors(x, y) {
    if (y == 1) {
        return true;
    }
    let gcd = getGcd(x, y, 1);
    if (gcd == 1) {
        return false;
    }
    return hasAllPrimeFactors(x, y/gcd);
}

function getGcd(a, b, res) {
    if (a == b) {
        return res * a;
    } else if (a % 2 == 0 && b % 2 == 0) {
        return getGcd(a / 2, b / 2, 2 * res);
    } else if (a % 2 == 0) {
        return getGcd(a / 2, b, res);
    } else if (b % 2 == 0) {
        return getGcd(a, b / 2, res);
    } else if (a > b) {
        return getGcd(a - b, b, res);
    } else {
        return getGcd(a, b - a, res);
    }
}

[[[15, 10, 3], [75, 30, 5]]].forEach(([e1, e2]) => console.log(solution(e1, e2)))