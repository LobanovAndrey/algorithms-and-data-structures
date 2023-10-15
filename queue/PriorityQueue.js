class PirorityQueue {
  constructor() {
    this.nodes = [];
    this.priority = new Map();
  }

  push(node, priority) {
    if (!this.priority.has(node)) {
      this.nodes.push(node);
    }

    this.priority.set(node, priority);
    this.nodes.sort((a, b) => this.priority.get(b) - this.priority.get(a));
  }

  pop() {
    if (!this.nodes.length) {
      return undefined;
    }

    const node = this.nodes.pop();
    const priority = this.priority.get(node);

    return [node, priority];
  }

  get size() {
    return this.nodes.length;
  }
}
