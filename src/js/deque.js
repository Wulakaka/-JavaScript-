// 双端队列
export class Deque {
  constructor() {
    // 队列大小
    this.count = 0;
    // 追踪第一项
    this.lowestCount = 0;
    // 记录队列中数据
    this.items = {};
  }

  // 向队列前端添加元素
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }

  // 向队列后端添加元素
  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  // 从队列前端移除元素并返回
  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  // 从队列后端移除元素
  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    } else {
      this.count--;
      const result = this.items[this.count];
      delete this.items[this.count];
      return result;
    }
  }

  // 查看队列前端第一个元素
  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  // 查看队列后端第一个元素
  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    } else {
      return this.items[this.count];
    }
  }
  // 检查队列是否为空
  isEmpty() {
    return this.count - this.lowestCount === 0;
  }
  // 获取队列长度
  size() {
    return this.count - this.lowestCount;
  }
  // 清空队列
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  // 获取快照
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString += `,${this.items[i]}`;
    }
    return objString;
  }
}

// const deque = new Deque();
// console.log(deque.isEmpty());
// deque.addBack('John')
// deque.addBack('Jack')
// console.log(deque.toString());
// deque.addBack('Camila')
// console.log(deque.toString());
// console.log(deque.size());
// console.log(deque.isEmpty());
// deque.removeFront()
// console.log(deque.toString());
// deque.removeBack()
// console.log(deque.toString());
// deque.addFront('John')
// console.log(deque.toString());

console.log('a', palindromeChecker('a'));
console.log('aa', palindromeChecker('aa'));
console.log('kayak', palindromeChecker('kayak'));
console.log('level', palindromeChecker('level'));
console.log('Was it a car or a cat I saw', palindromeChecker('Was it a car or a cat I saw'));
console.log('Step on no pets', palindromeChecker('Step on no pets'));

// 回文检查器
function palindromeChecker(aString) {
  if (
    aString === undefined ||
    aString === null ||
    (aString !== null && aString.length === 0)
  ) {
    return false;
  }
  const deque = new Deque();
  const lowerString = aString.toLocaleLowerCase().split(" ").join("");
  let isEqual = true;
  let firstChar, lastChar;
  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i));
  }

  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();
    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }

  return isEqual;
}
