// Javascript JS solution, faster than 98.45% of JavaScript online submissions

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) 
{ 
    var arr=[];
    
    function inOrder(root)
    {
        if(root==null)
            return null;
        inOrder(root.left);
        arr.push(root.val);
        inOrder(root.right);
    }
    
    function newTree()
    {
        var tempNode= new TreeNode();
        var cur=tempNode;
        for(var i=0; i<arr.length; i++)
        {
            cur.right=new TreeNode(arr[i]);
            cur=cur.right;
        }
        return tempNode.right;
    }
    inOrder(root);
    return newTree();
};