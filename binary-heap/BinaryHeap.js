export class BinaryHeap {
  constructor() {
    this.data = [];
  }

  insert(node) {
    this.data.push(node);
    this._bubbleUp(this.data.length - 1);
  }

  extract() {
    const root = this.data[0];
    const last = this.data.pop();

    if (this.data.length) {
      this.data[0] = last;
      this._sinkDown(0);
    }

    return root;
  }

  _bubbleUp(index) {
    const node = this.data[index];
    const parentIndex = Math.floor((index - 1) / 2);
    const parent = this.data[parentIndex];

    if (parentIndex < 0) {
      return;
    }

    if (node > parent) {
      this.data[index] = parent;
      this.data[parentIndex] = node;
      this._bubbleUp(parentIndex);
    }
  }

  _sinkDown(index) {
    const node = this.data[index];
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;
    const left = leftIndex < this.data.length ? this.data[leftIndex] : -Infinity;
    const right = rightIndex < this.data.length ? this.data[rightIndex] : -Infinity;

    if (node < left && left >= right) {
      this.data[index] = left;
      this.data[leftIndex] = node;
      this._sinkDown(leftIndex);
    } else if (node < right && right >= left) {
      this.data[index] = right;
      this.data[rightIndex] = node;
      this._sinkDown(rightIndex);
    }
  }
}
