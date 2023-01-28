class Node {
    constructor(id, name, marks) {
      this.id = id;
      this.name = name;
      this.marks = marks;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    add(id, name, marks) {
      const newNode = new Node(id, name, marks);
  
      if (!this.root) {
        this.root = newNode;
        return;
      }
  
      let current = this.root;
      while (true) {
        if (newNode.marks < current.marks) {
          if (!current.left) {
            current.left = newNode;
            return;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return;
          }
          current = current.right;
        }
      }
    }
  
    find(name) {
      let current = this.root;
      while (current) {
        if (current.name === name) {
          return current.marks;
        } else if (name < current.name) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      return null;
    }
  }
  
  const bst = new BinarySearchTree();
  
  bst.add(1, 'Anjani', [85, 90, 80, 75, 70]);
  bst.add(2, 'Priyanka', [90, 85, 80, 75, 70]);
  
  console.log(bst.find('Anjani')); 
  console.log(bst.find('Priyanka')); 
  