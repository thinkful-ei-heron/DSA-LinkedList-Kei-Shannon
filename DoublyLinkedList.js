class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(value) {
    this.head = new Node(value, this.head, null);
  }
}

function main() {
  let DLL = new DoublyLinkedList();
  DLL.insertFirst('Aquaria');
}

main();