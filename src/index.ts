import { Stack } from "./data_structures/stack";

const stack = new Stack<number>();

// Example commands to manipulate the stack
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Current Stack:");
stack.print();

stack.pop();
console.log("Stack after one pop:");
stack.print();
