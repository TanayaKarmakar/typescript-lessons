import { Sorter } from "./Sorter";

class ListNode {
    next: ListNode | null = null;

    constructor(public data: number) {

    }
}

export class LinkedList extends Sorter {
    head: ListNode | null = null;


    add(data: number): void {
        const node = new ListNode(data);
        
        if(!this.head) {
            this.head = node;
            return;
        } else {
            let temp: ListNode = this.head;
            while(temp.next) {
                temp = temp.next;
            }
            temp.next = node;
        }
    }

    get length(): number {
        if(!this.head) {
            return 0;
        } 
        let count: number = 1;
        let temp: ListNode = this.head;
        while(temp.next) {
            temp = temp.next;
            count++;
        }
        return count;
    }

    compare(leftIndx: number, rightIndx: number): boolean { 
        if(!this.head)
            throw new Error('List is empty');
        return this.at(leftIndx).data > this.at(rightIndx).data;
    }

    swap(leftIndx: number, rightIndx: number): void {
        let temp = this.at(leftIndx).data;
        this.at(leftIndx).data = this.at(rightIndx).data;
        this.at(rightIndx).data = temp;
    }

    at(index: number): ListNode {
        if(!this.head)
            throw new Error('Index out of bounds');
        let counter = 0;
        let node = this.head;

        while(node.next) {
            if(counter == index)
                return node;
            node = node.next;
        }
        throw new Error('Index out of bounds');
    }

    print(): void {
        if(!this.head) {
            return;
        }

        let temp = this.head;
        while(temp.next) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}