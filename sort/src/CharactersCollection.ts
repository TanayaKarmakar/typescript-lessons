import { Sortable } from "./Sorter";

export class CharactersCollection implements Sortable {
    constructor(public data: string) {

    }

    get length(): number {
        return this.data.length;
    }

    compare(leftIndx: number, rightIndx: number): boolean {
        return (this.data[leftIndx].toLowerCase() > this.data[rightIndx].toLowerCase());
    }

    swap(leftIndx: number, rightIndx: number): void {
        const characters = this.data.split('');
        const temp = characters[leftIndx];
        characters[leftIndx] = characters[rightIndx];
        characters[rightIndx] = temp;

        this.data = characters.join('');
    }

}