class ArrayQueue<T> {
  private limit: number
  private data: (T | null)[]
  private length = 0
  private front = 0
  private back = 0

  constructor(limit: number) {
    this.limit = limit
    this.data = new Array(limit)
  }

  private throwWhenEmpty() {
    if (this.isEmpty()) throw new Error("Queue is empty")
  }

  add(item: T) {
    if (this.isFull()) throw new Error("Queue is full")
    this.data[this.back] = item
    this.back = (this.back + 1) % this.limit
    this.length++
  }

  remove() {
    this.throwWhenEmpty()
    const item = this.data[this.front]
    this.data[this.front] = null
    this.front = (this.front + 1) % this.limit
    this.length--
    return item
  }

  peek() {
    this.throwWhenEmpty()
    return this.data[this.front]
  }

  isEmpty() {
    return this.length === 0
  }

  isFull() {
    return this.length === this.limit
  }
}

const queue = new ArrayQueue<number>(3)

queue.add(1)
queue.add(2)
queue.add(3)
queue.remove()
queue.remove()
queue.remove()

console.log(queue.peek())

export default ArrayQueue
