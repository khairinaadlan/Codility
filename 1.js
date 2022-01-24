function solution(N) {
    let bString = N.toString(2);
    let started = false;
    console.log(bString);
    let counter = 0;
    let maxCount = 0;
    for(let i = 0; i < bString.length; i++) {
        let c = bString.substring(i, i+1);
        if(c == "1") {
            if(started) {
                if(counter > maxCount) {
                    maxCount = counter;
                }
            }
            counter = 0;
            started = true;
        }
        if(c == "0") {
            counter++;
        }
    }
    return maxCount;
}

[ [1041]].forEach(([element]) => console.log(solution(element)));
