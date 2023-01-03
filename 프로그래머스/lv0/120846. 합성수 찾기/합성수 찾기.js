function solution(n) {
    let arr = [];
    for(let i = 1; i <= n; i++) {
        for(let j = 2; j <= i-1; j++) {
            if(i%j === 0) {
                arr.push(i);
                break;
            }
        }
    }
    return arr.length;
}