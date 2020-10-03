"use strict";
exports.__esModule = true;
exports.countingSort = void 0;
function countingSort(arr) {
    var s = arr.getSize();
    var items = arr.getItems();
    if (!items || items.length == 0) {
        return items;
    }
    var max = Math.max.apply(Math, items);
    var count = new Array(max + 1).fill(0);
    for (var i = 0; i < s; i++) {
        if (!count[arr.get(i)]) {
            count[arr.get(i)] = 1;
        }
        else {
            count[arr.get(i)]++;
        }
    }
    var idx = 0;
    for (var i = 0; i < count.length; i++) {
        while (count[i]) {
            arr.set(idx, i);
            count[i]--;
            idx++;
        }
    }
    return arr.getItems();
}
exports.countingSort = countingSort;
