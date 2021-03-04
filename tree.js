/* 
console.log("tree started");
class Node{
    constructor(data)
    {
        this.data = data;
        this.left =null;
        this.right=null;
    }
}
class BinaryTree{

    constructor()
    {
        this.root=null;
    }
    insert(data)
    {
        var newNode = new Node(data);
        if(this.root==null)
        {
            this.root=newNode;
        }
        else{
            this.insertNode(this.root,newNode);
        }
    }
    insertNode(node, newNode)
    {   console.log("*******************START********************");
        console.log(node);
        console.log(newNode);
        if(newNode.data<node.data)
        {
            if(node.left===null)
            { 

                node.left=newNode;
            }
            else{

                this.insertNode(node.left,newNode)
            }

        }
        else
        {
            if(node.right === null)
            {
                console.log(newNode);
                node.right =newNode;
            }
            else
            {
             this.insertNode(this.right,newNode);
            }
        }
        console.log("**********************FINISH**************************");
    }
        // preorder(node)  
    
    // Performs preorder traversal of a tree     
    preorder(node) 
    { 
        if(node !== null) 
        { 
            console.log(node.data); 
            this.preorder(node.left); 
            this.preorder(node.right); 
        } 
    } 

}
var BST =new BinaryTree();
BST.insert(10);
BST.insert(7);
BST.insert(5);
BST.insert(15);
console.log(
    JSON.stringify(BST));
//BST.preorder(10);
*/


class Node{

    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;

    }
}
class BinaryTree{

    constructor()
    {
        this.root=null;
        this.ic=0;
    }

    insert(data)
    {  
        let newNode = new Node(data);

        if(this.root==null)
        {
            this.root = newNode;
        }
        else
        {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(node,newNode)
    {
        if(node.data>newNode.data)
            {
                if(node.left==null)
                {
                    node.left = newNode;
                }
                else
                {
                    this.insertNode(node.left,newNode);
                }

            }
        else
            {
                if(node.right==null)
                {
                    node.right = newNode;
                }
                else
                {
                    this.insertNode(node.right,newNode);
                }

            }
        

    }
    
    inorder(node) 
    { 
        if(node !== null) 
        {   
            this.ic++;
            console.log(this.ic+"----"+JSON.stringify(node,null,2));
            
            this.inorder(node.left); 
            console.log(node.data); 
            console.log(JSON.stringify(node,null,2));
            this.inorder(node.right); 
            console.log("r"+JSON.stringify(node.right));
        } 
    } 
    getRootNode() 
    { 
        return this.root; 
    } 
}

let BST = new BinaryTree();
BST.insert(15); 
BST.insert(25); 
BST.insert(10); 
BST.insert(7); 
BST.insert(22); 
BST.insert(17); 
BST.insert(13); 
BST.insert(5); 
BST.insert(9); 
BST.insert(27); 
                          
//          15 
//         /  \ 
//        10   25 
//       / \   / \ 
//      7  13 22  27 
//     / \    / 
//    5   9  17  
var root = BST.getRootNode(); 

//console.log(JSON.stringify(BST.inorder(root),null,2));
console.log(JSON.stringify(BST.inorder(root),null,2));