function solution(n) {
    var answer = 0;
    let cnt = 1;
    while(true) {
        if(n%cnt === 0) {
            answer++;
        }
        cnt = cnt + 1;
        if (cnt > n) {
            break;
        }
    }
    return answer;
}

// 두수를 곱해서 n이 나오게하는 수들을 구할때, 각 수들로 n을 나눴을때 나머지가 0이 나와야 함을 파악한다.