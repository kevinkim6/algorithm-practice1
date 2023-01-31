function solution(num_list, n) {
    let arr = [];
    for(i=1; i<num_list.length/n+1; i++) {
        let arr1 = [];
        for(j=n*i-n; j<=n*i-1; j++) {
        arr1.push(num_list[j])
        }
        arr.push(arr1)
    }
    return arr;
}