class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  reverseList() {
    let current = this.head;
    let prev = null;
    let next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
}

const list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);

console.log("Original List: ");
let current = list.head;
while (current) {
    console.log(current.value);
    current = current.next;
}

list.reverseList();
console.log("Reversed List: ");
current = list.head;
while (current) {
    console.log(current.value);
    current = current.next;
}