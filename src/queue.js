const { NotImplementedError } = require('../extensions/index.js')

const { ListNode } = require('../extensions/list-node.js')

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue
  }

  getUnderlyingList() {
    return this.queue
  }

  enqueue(value) {
    function add(node, value) {
      if (!node) {
        return new ListNode(value)
      }

      node.next = add(node.next, value)

      return node
    }

    this.queue = add(this.queue, value)
  }

  dequeue() {
    if (!this.queue) {
      return null
    }

    let firstElem = this.queue

    this.queue = firstElem.next

    return firstElem.value
  }
}

module.exports = {
  Queue,
}
