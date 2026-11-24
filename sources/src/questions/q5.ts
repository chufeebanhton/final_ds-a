export class LinkedListNode<T> {
    data: T | null;
    next: LinkedListNode<T> | null;
    previous: LinkedListNode<T> | null;
    constructor(data: T) {
        this.data = data ?? null;
        this.next = null;
        this.previous = null;
        
    }
}

type IndexedNode<T> = LinkedListNode<T> & {
    index: number;
};

export class LinkedList<T> {
    public head: LinkedListNode<T> | null;
    private tail: LinkedListNode<T> | null;
    public length = 0;
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(data: T): IndexedNode<T> | undefined { // ADD first
        const newNode: LinkedListNode<T> = new LinkedListNode<T>(data);
        if (this.head !== null) {
            const previous = this.tail;
            this.tail!.next = newNode;
            this.tail = newNode;
            this.tail.previous = previous;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
        if (newNode) return {...newNode, index: this.length}
    }

    prepend(data: T): IndexedNode<T> | undefined { // ADD last
        const newNode: LinkedListNode<T> = new LinkedListNode<T>(data);
        if (this.head !== null) {
            const current = this.head;
            this.head = newNode;
            current.previous = this.head;
            this.head!.next = current;
            
        } else {
            this.head = newNode;
            this.tail = newNode;
        } 
        this.length++;
        if (newNode) return {...newNode, index: this.length}
    }
    
    insertByOrder(index: number, data: T): IndexedNode<T> | undefined {
        if (index <= 0 || this.head === null) return this.prepend(data)

        if (index >= this.length) return this.append(data)

        for (const node of this.traverse()) {
            if (node.index !== index) continue;
            const newNode: LinkedListNode<T> = new LinkedListNode<T>(data);
            node.previous!.next = newNode; // -> newnode
            newNode.previous = node.previous; // previousnode <-
            newNode.next = node; // -> after
            node.previous = newNode; // <- after
        }
    }

    find(data: T): IndexedNode<T> | undefined{
        for (const node of this.traverse()) {
            if (node.data === data) return node;
        } return undefined;
    }

    remove(index: number): IndexedNode<T> | undefined {
        if (index < 0 || index > this.length) return;
        if (this.traverse() === null) return;
        for (const node of this.traverse()) {
            if (node.index !== index) continue;

            if (this.length === 1) {
                this.head = null; this.tail = null;
                this.length--;
                return { ...node, index };
            } // only one node in list
            
            if (index === this.length) { 
                node.previous!.next = null;
                this.length--;
                return { ...node, index };
            } // at tail
            
            if (index === 0 && this.head !== null) {
                this.head = this.head?.next;
                this.length--;
                return { ...node, index };
            } 
            node!.next!.previous = node?.previous;
            node!.previous!.next = node.next;
            this.length--;
            return { ...node, index };

        }
    }

    *traverse(): Generator<IndexedNode<T>>{
        let current = this.head;
        let index: number = 0;
        while (current !== null) {
            yield {
                ...current,
                index
            }
            current = current.next;
            index++;
        }
    }

    *traverseBackward(): Generator<IndexedNode<T>>{
        let current = this.tail;
        let index: number = this.length;
        while(current !== null) {
            yield {
                ...current,
                index
            }
            current = current.previous;
            index--;
        }
    }

    map<U> (callback: (item: T | null, index: number) => U, ): U[] {
        const result: U[] = [];
        for (const node of this.traverse()) {
            result.push(callback(node.data, node.index));
        }
        return result;
    }
}