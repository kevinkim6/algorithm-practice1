const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().split('\n'); 

let result = Number(input[0]);
let count = Number(input[1]);

let check = 0;

for(let i = 2; i <= count+1; i++) {
    let [price, num] = input[i].split(" ");
    check += Number(price)*Number(num);
}

if(check == result) {
    console.log("Yes");
}
else {
    console.log("No");
}