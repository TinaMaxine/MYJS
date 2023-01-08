
const bst= function (){
   const node = function (value){
       this.value = value;
       this.left=null;
       this.right = null;

   }
   let root = null;
   let insert = function (node,newnode){
       if (newnode.value < node.value){
           if(node.left == null){
               node.left = newnode;
           }else {
               insert(node.left,newnode)
           }
       }else{
               if(node.right == null){
                   node.right = newnode;
               }else{
                   insert(node.right,newnode)
               }
       }

   }
   this.insertnode = function(value){
       let newnode= new node(value)
       if (root==null){
           root = newnode;
       }else {
           insert (root,newnode)
       }
   } 
   this.min = (node = root) => {
       while(node && node.left !== null){
           node = node.left;
       }
               return node.value;}
    this.max = (node = root) => {
       while(node && node.right !== null){
           node = node.right;
       }
               return node.value;}
        this.search = (value, node = root) => {
                if (node == null) return false
                else if(value<node.value)  return this.search(value,node.left)//if
                else if(value>node.value) return this.search(value,node.right)
                else return true
        }
        this.preorder = (node=root)=>{
            if(node!=null){
                console.log(node.value);
                this.preorder(node.left);
                this.preorder(node.right);
            }

        }


}
const tree= new bst();
tree.insertnode (20);
tree.insertnode(50);       
tree.insertnode(10);
tree.insertnode(40);
tree.insertnode(80);
tree.insertnode(100);
tree.insertnode(5);  
console.log(tree);
console.log(tree.min());
console.log(tree.max());
console.log(tree.search(500));
console.log(tree.preorder());
