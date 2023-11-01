import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {


    constructor(public data: number[]) {
        super();
    }

    compare(leftIndx: number, rightIndx: number): boolean {
        return this.data[leftIndx] > this.data[rightIndx];
    }

    swap(leftIndx: number, rightIndx: number): void {
        const temp = this.data[leftIndx];
        this.data[leftIndx] = this.data[rightIndx];
        this.data[rightIndx] = temp;
    }

    get length(): number {
        return this.data.length;
    }
}