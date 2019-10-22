# Given a binary tree, find its maximum depth.

# The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

# Note: A leaf is a node with no children.

def max_depth(root)
  return 0 if root.nil?

  ldepth = max_depth(root.left)
  rdepth = max_depth(root.right)
  [ldepth + 1, rdepth + 1].max
end
