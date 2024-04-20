import { Stack } from "./data_structures/stack";
import { SinglyLinkedList } from "./data_structures/singly_linked_list";

const list = new SinglyLinkedList<number>();

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

list.append(10);
list.append(20);
list.append(30);
console.log("List after appending 10, 20, 30:");
list.print();

list.prepend(5);
console.log("List after prepending 5:");
list.print();

list.delete(20);
console.log("List after deleting 20:");
list.print();
