module.exports = function transform(arr) {

    if (!Array.isArray(arr)) throw new Error();
    if (arr.length == 0) return arr;

    let newarr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '--discard-next') {
            i++;
            continue;
        } else if (arr[i] == '--double-prev' && i == 0) {
            continue;
        } else if (arr[i] == '--double-prev') {
            newarr.push(arr[i - 1]);
            continue;
        } else if (arr[i] == '--discard-prev' && i == 0) {
            continue;
        } else if (arr[i] == '--discard-prev') {
            newarr.splice(-1, 1);
            continue;
        } else if (arr[i] == '--double-next' && i == arr.length - 1) {
            continue;
        } else if (arr[i] == '--double-next') {
            newarr.push(arr[i + 1]);
            continue;
        }
        newarr.push(arr[i]);
    }

    return newarr;
};
