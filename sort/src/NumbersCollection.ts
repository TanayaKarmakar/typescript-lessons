import { Sortable } from "./Sorter";

export class NumbersCollection implements Sortable{
    data: number[];

    constructor(data: number[]) {
        this.data = data;
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