import { Queue } from "../public/src/js/queue.js";
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(11);
queue.enqueue(36);
queue.dequeue();
console.log(queue.toString());
