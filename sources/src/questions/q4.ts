export class circleQueue<T> {
    private items: T[];
    private capacity: number;
    private front: number = 0;
    private rare: number = 0;
    private count: number = 0;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.items = new Array(capacity);
    }

    enQueue(item: T) {
        if (this.count >= this.capacity - 1) return false;
        this.items[this.rare++ % this.capacity] = item;
        this.count++;
    }
    deQueue(): T | undefined {
        if (this.count <= 0) return undefined;
        this.count--;
        return this.items[this.front++ % this.capacity];
    }

    peek(): T | undefined {
        return (this.count) ? this.items[this.front % this.capacity] : undefined;
    }

    isFull(): boolean {
        return this.count === this.capacity;
    }

    isEmpty(): boolean {
        return this.count === 0;
    }
    size(): number {
        return this.count;
    }
}