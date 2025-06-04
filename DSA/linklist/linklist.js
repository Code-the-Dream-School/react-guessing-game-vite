// * Node Implementation, to be used in the linked list */
// Input: a value, and a pointer for where the node points to. Default is null
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

/*
 Linked List Implementation


   Abstract Data Type
  
   - Do not have indexes
   - Connected via nodes with a next pointer
   - Random access is not allowed (no index)
   - Less memory wasted by allocating and deallocating space (unlike array)
   - Accessing element => O(n)
   - Insert/Remove from beginning (head node) => O(1)
   - Insert/Remove from anywhere else => O(n)
*/

class LinkedList {
  constructor(value) {
    this.head = null; // points to a Node object, initially is empty/null
    this.size = 0; // initially size of list is 0
  }

  /*
    Add a node to List as new Head


    -  Creates a new node using the value passed
    -  Set next property of new node to the current head.
    -  Set head to the new node.
    -  Edge case: List has a single node, node becomes tail.
    -  Increment size by 1


    BigO: O(1)
 */
  appendToHead(value) {
    // your work here
    // create a node whose value is `value`
    const newNode = new Node(value, this.head);
    // add it to the head of the list
    this.head = newNode;
    this.size++;
    /* (note: the order you move the pointers around matters. Head should only move to a node once that node is connected to the rest of the list, or else you will lose the list!)*/
  }
}

const linkedlist = new LinkedList();
console.log(linkedlist); // should be empty

// Making a new Head node every time (adding to beginning of list):
linkedlist.appendToHead(15); // becomes Head node (and Tail node)
linkedlist.appendToHead(9); // becomes new Head node; 15 is still Tail
linkedlist.appendToHead(26); // becomes new Head node; 15 is still Tail
console.log(linkedlist); // should be 15-9-26
