export class Stack<T> {
  private items: T[];
  private size: number;

  constructor() {
    this.items = [];
    this.size = 0;
  }

  push(elm: T) {
    this.items.push(elm);
    this.size++;
  }

  pop(): T | undefined {
    const elm = this.items.pop();
    this.size--;
    return elm;
  }

  peek(): T | undefined {
    return this.items[this.size];
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  print() {
    console.log(this.items.toString());
  }
}
