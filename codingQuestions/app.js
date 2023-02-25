// Problem statement about the tree is defined as the arrangement of nodes in such a way that the value at left node is always less than root and value at right node is always greater than the root node. The height of the binary tree is defined as the number of edges between the tree's root and its farthest leaf. 
// we have to write a function get height to complete that function such that it returns the maximum height of the tree

// In this problem, you will be provided with the head pointer pointing to the head of the link List. your job as a programmer is to print all the elements in the link list in the reverse order, Idu pointer points to Kaal than the link list is empty.

// JavaScript program to find height of tree

// A binary tree node
class Node
{
	constructor(item)
	{
		this.data=item;
		this.left=this.right=null;
	}
}

	let root;
	
	/* Compute the "maxDepth" of a tree -- the number of
	nodes along the longest path from the root node
	down to the farthest leaf node.*/
	function maxDepth(node)
	{
		if (node == null)
			return 0;
		else
		{
			/* compute the depth of each subtree */
			let lDepth = maxDepth(node.left);
			let rDepth = maxDepth(node.right);

			/* use the larger one */
			if (lDepth > rDepth)
				return (lDepth + 1);
			else
				return (rDepth + 1);
		}
	}
	
	/* Driver program to test above functions */
	
		root = new Node(1);
		root.left = new Node(2);
		root.right = new Node(3);
		root.left.left = new Node(4);
		root.left.right = new Node(5);

		console.log("Height of tree is : " +maxDepth(root));




// This code is contributed by rag2127
//Correction done by Amit Srivastav
