// Stack <T> Genetic interface
export class Stack<T> {
    private items: T[];
    private capacity: number;
    constructor(capacity: number) {
        this.items = []
        this.capacity = capacity;
    }
    
    push (item: T): void | false {
        if (this.size() >= this.capacity) return false;
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }
    toArray(): T[] {
        return this.items;
    }
}