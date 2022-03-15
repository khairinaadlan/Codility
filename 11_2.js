// CountSemiprimes

function solution(N, P, Q) {
    // Find Primes (2, 3, 5, 7, 11, 13)
    let notPrimes = new Array(N + 1).fill(false);
    for (let a = 2; a <= N / 2; a++) {
        for (let b = a * 2; b <= N; b+= a) {
            notPrimes[b] = true;
        }
    }

    let primes = [];
    for (let a = 2; a <= N; a++) {
        if (!notPrimes[a]) {
            primes.push(a);
        }
    }

    // Find semi-primes (4, 6, 9, 10, 14, 15, 121, 22, 25)

    let semiPrimes = new Array(N + 1).fill(0);
    for (let a = 0; a < primes.length - 1; a++) {
        for (let b = a; b < primes.length - 1; b++) {
            let primea = primes[a];
            let primeb = primes[b];
            if (primea * primeb >= semiPrimes.length) {
                break;
            }
            semiPrimes[primea * primeb] = 1;
        }
    }

    let c = 0;
    for (let i = 0; i < semiPrimes.length; i++) {
        c += semiPrimes[i];
        semiPrimes[i] = c;
    }

    // Get result
    let result = new Array(P.length)
    for (let i = 0; i < P.length; i++) {
        result[i] = semiPrimes[Q[i]] - semiPrimes[P[i] - 1]
    }
    return result;
}

[[26, [1, 4, 16], [26, 10, 20]]].forEach(([e1, e2, e3]) => console.log(solution(e1, e2, e3)))