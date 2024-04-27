class DLNode {
  val: number;
  next: DLNode;
  prev: DLNode;

  constructor(val: number, next?: DLNode, prev?: DLNode) {
    this.val = val;
    this.next = next ?? this;
    this.prev = prev ?? this;
  }
}

export class DoublyLinkedList {
  private sentinel: DLNode;
  private size: number;

  constructor() {
    this.sentinel = new DLNode(42);
    this.size = 0;
  }

  private getNode(index: number): DLNode {
    // if index equals -1, sentinel will be returned
    // forward determines from which direction to traverse the list
    let forward = index <= this.size / 2;
    let lengthFromSentinel =
      index <= this.size / 2 ? index + 1 : this.size - index;
    let nodeToReturn = this.sentinel;

    while (lengthFromSentinel > 0) {
      nodeToReturn = forward ? nodeToReturn.next : nodeToReturn.prev;
      lengthFromSentinel -= 1;
    }

    return nodeToReturn;
  }

  get(index: number): number {
    if (index < 0 || index > this.size - 1) {
      return -1;
    }

    return this.getNode(index).val;
  }

  addAtHead(val: number): void {
    this.addAtIndex(0, val);
  }

  addAtTail(val: number): void {
    this.addAtIndex(this.size, val);
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.size) {
      return;
    }

    const parent = this.getNode(index - 1);
    const oldNext = parent.next;
    parent.next = new DLNode(val, parent, oldNext);
    oldNext.prev = parent.next;
    this.size += 1;
  }

  deleteAtIndex(index: number): void {
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
