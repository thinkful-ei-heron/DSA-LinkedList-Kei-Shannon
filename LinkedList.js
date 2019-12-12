class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  //methods: insertFirst(value), insertLast(value), insert(node1, node2), find(value)
  insertFirst(value){
    this.head = new Node(value, this.head);
  }
  insertLast(value){
    if (this.head === null){
      this.insertFirst(value);
    } else {
      let last = this.head;
      while(last.next !== null){
        last = last.next;
      }
      last.next = new Node(value, null);  
    }
  }
  insertAfter(value, insertion){
    let currNode = this.find(insertion);
    let afterNode = currNode.next;
    currNode.next = new Node(value, afterNode);
  }
  insertBefore(value, insertion){
    let currNode = this.head;
    let tempNode = this.head;
    while (currNode.value !== insertion){
      tempNode = currNode;
      currNode = currNode.next;
    }
    tempNode.next = new Node(value, currNode);
  }
  insertAt(value, index){
    let currIndex = 0;
    let currNode = this.head;
    while (currIndex !== (index-1)){
      currNode = currNode.next;
      currIndex++;
    }
    currNode.next = new Node(value, currNode.next.next);
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
  remove(item){ 
    // If the list is empty
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
  display() {
    let currNode = this.head;
    let str = '';
    while (currNode.next !== null){
      str = str + currNode.value + ', ';
      currNode = currNode.next;
    }
    str = str + currNode.value;
    console.log(str);
  }
  size() {
    let size = 0;
    let currNode = this.head;
    while (currNode !== null){
      size++;
      currNode = currNode.next;
    }
    return size;
  }
  isEmpty() {
    return this.head === null;
  }
  findPrevious(value) {
    let currNode = this.head;
    if (currNode === null){
      return 'empty list';
    } else {
      let tempNode = currNode;
      while (currNode.value !== value){
        if (currNode.next === null){
          return 'no such value';
        } else {
          tempNode = currNode;
          currNode = currNode.next;  
        }
      }
      return tempNode;
    }
  }
  findLast(){
    let currNode = this.head;
    if (currNode === null){
      return 'empty list';
    } else {
      while (currNode.next !== null){
        // if (currNode.next !== null){
        //   currNode = currNode.next;
        // }
        currNode = currNode.next;
      }
      return currNode;
    }
  }
  reverse(node){
    // let tempHead = node;
    if(node.next !== null){
      // console.log('before reverse', node.next.value);
      this.reverse(node.next);
      node.next.next = node;
      // console.log(`set node ${node.value}.next.next to ${node.value}`);
      // console.log(`${node.next.value}.next is now ${node.next.next.value}`);
      // console.log(`${node.value}.next is ${node.next.value}`);
      node.next = null;
      // console.log(`${node.value}.next is ${node.next}`)
      //this else block is the base case
    } else {
      // console.log('node', node.value, 'next is null');
      // console.log(`head is ${tempHead.value}, line 47`);
      // this.head = tempHead;
      this.head = node;
    }
  }

  /*
  a > b > c > null 
  reverse(a) [swap a and b]
    reverse(b) [swap b and c]
      reverse(c) [swap c and null] > hits the base case-- set the head of the list to c, our last node
    [complete reverse(b): b.next.next (this is c.next) = b]

                                    ----
                                   v   |
    [at this state our list is a > b > c]
    [node.next = null]
                                    ----
                                   v   |
    [at this state our list is a > b   c]
                                   |
                                   v
                                  null

  [complete reverse(a): a.next.next (this is b.next) = a]
                                 c
                                 v
  [at this state our list is a > b > a]

  [node.next = null]
                                 c
                                 v
  [at this state our list is     b > a]
                                     |
                                     v
                                    null

  */

}

function main() {
  let SLL = new LinkedList();
  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('squirrel');
  SLL.insertLast('tauhida');
  SLL.remove('squirrel');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 2);
  SLL.remove('tauhida');
  SLL.display();
  // console.log(SLL.size());
  // let SLLAlt = new LinkedList();
  // console.log(SLL.isEmpty());
  // console.log(SLLAlt.isEmpty());
  // console.log(SLL.findPrevious('sdfgdfg'));
  // console.log(SLL.findPrevious('Kat').value);
  // console.log(SLL.findLast().value);
  // SLL.insertLast('Starbuck');
  // SLL.insertFirst('Apollo');
  // SLL.insertLast('Kat');
  // SLL.insertLast('Helo');
  // SLL.insertFirst('Starbuck');
  // SLL.display();
  // WhatDoesThisProgramDo(SLL);
  // SLL.display();
  SLL.reverse(SLL.head);
  SLL.display();
}

function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
      let newNode = current;
      while (newNode.next !== null) {
          if (newNode.next.value === current.value) {
              newNode.next = newNode.next.next;
          }
          else {
              newNode = newNode.next;
          }
      }
      current = current.next;
  }
}

main();


//4. This function is removing duplicate values from the list. 