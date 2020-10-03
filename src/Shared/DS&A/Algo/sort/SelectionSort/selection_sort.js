"use strict";
exports.__esModule = true;
exports.selectionSort = void 0;
function selectionSort(arr) {
    var s = arr.getSize();
    for (var i = 0; i < s; i++) {
        var min = arr.get(i);
        var min_idx = i;
        for (var j = i; j < s; j++) {
            if (arr.compare(min_idx, j) > 0) {
                min = arr.get(j);
                min_idx = j;
            }
        }
        arr.set(min_idx, arr.get(i));
        arr.set(i, min);
    }
    return arr.getItems();
}
exports.selectionSort = selectionSort;
