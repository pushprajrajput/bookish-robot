"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoublyLinkedList = void 0;
class DLNode {
    constructor(val, next, prev) {
        this.val = val;
        this.next = next !== null && next !== void 0 ? next : this;
        this.prev = prev !== null && prev !== void 0 ? prev : this;
    }
}
class DoublyLinkedList {
    constructor() {
        this.sentinel = new DLNode(42);
        this.size = 0;
    }
    getNode(index) {
        // if index equals -1, sentinel will be returned
        // forward determines from which direction to traverse the list
        let forward = index <= this.size / 2;
        let lengthFromSentinel = index <= this.size / 2 ? index + 1 : this.size - index;
        let nodeToReturn = this.sentinel;
        while (lengthFromSentinel > 0) {
            nodeToReturn = forward ? nodeToReturn.next : nodeToReturn.prev;
            lengthFromSentinel -= 1;
        }
        return nodeToReturn;
    }
    get(index) {
        if (index < 0 || index > this.size - 1) {
            return -1;
        }
        return this.getNode(index).val;
    }
    addAtHead(val) {
        this.addAtIndex(0, val);
    }
    addAtTail(val) {
        this.addAtIndex(this.size, val);
    }
    addAtIndex(index, val) {
        if (index < 0 || index > this.size) {
            return;
        }
        const parent = this.getNode(index - 1);
        const oldNext = parent.next;
        parent.next = new DLNode(val, parent, oldNext);
        oldNext.prev = parent.next;
        this.size += 1;
    }
    deleteAtIndex(index) {
        if (index < 0 || index > this.size - 1) {
            return;
        }
        const parent = this.getNode(index - 1);
        const next = parent.next.next;
        parent.next = next;
        next.prev = parent;
        this.size -= 1;
    }
}
exports.DoublyLinkedList = DoublyLinkedList;
