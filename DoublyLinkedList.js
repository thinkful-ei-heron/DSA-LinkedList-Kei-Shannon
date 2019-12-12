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
  findLast() {
    let currNode = this.head;
    if (currNode === null) {
      return 'empty list';
    } else {
      while (currNode.next !== null) {
        currNode = currNode.next;
      }
      return currNode;
    }
  }

  display() {
    let currNode = this.head;
    let str = '';
    while (currNode.next !== null) {
      str = str + currNode.value + ', ';
      currNode = currNode.next;
    }
    str = str + currNode.value;
    console.log(str);
  }

  insertFirst(value) {
    let newNode= new Node(value, this.head, null);
    if(!this.head){
      this.head = newNode;
    }
    else {
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  insertLast(value) {
    if (this.head === null) {
      this.insertFirst(value);
    } else {
      let last = this.head;
      while (last.next !== null) {
        last = last.next;
      }
      last.next = new Node(value, null, last);
    }
    
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  insertAfter(value, insertion) {
    let currNode = this.find(insertion);
    let newNode = new Node(value, currNode.next, currNode);
    currNode.next.prev = newNode;
    currNode.next = newNode; 
  }

  insertBefore(value, insertion) {
    let currNode = this.find(insertion);
    let newNode = new Node(value, currNode, currNode.prev);
    currNode.prev.next = newNode;
    currNode.prev = newNode;
  }

  insertAt(value, index){
    let currIndex = 0;
    let currNode = this.head;
    let nextNode = this.head.next;
    while (currIndex !== (index - 1)) {
      currNode = currNode.next;
      nextNode = currNode.next;
      currIndex++;
    }
    let newNode = new Node(value, nextNode, currNode);
    nextNode.prev = newNode;
    currNode.next = newNode;
  }

  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      this.head.prev = null;
      return;
    }
    let currNode = this.head;
    // let previousNode = this.head;
    while ((currNode !== null) && (currNode.value !== item)) {
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    currNode.prev.next = currNode.next;
    currNode.next.prev = currNode.prev;
  }

  reverse(node){
    let prevNode = node.prev;
    let nextNode = node.next;
    if (node.next !== null) {
      this.reverse(nextNode);
      node.next = prevNode;
      node.prev = nextNode;
    } else {
      node.next = prevNode;
      node.prev = null;
      this.head = node;
    }
  }
}

function main() {
  let DLL = new DoublyLinkedList();
  DLL.insertFirst('Aquaria');
  DLL.insertLast('Sagittaron');
  DLL.insertBefore('Picon', 'Sagittaron');
  DLL.insertAfter('Caprica', 'Aquaria');
  DLL.insertAfter('Gemenon', 'Caprica');
  DLL.insertAt('Tauron', 3);
  DLL.display();
  // DLL.remove('Caprica');
  DLL.reverse(DLL.head);
  DLL.display();
  console.log(DLL.find('Aquaria'));
}

main();