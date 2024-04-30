"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next !== null && next !== void 0 ? next : this;
    }
}
class Queue {
    constructor() {
        this.left = null;
        this.right = null;
    }
    enqueue(val) {
        const newNode = new ListNode(val);
        if (this.right !== null) {
            //Queue is not null
            this.right.next = newNode;
            this.right = newNode;
        }
        else {
            //Queue is empty
            this.left = newNode;
            this.right = newNode;
        }
    }
    dequeue() {
        if (this.left === null) {
            //Empty queue
            return null;
        }
        //Remove the right elm and return the value
        let val = this.left.val;
        this.left = this.left.next;
        if (!this.left) {
            this.right = null;
        }
        return val;
    }
}
exports.Queue = Queue;
