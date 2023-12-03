class BST {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = { value, left: null, right: null };

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.addNode(this.root, newNode);
    }
  }

  addNode(node, newNode) {
    if (newNode.value === node.value) {
      return;
    }

    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }

  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  removeNode(node, value) {
    if (node === null) {
      return null;
    }

    if (value === node.value) {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        const max = this.findMax(node.left);

        node.value = max.value;
        node.left = this.removeNode(node.left, max.value);

        return node;
      }
    }

    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
    } else {
      node.right = this.removeNode(node.right, value);
    }

    return node;
  }

  findMax(node) {
    while (node && node.right) {
      node = node.right;
    }

    return node;
  }

  find(value) {
    let node = this.root;

    while (node && node.value !== value) {
      if (value > node.value) {
        node = node.right;
      } else {
        node = node.left;
      }
    }

    return node;
  }
}
