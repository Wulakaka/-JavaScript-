// 普通队列
export class Queue {
  constructor() {
    // 队列大小
    this.count = 0;
    // 追踪第一项
    this.lowestCount = 0;
    // 记录队列中数据
    this.items = {};
  }
  // 向队列添加元素
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }
  // 从队列中移除元素并返回
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  // 查看队列头元素
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
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
    if(this.isEmpty()){
      return '';
    }
    let objString = `${this.items[this.lowestCount]}`
    for(let i = this.lowestCount + 1; i < this.count; i++) {
      objString += `,${this.items[i]}`
    }
    return objString
  }
}

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(11);
// queue.enqueue(36);
// queue.dequeue();
// console.log(queue.toString());
const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl', 'Tom']
const result = hotPotato(names, 7);
result.elimitated.forEach(name => {
  console.log(`${name}在游戏中被淘汰`);
})
console.log(`获胜者${result.winner}`);

// 击鼓传花
function hotPotato(elementsList, num) {
  const queue = new Queue();
  const elimitatedList = [];
  elementsList.forEach(ele => queue.enqueue(ele))
  while(queue.size() > 1) {
    for(let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    elimitatedList.push(queue.dequeue())
  }
  return {
    elimitated: elimitatedList,
    winner: queue.dequeue()
  }
}