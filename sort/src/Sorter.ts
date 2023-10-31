export interface Sortable {
    length: number;

    compare(leftIndx: number, rightIndx: number): boolean;

    swap(leftIndx: number, rightIndx: number): void;
}

export class Sorter {
    collection: Sortable;

    constructor(collection: Sortable) {
        this.collection = collection;
    }

    sort(): void {
        const { length } = this.collection;

        for(let i = 0; i < length; i++) {
            for(let j = 0; j < length - i - 1; j++) {
                
                if(this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
}


