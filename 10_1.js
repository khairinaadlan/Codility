// CountFactors

// COMMAND LINE ARGUMENT
// console.log(process.argv);
// const myArgs = process.argv.slice(2);
// console.log("myArgs: ", myArgs);
// myArgs.forEach(element => {
//     console.log(solution(Number(element)))
// });

// COMMAND LINE INPUT
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.question(`Enter Number: `, (n) => {
    console.log(solution(Number(n)));
    readline.close();
});

function solution(N) {
    let i = 0;
    let result = 0;
    while (i * i < N) {
        if (N % i == 0) {
            result += 2;
        }
        i += 1;
    }
    if (i * i == N) {
        result += 1;
    }
    return result;
}

// [[24],[10],[90]].forEach(([e1,e2,e3]) => console.log(solution(e1,e2,e3)))

// FOR INPUT FROM FILES

// const fs = require('fs')
// fs.readFile('/Users/joe/test.txt', 'utf8' , (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(data)
// })
