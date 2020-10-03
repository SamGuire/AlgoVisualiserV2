"use strict";
exports.__esModule = true;
exports.mergeSort = void 0;
function mergeSort(arr) {
    helper(arr, 0, arr.getSize() - 1);
    return arr.getItems();
}
exports.mergeSort = mergeSort;
function helper(A, l, r) {
    if (l < r) {
        var m = Math.floor((r - l) / 2) + l;
        helper(A, l, m);
        helper(A, m + 1, r);
        merge(A, l, m, r);
    }
}
function merge(A, l, m, r) {
    var s2 = m + 1;
    if (A.compare(m, s2) <= 0) {
        return;
    }
    while (l <= m && s2 <= r) {
        if (A.compare(l, s2) <= 0) {
            l++;
        }
        else {
            var value = A.get(s2);
            var index = s2;
            while (index != l) {
                A.set(index, A.get(index - 1));
                index -= 1;
            }
            A.set(l, value);
            l += 1;
            m += 1;
            s2 += 1;
        }
    }
}
