const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution(A) {
    let i = 1;
    while(i < 10) {
        console.log(A, "*", i, "=", A*i);
        i += 1
    }
}

solution(input[0]);