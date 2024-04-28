class ListNode<T> {
  val: T;
  next: ListNode<T>;

  constructor(val: T, next?: ListNode<T>) {
    this.val = val;
    this.next = next ?? this;
  }
}

export class Queue<T> {
  left: ListNode<T> | null;
  right: ListNode<T> | null;

  constructor() {
    this.left = null;
    this.right = null;
  }

  enqueue(val: T): void {
    const newNode = new ListNode(val);
    if (this.right !== null) {
      //Queue is not null
      this.right.next = newNode;
      this.right = newNode;
    } else {
      //Queue is empty
      this.left = newNode;
      this.right = newNode;
    }
  }

  dequeue(): T | null {
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
