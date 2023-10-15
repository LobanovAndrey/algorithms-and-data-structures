export class Graph {
  constructor() {
    this.data = new Map();
  }

  addVertex(vertex) {
    if (!vertex || this.data.has(vertex)) {
      return;
    }

    this.data.set(vertex, new Set());
  }

  removeVertex(vertex) {
    if (!vertex || !this.data.has(vertex)) {
      return;
    }

    for (const [v, edges] of this.data) {
      edges.delete(vertex);
    }

    this.data.delete(vertex);
  }

  addEdge(vertex1, vertex2) {
    if (!vertex1 || !vertex2 || vertex1 === vertex2) {
      return;
    }

    if (!this.data.has(vertex1)) {
      this.data.set(vertex1, new Set());
    }

    if (!this.data.has(vertex2)) {
      this.data.set(vertex2, new Set());
    }

    this.data.get(vertex1).add(vertex2);
    this.data.get(vertex2).add(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    if (!vertex1 || !vertex2 || vertex1 === vertex2) {
      return;
    }

    if (!this.data.has(vertex1) || !this.data.has(vertex2)) {
      return;
    }

    this.data.get(vertex1).delete(vertex2);
    this.data.get(vertex2).delete(vertex1);
  }
}
