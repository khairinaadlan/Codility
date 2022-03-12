// MinPerimeterRectangle

function solution(N) {
    for (let i = Math.ceil(Math.sqrt(N)); i >= 1; i--) {
        if (N / i % 1 == 0) {
            return i * 2 + ((N / i) * 2)
        }
    }
    return 0;
}

[[30]].forEach(([e]) => console.log(solution(e)))