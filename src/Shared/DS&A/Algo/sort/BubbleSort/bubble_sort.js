"use strict";
exports.__esModule = true;
exports.bubbleSort = void 0;
function bubbleSort(arr) {
    var s = arr.getSize();
    for (var i = 0; i < s; i++) {
        for (var j = i; j < s; j++) {
            if (arr.compare(i, j) == 1) {
                arr.swap(i, j);
            }
        }
    }
    return arr.getItems();
}
exports.bubbleSort = bubbleSort;
