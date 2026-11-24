"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.LinkedListNode = void 0;
class LinkedListNode {
    data;
    next;
    previous;
    constructor(data) {
        this.data = data ?? null;
        this.next = null;
        this.previous = null;
    }
}
exports.LinkedListNode = LinkedListNode;
class LinkedList {
    head;
    tail;
    length = 0;
    constructor() {
        this.head = null;
        this.tail = null;
    }
    append(data) {
        const newNode = new LinkedListNode(data);
        if (this.head !== null) {
            const previous = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.previous = previous;
        }
        else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
        if (newNode)
            return { ...newNode, index: this.length };
    }
    prepend(data) {
        const newNode = new LinkedListNode(data);
        if (this.head !== null) {
            const current = this.head;
            this.head = newNode;
            current.previous = this.head;
            this.head.next = current;
        }
        else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
        if (newNode)
            return { ...newNode, index: this.length };
    }
    insertByOrder(index, data) {
        if (index <= 0 || this.head === null)
            return this.prepend(data);
        if (index >= this.length)
            return this.append(data);
        for (const node of this.traverse()) {
            if (node.index !== index)
                continue;
            const newNode = new LinkedListNode(data);
            node.previous.next = newNode; // -> newnode
            newNode.previous = node.previous; // previousnode <-
            newNode.next = node; // -> after
            node.previous = newNode; // <- after
        }
    }
    find(data) {
        for (const node of this.traverse()) {
            if (node.data === data)
                return node;
        }
        return undefined;
    }
    remove(index) {
        if (index < 0 || index > this.length)
            return;
        if (this.traverse() === null)
            return;
        for (const node of this.traverse()) {
            if (node.index !== index)
                continue;
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
                this.length--;
                return { ...node, index };
            } // only one node in list
            if (index === this.length) {
                node.previous.next = null;
                this.length--;
                return { ...node, index };
            } // at tail
            if (index === 0 && this.head !== null) {
                this.head = this.head?.next;
                this.length--;
                return { ...node, index };
            }
            node.next.previous = node?.previous;
            node.previous.next = node.next;
            this.length--;
            return { ...node, index };
        }
    }
    *traverse() {
        let current = this.head;
        let index = 0;
        while (current !== null) {
            yield {
                ...current,
                index
            };
            current = current.next;
            index++;
        }
    }
    *traverseBackward() {
        let current = this.tail;
        let index = this.length;
        while (current !== null) {
            yield {
                ...current,
                index
            };
            current = current.previous;
            index--;
        }
    }
    map(callback) {
        const result = [];
        for (const node of this.traverse()) {
            result.push(callback(node.data, node.index));
        }
        return result;
    }
}
exports.LinkedList = LinkedList;
