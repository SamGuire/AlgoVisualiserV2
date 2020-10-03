"use strict";
exports.__esModule = true;
exports.Heap = exports.HEAPTYPE = void 0;
require("../../../../Types/Collection");
var HEAPTYPE;
(function (HEAPTYPE) {
    HEAPTYPE[HEAPTYPE["MIN_HEAP"] = 0] = "MIN_HEAP";
    HEAPTYPE[HEAPTYPE["MAX_HEAP"] = 1] = "MAX_HEAP";
})(HEAPTYPE = exports.HEAPTYPE || (exports.HEAPTYPE = {}));
var Heap = /** @class */ (function () {
    function Heap() {
        var _this = this;
        this.size = 0;
        this.buildHeap = function (collection, type) {
            _this.size = collection.getSize();
            var heapify = type === HEAPTYPE.MIN_HEAP ? _this.minHeapify : _this.maxHeapify;
            var start = Math.floor(collection.getSize() / 2) - 1;
            for (var i = start; i >= 0; i--) {
                heapify(collection, i, _this.size);
            }
        };
        this.minHeapify = function (collection, index, size) {
            var left = index * 2 + 1;
            var right = index * 2 + 2;
            var minValue = index;
            if (left < size && collection.get(left) && collection.compare(left, minValue) < 0) {
                minValue = left;
            }
            if (right < size && collection.get(right) && collection.compare(right, minValue) < 0) {
                minValue = right;
            }
            if (minValue == index) {
                return;
            }
            else {
                collection.swap(minValue, index);
                _this.minHeapify(collection, minValue, size);
            }
        };
        this.maxHeapify = function (collection, index, size) {
            var left = index * 2 + 1;
            var right = index * 2 + 2;
            var maxValue = index;
            if (left < size && collection.get(left) && collection.compare(left, maxValue) > 0) {
                maxValue = left;
            }
            if (right < size && collection.get(right) && collection.compare(right, maxValue) > 0) {
                maxValue = right;
            }
            if (maxValue == index) {
                return;
            }
            else {
                collection.swap(maxValue, index);
                _this.maxHeapify(collection, maxValue, size);
            }
        };
        this.isHeap = function (collection, index, type) {
            if (index >= collection.getSize()) {
                return true;
            }
            var f = type === HEAPTYPE.MIN_HEAP ? Math.min : Math.max;
            var undefinedValue = type === HEAPTYPE.MIN_HEAP ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
            var left = index * 2 + 1;
            var right = index * 2 + 2;
            var leftV = collection.get(left) === undefined ? undefinedValue : collection.get(left);
            var rightV = collection.get(right) === undefined ? undefinedValue : collection.get(right);
            var parentV = collection.get(index);
            if (f(leftV, rightV, parentV) === parentV) {
                return true && _this.isHeap(collection, left, type) && _this.isHeap(collection, right, type);
            }
            else {
                return false;
            }
        };
        this.extract = function (collection, type) {
            if (_this.size <= 0) {
                throw new Error("This is an empty heap");
            }
            var v = collection.get(0);
            var f = type === HEAPTYPE.MIN_HEAP ? _this.minHeapify : _this.maxHeapify;
            collection.swap(0, _this.size - 1);
            _this.size--;
            f(collection, 0, _this.size);
            return v;
        };
    }
    return Heap;
}());
exports.Heap = Heap;
