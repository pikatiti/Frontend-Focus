const preorder = (root) => {
  if(!root) return
  console.log(root.val);
  preorder(root.left)
  preorder(root.right)
}

const inorder = (root) => {
  if(!root) return
  inorder(root.left)
  console.log(root.val)
  inorder(root.right)
}


const postorder = (root) => {
  if(!root) return
  postorder(root.left)
  postorder(root.right)
  console.log(root.val);
}

const preorder = (root) => {
  if (!root) return
  const stack = [root]

  while(stack.length) {
    const head = stack.pop()
    console.log(head.val)
    if(head.right) {
      stack.push(head.right)
    }
    if(head.left) {
      stack.push(head.left)
    }
  }
}

const inorder = (root) => {
  if(!root) return
  const stack = []
  const p = root

  while(p || stack.length) {
    while(p){
      stack.push(p)
      p = p.left
    }
    const head = stack.pop()
    console.log(head.val)
    p = head.right
  }
}

const postorder = (root) => {
  if(!root) return
  const stack = [root]
  const outputStack = []

  while(stack.length) {
    const head = stack.pop()
    outputStack.push(head)
    if(head.left) {
      stack.push(head.left)
    }
    if(head.right) {
      stack.push(head.right)
    }
  }

  while(outputStack.length) {
    const head = outputStack.pop()
    console.log(head.val)
  }
}

const dfs = (root) => {
  if(!root) return
  console.log(root.val)
  root.children.forEach(dfs)
}

const bfs = (root) => {
  if(!root) return
  const queue = [root]
  while(queue.length) {
    const head = queue.shift()
    console.log(head.val)
    head.children.forEach((child) => {
      queue.push(child)
    })
  }
}

