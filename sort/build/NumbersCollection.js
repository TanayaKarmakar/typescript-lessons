"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
class NumbersCollection {
    constructor(data) {
        this.data = data;
    }
    compare(leftIndx, rightIndx) {
        return this.data[leftIndx] > this.data[rightIndx];
    }
    swap(leftIndx, rightIndx) {
        const temp = this.data[leftIndx];
        this.data[leftIndx] = this.data[rightIndx];
        this.data[rightIndx] = temp;
    }
    get length() {
        return this.data.length;
    }
}
exports.NumbersCollection = NumbersCollection;
