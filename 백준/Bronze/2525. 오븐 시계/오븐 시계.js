const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let num1 = +input[0].split(' ')[0];
let num2 = +input[0].split(' ')[1];
let num3 = +input[1];

if (num2 + num3 < 60) {
    console.log(num1, num2+num3);
}

else if (num2 + num3 >= 60 && num2 + num3 < 120) {
    if (num1+1 == 24) {
        console.log(num1-23, num2+num3-60);
    }
    else {
        console.log(num1+1, num2+num3-60);
    }
}

else if (num2 + num3 >= 120 && num2 + num3 < 180) {
    if (num1+2 > 23) {
        console.log(num1-22, num2+num3-120);
    }
    else{
        console.log(num1+2, num2+num3-120);
    }
}

else if (num2 + num3 >= 180 && num2 + num3 < 240) {
    if (num1+3 > 23) {
        console.log(num1-21, num2+num3-180);
    }
    else{
        console.log(num1+3, num2+num3-180);
    }
}

else if (num2 + num3 >= 240 && num2 + num3 < 300) {
    if (num1+4 > 23) {
        console.log(num1-20, num2+num3-240);
    }
    else{
        console.log(num1+4, num2+num3-240);
    }
}

else if (num2 + num3 >= 300 && num2 + num3 < 360) {
    if (num1+5 > 23) {
        console.log(num1-19, num2+num3-300);
    }
    else{
        console.log(num1+5, num2+num3-300);
    }
}

else if (num2 + num3 >= 360 && num2 + num3 < 420) {
    if (num1+6 > 23) {
        console.log(num1-18, num2+num3-360);
    }
    else{
        console.log(num1+6, num2+num3-360);
    }
}

else if (num2 + num3 >= 420 && num2 + num3 < 480) {
    if (num1+7 > 23) {
        console.log(num1-17, num2+num3-420);
    }
    else{
        console.log(num1+7, num2+num3-420);
    }
}

else if (num2 + num3 >= 480 && num2 + num3 < 540) {
    if (num1+8 > 23) {
        console.log(num1-16, num2+num3-480);
    }
    else{
        console.log(num1+8, num2+num3-480);
    }
}

else if (num2 + num3 >= 540 && num2 + num3 < 600) {
    if (num1+9 > 23) {
        console.log(num1-15, num2+num3-540);
    }
    else{
        console.log(num1+9, num2+num3-540);
    }
}

else if (num2 + num3 >= 600 && num2 + num3 < 660) {
    if (num1+10 > 23) {
        console.log(num1-14, num2+num3-600);
    }
    else{
        console.log(num1+10, num2+num3-600);
    }
}

else if (num2 + num3 >= 660 && num2 + num3 < 720) {
    if (num1+11 > 23) {
        console.log(num1-13, num2+num3-660);
    }
    else{
        console.log(num1+11, num2+num3-660);
    }
}

else if (num2 + num3 >= 720 && num2 + num3 < 780) {
    if (num1+12 > 23) {
        console.log(num1-12, num2+num3-720);
    }
    else{
        console.log(num1+12, num2+num3-720);
    }
}

else if (num2 + num3 >= 780 && num2 + num3 < 840) {
    if (num1+13 > 23) {
        console.log(num1-11, num2+num3-780);
    }
    else{
        console.log(num1+13, num2+num3-780);
    }
}

else if (num2 + num3 >= 840 && num2 + num3 < 900) {
    if (num1+14 > 23) {
        console.log(num1-10, num2+num3-840);
    }
    else{
        console.log(num1+14, num2+num3-840);
    }
}

else if (num2 + num3 >= 900 && num2 + num3 < 960) {
    if (num1+15 > 23) {
        console.log(num1-9, num2+num3-900);
    }
    else{
        console.log(num1+15, num2+num3-900);
    }
}

else if (num2 + num3 >= 960 && num2 + num3 < 1020) {
    if (num1+16 > 23) {
        console.log(num1-8, num2+num3-960);
    }
    else{
        console.log(num1+16, num2+num3-960);
    }
}

else if (num2 + num3 >= 1020 && num2 + num3 < 1080) {
    if (num1+17 > 23) {
        console.log(num1-7, num2+num3-1020);
    }
    else{
        console.log(num1+17, num2+num3-1020);
    }
}