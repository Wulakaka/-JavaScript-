import { defaultEquals } from "../util";
import { Node } from "../models/linked-list-models";

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    // 存储元素数量
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  // 向链表尾部添加元素
  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  // 从链表中移除元素
  removeAt(index) {
    // 检查越界值
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  // 循环迭代直到目标位置
  getElementAt(index) {
    if (index >= 0 && index < this.count) {
      let node = this.head;
      for (let i = 0; i < index; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  // 在任意位置插入元素
  insert(index, element) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  // 返回一个元素位置
  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(current.element, element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  // 从链表中删除
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  // 检查链表是否为空
  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count;
  }

  getHead() {
    return this.head;
  }

  toString() {
    if (this.head == null) {
      return "";
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.count && current != null; i++) {
      objString += `,${current.element}`;
      current = current.next;
    }
    return objString;
  }
}

const list = new LinkedList();
list.push(10);
list.push(15);
console.log(list.toString());
list.insert(2, 7)
list.push(16)
list.removeAt(1)
console.log(list.toString());
