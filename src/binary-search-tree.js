const { NotImplementedError } = require('../extensions/index.js')

const { Node } = require('../extensions/list-tree.js')

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.searchTree = null
  }

  root() {
    return this.searchTree
  }

  add(data) {
    this.searchTree = addItem(this.searchTree, data)

    function addItem(node, data) {
      if (!node) {
        return new Node(data)
      }

      if (node.data === data) {
        return node
      }

      if (data < node.data) {
        node.left = addItem(node.left, data)
      } else {
        node.right = addItem(node.right, data)
      }

      return node
    }
  }

  has(data) {
    return searchItem(this.searchTree, data)

    function searchItem(node, data) {
      if (!node) return false

      if (node.data === data) return true

      return data < node.data ? searchItem(node.left, data) : searchItem(node.right, data)
    }
  }

  find(data) {
    return findItem(this.searchTree, data)

    function findItem(node, data) {
      if (!node) return null

      if (node.data === data) return node

      return data < node.data ? findItem(node.left, data) : findItem(node.right, data)
    }
  }

  remove(data) {
    this.searchTree = remuveItem(this.searchTree, data)

    function remuveItem(node, data) {
      if (!node) return null

      if (data < node.data) {
        node.left = remuveItem(node.left, data)
        return node
      } else if (data > node.data) {
        node.right = remuveItem(node.right, data)
        return node
      } else {
        if (!node.left && !node.right) {
          return null
        }

        if (!node.left) {
          node = node.right
          return node
        }

        if (!node.right) {
          node = node.left
          return node
        }

        let maxLeft = node.left
        while (maxLeft.right) {
          maxLeft = maxLeft.right
        }

        node.data = maxLeft.data

        node.left = remuveItem(node.left, maxLeft.data)

        return node
      }
    }
  }

  min() {
    return findMin(this.searchTree)

    function findMin(node) {
      if (!node) return null

      return node.left ? findMin(node.left) : node.data
    }
  }

  max() {
    return findMax(this.searchTree)

    function findMax(node) {
      if (!node) return null

      return node.right ? findMax(node.right) : node.data
    }
  }
}

module.exports = {
  BinarySearchTree,
}
