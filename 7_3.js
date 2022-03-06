// Nesting

function solution(S) {
    let counter = 0;
    for (let i = 0; i < S.length; i++) {
        if (S.substring(i, i + 1) == "(") {
            counter++;
        } else {
            counter--;
        }
        // counter cant be negative, eg ')('
        if (counter < 0) {
            return 0;
        }
    }
    return counter == 0 ? 1 : 0;
};

[["(()(())())"], ["())"]].forEach(([e]) => console.log(solution(e)));