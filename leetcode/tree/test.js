// const tree = {
//   val: 'F',
//   children: [{
//     val: 'C',
//     children: [{
//       val: 'A',
//       children: []
//     }, {
//       val: 'D',
//       children: [{
//         val: 'B',
//         children: []
//       }]
//     }]
//   }, {
//     val: 'E',
//     children: [{
//       val: 'H',
//       children: [],
//     }, {
//       val: 'G',
//       children: [{
//         val: 'M',
//         children: []
//       }]
//     }]
//   }]
// }
import createTree from './createTree';
const tree = {
  val: 'F',
  left: {
    val: 'C',
    left: {
      val: 'A',
      left: null,
      right: null
    },
    right: {
      val: 'D',
      left: {
        val: 'B',
        left: null,
        right: null
      },
      right: null
    }
  },
  right: {
    val: 'E',
    left: {
      val: 'H',
      left: null,
      right: null
    },
    right: {
      val: 'G',
      left: {
        val: 'M',
        left: null,
        right: null
      },
      right: null
    }
  }
}
str = ''
const dfs = (root) => {
  console.log(root.val)
  str += root.val
  root.children.forEach(dfs)
}
// dfs(tree)
var hasPathSum = function(root, targetSum) {
  if (root.left) {
    return hasPathSum(root.left, targetSum - root.val)
  }
  if (root.right) {
    return hasPathSum(root.right, targetSum - root.val)
  }
  return root.val === targetSum.val
};

str = ''

const bfs = (root) => {
  const queue = [root]
  while(queue.length) {
    const head = queue.shift()
    str += head.val
    console.log(head.val)
    head.children.forEach((child) => queue.push(child))
  }
}
// bfs(tree)

const preorder1 = (root) => {
  if(!root) return
  str += root.val
  preorder(root.left)
  preorder(root.right)
}
const preorder = (root) => {
  const stack = [root]
  while(stack.length) {
    let head = stack.pop()
    str += head.val
    if (head.right) {
      stack.push(head.right)
    }
    if(head.left) {
      stack.push(head.left)
    }
  }
}
// preorder(tree)
// FCADBEHGM

const inorder1 = (root) => {
  if(!root) return
  inorder(root.left)
  str += root.val
  inorder(root.right)
}
const inorder = (root) => {
  const stack = []
  let p = root
  while(stack.length || p) {
    while(p) {
      stack.push(p)
      p = p.left
    }
    const head = stack.pop()
    str += head.val
    p = head.right
  }
}
// inorder(tree)
// ACBDFHEMG

const postorder1 = (root) => {
  if(!root) return
  postorder(root.left)
  postorder(root.right)
  str += root.val
}
const postorder = (root) => {
  const stack = [root]
  const outputStack = []
  while(stack.length) {
    let n = stack.pop()
    outputStack.push(n)
    if(n.left) {
      stack.push(n.left)
    }
    if (n.right) {
      stack.push(n.right)
    }
  }
  while(outputStack.length) {
    const n = outputStack.pop()
    str += n.val
  }
}
postorder(tree)
// ABDCHMGEF

console.log('str :>> ', str)