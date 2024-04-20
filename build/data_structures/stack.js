"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
class Stack {
    constructor() {
        this.items = [];
        this.size = 0;
    }
    push(elm) {
        this.items.push(elm);
        this.size++;
    }
    pop() {
        const elm = this.items.pop();
        this.size--;
        return elm;
    }
    peek() {
        return this.items[this.size];
    }
    isEmpty() {
        return this.size === 0;
    }
    print() {
        console.log(this.items.toString());
    }
}
exports.Stack = Stack;
