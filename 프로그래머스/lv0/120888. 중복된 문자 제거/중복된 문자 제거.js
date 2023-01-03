function solution(my_string) {
    let arr = [];
    for(let i = 0; i < my_string.length; i++) {
        arr.push(my_string[i])
    }
    let set = new Set(arr);
    let newArr = [...set];
    let answer = '';
    for(let j = 0; j < newArr.length; j++) {
        answer = answer + newArr[j];
    }
    return answer;
}