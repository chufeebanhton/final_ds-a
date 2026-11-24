"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
// Stack <T> Genetic interface
class Stack {
    items;
    capacity;
    constructor(capacity) {
        this.items = [];
        this.capacity = capacity;
    }
    push(item) {
        if (this.size() >= this.capacity)
            return false;
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    toArray() {
        return this.items;
    }
}
exports.Stack = Stack;
