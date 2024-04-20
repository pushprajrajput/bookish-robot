"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stack_1 = require("./data_structures/stack");
const stack = new stack_1.Stack();
// Example commands to manipulate the stack
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Current Stack:");
stack.print();
stack.pop();
console.log("Stack after one pop:");
stack.print();
