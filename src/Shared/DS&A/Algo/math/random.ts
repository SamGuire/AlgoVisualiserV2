let shuffle = (arr : any[]) => {
    let s = arr.length;
    for (let i = 0; i < s; i++) {
        let j = Math.floor(Math.random() * (i+1))
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    return arr;
}
export default shuffle