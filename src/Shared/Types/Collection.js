"use strict";
exports.__esModule = true;
exports.Collection = void 0;
var DEFAULT_COMPARATOR = function (v1, v2) {
    if (v1 > v2) {
        return 1;
    }
    else if (v1 == v2) {
        return 0;
    }
    else {
        return -1;
    }
};
var Collection = /** @class */ (function () {
    function Collection(items, comparator) {
        if (comparator === void 0) { comparator = DEFAULT_COMPARATOR; }
        this.items = items;
        this.comparator = comparator;
    }
    Collection.prototype.swap = function (i1, i2) {
        if (i1 > this.items.length || i1 < 0 || i2 > this.items.length || i2 < 0) {
            return;
        }
        else {
            var tmp = this.items[i1];
            this.items[i1] = this.items[i2];
            this.items[i2] = tmp;
        }
    };
    Collection.prototype.compare = function (i1, i2) {
        if (i1 > this.items.length || i1 < 0 || i2 > this.items.length || i2 < 0) {
            return 0;
        }
        else {
            return this.comparator(this.items[i1], this.items[i2]);
        }
    };
    Collection.prototype.getItems = function () {
        return this.items;
    };
    Collection.prototype.getSize = function () {
        return this.items.length;
    };
    Collection.prototype.set = function (index, value) {
        if (index < 0 || index > this.items.length) {
            return;
        }
        else {
            this.items[index] = value;
        }
    };
    Collection.prototype.get = function (index) {
        if (index < 0 || index > this.items.length) {
            return;
        }
        else {
            return this.items[index];
        }
    };
    return Collection;
}());
exports.Collection = Collection;
