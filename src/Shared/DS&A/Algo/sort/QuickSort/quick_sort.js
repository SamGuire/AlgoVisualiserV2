"use strict";
exports.__esModule = true;
exports.quickSort = void 0;
function quickSort(arr) {
    helper(arr, 0, arr.getSize() - 1);
    return arr.getItems();
}
exports.quickSort = quickSort;
function helper(A, l, r) {
    if (l < r) {
        var partition_idx = partition(A, l, r);
        helper(A, l, partition_idx - 1);
        helper(A, partition_idx + 1, r);
    }
}
function partition(A, l, r) {
    var key = r;
    var s = 0;
    for (var i = 0; i < r; i++) {
        if (A.compare(i, key) < 0) {
            A.swap(s, i);
            s++;
        }
    }
    A.swap(s, key);
    return s;
}
