var levelOrder = function(root) {
    if(!root) return []
    let queue = [root]
    let arr = []
    let res = [[root.val]]
    while(queue.length > 0) {
        const curr = queue.shift()
        if (curr.left) arr.push(curr.left)
        if (curr.right) arr.push(curr.right)
        if (queue.length === 0 && arr.length > 0) {
            queue = arr.slice();
            res.push(queue.map(q => q.val));
            arr = [];
        }
    }
    return res
};
