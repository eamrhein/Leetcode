def inorder_traversal(root)
  return [] if root == nil

  a = inorder_traversal(root.left)
  b = inorder_traversal(root.right)
  a + [root.val] + b
end

def interative_traversal(root)
  stack = []
  res = []
  current = root
  while true
    if !current.nil?
      stack.push(current)
      current = current.left
    elsif !stack.empty?
      current = stack.pop()
      res.push(current.val)
      current = current.right
    else
        break
    end
  end
  res
end
