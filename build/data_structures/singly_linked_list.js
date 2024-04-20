"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SinglyLinkedList = void 0;
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    append(val) {
        const newNode = new ListNode(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            if (this.tail) {
                this.tail.next = newNode;
            }
            this.tail = newNode;
        }
    }
    prepend(val) {
        const newNode = new ListNode(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    delete(val) {
        //If list is empty return
        if (!this.head)
            return;
        //Check from head if value matches forward head unitl heads value does nit match
        while (this.head && this.head.val === val) {
            this.head = this.head.next;
        }
        //Remove value from the middle
        let current = this.head;
        while (current && current.next) {
            if (current.next.val === val) {
                current.next = current.next.next;
            }
            else {
                current = current.next;
            }
        }
        if (this.tail && this.tail.val === val) {
            this.tail = current;
        }
    }
    print() {
        let current = this.head;
        let items = [];
        while (current != null) {
            items.push(current.val);
            current = current.next;
        }
        console.log(items.join(" --> "));
    }
}
exports.SinglyLinkedList = SinglyLinkedList;
