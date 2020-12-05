class PriorityQueue {
  private limit: number
  private data: (number | null)[]
  private length = 0

  constructor(limit: number) {
    this.limit = limit
    this.data = new Array(limit)
  }

  add(item: number) {
    if (this.isFull()) throw new Error("Queue is full")

    let i = this.length - 1
    for (i; i >= 0; i--) {
      if (this.data[i]! > item) this.data[i + 1] = this.data[i]
      else break
    }
    this.data[i + 1] = item

    this.length++
  }

  remove() {
    if (this.isEmpty()) throw new Error("Queue is empty")

    const item = this.data[this.length - 1]
    this.data[this.length - 1] = null

    this.length--

    return item
  }

  isEmpty() {
    return this.length === 0
  }

  isFull() {
    return this.length === this.limit
  }
}

const queue = new PriorityQueue(4)
queue.add(6)
queue.add(1)
queue.add(9)
queue.add(5)

console.log(queue)
while (!queue.isEmpty()) console.log(queue.remove())

export default PriorityQueue
