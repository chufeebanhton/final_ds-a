"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circleQueue = void 0;
class circleQueue {
    items;
    capacity;
    front = 0;
    rare = 0;
    count = 0;
    constructor(capacity) {
        this.capacity = capacity;
        this.items = new Array(capacity);
    }
    enQueue(item) {
        if (this.count >= this.capacity - 1)
            return false;
        this.items[this.rare++ % this.capacity] = item;
        this.count++;
    }
    deQueue() {
        if (this.count <= 0)
            return undefined;
        this.count--;
        return this.items[this.front++ % this.capacity];
    }
    peek() {
        return (this.count) ? this.items[this.front % this.capacity] : undefined;
    }
    isFull() {
        return this.count === this.capacity;
    }
    isEmpty() {
        return this.count === 0;
    }
    size() {
        return this.count;
    }
}
exports.circleQueue = circleQueue;
