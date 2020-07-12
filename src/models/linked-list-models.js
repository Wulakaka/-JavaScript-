export class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

export class DoublyNode extends Node {
  constructor(element) {
    super (element);
    this.prev = undefined;
  }
}