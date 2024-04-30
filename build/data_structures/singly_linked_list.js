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
        //Steps
        //1.  Create new node
        //2.  Check if head is null, if yes make new node as head and tail as null head means linked list is empty
        //3.  If head does exist then check if tail is also there,
        //3.1 If tail exist means we need to attach new node to next element of tail and make new node as tail
        //3.2 If tail does not exist then make new node as tail
        const newNode = new ListNode(val);
        if (!this.head) {
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
        //Steps
        //1. Create new node
        //2. Check if head is null, null head means linked list is empty and new node needs to be made head and tail
        //3. Else make new head a next element of next node and make new node a new head
        const newNode = new ListNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    addAtIndex(index, val) {
        //Steps
        //1. If index is zero means we need to prepend
        //2. Create new node and start travesring till node before given index to find current node after where add needs to be performed
        //3. Check if current is null, if null return as index given is out of the list
        //4. Make new node's next as current node's next
        //5. Make new node's next as current  node's next and make current node's next as new node
        if (index === 0) {
            this.prepend(val);
            return;
        }
        const newNode = new ListNode(val);
        let current = this.head;
        let currentIndex = 0;
        while (current != null && currentIndex < index - 1) {
            current = current.next;
            currentIndex++;
        }
        if (current === null) {
            return;
        }
        newNode.next = current.next;
        current.next = newNode;
        if (newNode.next === null) {
            this.tail = newNode;
        }
    }
    delete(val) {
        // Steps
        //1. If head is empty return as linked list is null
        //2. Check from head if value matches forward head unitl heads value does not match
        //3. If value is in middle use while loop checking on next eliment defined if match found make next's next as current's next
        //4. Update current eliment as tail if tail value matches with value to be deleted
        if (!this.head)
            return;
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
    deleteAtIndex(index) {
        if (index === 0) {
            if (this.head) {
                this.head = this.head.next;
                if (this.head === null) {
                    // If list becomes empty
                    this.tail = null;
                }
            }
            return;
        }
        let current = this.head;
        let currentIndex = 0;
        while (current !== null && currentIndex < index - 1) {
            current = current.next;
            currentIndex++;
        }
        if (current === null || current.next === null) {
            // index is out of bounds
            return;
        }
        if (current.next === this.tail) {
            this.tail = current; // Update tail if last element is removed
        }
        current.next = current.next.next;
    }
    getNodeAtIndex(index) {
        let current = this.head;
        let currentIndex = 0;
        while (current !== null && currentIndex < index) {
            current = current.next;
            currentIndex++;
        }
        if (current === null || currentIndex < index) {
            // Index out of bounds
            return null;
        }
        return current;
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
