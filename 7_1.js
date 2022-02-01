// Brackets

function solution(S) {
    let stack = [];

    for (let i = 0; i < S.length; i++) {
        if ((S[i] == "(") | (S[i] == "[") | (S[i] == "{")) {
            stack.push(S[i]);
        } else {
            if (stack == []) {
                return 0;
            }
            if (S[i] === ")") {
                if (stack.pop(stack[stack.length - 1]) !== "(") {
                    return 0;
                }
            }
            if (S[i] === "]") {
                if (stack.pop(stack[stack.length - 1]) != "[") {
                    return 0;
                }
            }
            if (S[i] === "}") {
                if (stack.pop(stack[stack.length - 1]) != "{") {
                    return 0;
                }
            }
        }
    }
    if (stack != "") {
        return 0;
    }
    return 1;
}

[["{[()()]}"], ["([)()]"], [""]].forEach(([e1, e2, e3]) =>
    console.log(solution(e1, e2, e3))
);