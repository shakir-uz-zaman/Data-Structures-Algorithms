var minDepthHandler = function (root.num)
{
    if(root==null) 
        {
            return 0;
        }
    if(root.left && root.right)
        {
            return Math.min(minDepthHandler(root.left,num+1), minDepthHandler(root.right,num+1) )
        }
    else if (root.right != null){
        return minDepthHandler(root.right, num+1)
    } else {
        return minDepthHandler(root.left, num+1)
    }
    
}