/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.head === null) throw new Error('List is empty')
    if (this.head === this.tail) 
    {
      let oldTail = this.head;
      this.head = null;
      this.tail = null;
      return oldTail
    }
    let oldTail = this.tail;
    let current = this.head;
    while (current !== this.tail) {
      if (current.next === this.tail) {
        current.next = null;
        this.tail = current;
        return oldTail
      }
      current = current.next;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head === null) throw new Error('List is empty')
    if (this.tail === this.head){
      let oldHead = this.head;
      this.tail = null;
      this.head = null;
      return oldHead
    }
    let oldHead = this.head;
    this.head = this.head.next;
    return oldHead
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let count = 0;
    let current = this.head;
    while(current !== null){
      if (idx === count) {
        return current.val
      }
      count++;
      current = current.next;
    }
   throw new Error('Invalid index')
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let count = 0;
    let current = this.head;
    while(current !== null){
      if (idx === count) {
        current.val = val
        return
      }
      count++;
      current = current.next;
    }
   throw new Error('Invalid index')
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let count = 0;
    let current = this.head;
    while(current !== null){
      if (idx === count) {
        let newNode = new Node(val);
        newNode.next = current.next;
        current.next = newNode;
        return
      }
      count++;
      current = current.next;

    }
   throw new Error('Invalid index')
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let count = 0;
    let current = this.head;
    let pastNode = this.head;
    while(current !== null){
      if (idx === count) {
        if (idx === 0 && current.next === null ) {
          this.head = null;
          this.tail = null;
          return current.val
        }
        if (idx !== 0 && current.next === null ) {
          pastNode.next = null;
          this.tail = pastNode;
          return current.val
        }
        pastNode.next = current.next
        return current.val
      }
      count++;
      pastNode = current;
      current = current.next;
    }
   throw new Error('Invalid index')
  }

  /** average(): return an average of all values in the list */

  average() {
    let count = 0;
    let current = this.head;
    let sum = 0;
    while(current !== null){
      sum = sum + current.val;
      current = current.next;
      count++;
    }
   return sum/count
  }
  }


module.exports = LinkedList;
