//
/*

Tree
  - Data structure made up of a linked nodes
  - Each node can lnk to any number of other nodes
  - Each node can have at most 1 parent
  - The root node does not hav any parent node

Binary Tree
  - Each node can only have 2 children

Binary Search Tree
  - Left subtree contains values less than the parent node
  - Right subtree contains values greater than the parent node
    
*/

class Node {
  constructor(value = null) {
    // value is normally considered the key (unique)
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  /* 
        Insert - O(n) 
               Creates a node with given value and inserts it in BST
   
        Create a node with a value and store it
        If no root node exists, set root to new node and return
        Create a current node variable and set it to root
        Repeat until insertion
         If val < current node val
           If no left child on current node, add new node to left
           Else set current node to left child
         If val > current node val
           If no right child on current node, add new node to right
           Else set current node to right child
     */

  insert(value) {
    const newNode = new Node(value);

    // If no root node exists, set root to new node and return
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    // Starting from the root node
    let current = this.root;

    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return;
        } else {
          current = current.left;
        }
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        } else {
          current = current.right;
        }
      }
    }
  }
}

// Example usage:
const bst = new BST();
bst.insert(19);
bst.insert(21);
bst.insert(10);
bst.insert(2);
bst.insert(18);

console.log(bst);
