// Brackets

function solution(S) {
    stack = new String();
    console.log(S, stack, S.length)

    for(let i = 0; i < S.length; i++) {
        let ch = S.substring(i, i + 1);
        console.log(ch);
        if(ch == "(" | ch == "[" | ch == "{") {
            stack = stack.concat(ch);
            console.log(stack, "m");
        } else {
            if (stack === "") {
                return 0;
            }
            if(ch === ")") {
                if (stack.pop != "(") {
                    return 0;
                }
            }
            if (ch === "]") {
                if (stack.pop != "[") {
                    return 0;
                }
            }
            if (ch === "}") {
                if (stack.pop != "{") {
                    return 0;
                }
            }
        }
    }
    // if (stack != "") {
    //     return 0;
    // }
    return 1
}

[["{[()()]}"]].forEach(([e]) => console.log(solution(e)));