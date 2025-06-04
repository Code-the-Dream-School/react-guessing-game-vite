# # https://discord.gg/GdFu8puv
# EE

# Given the root of a binary tree, invert the tree, and return its root.

 

# Example 1:


# Input: root = [4,2,7,1,3,6,9]
# Output: [4,7,2,9,6,3,1]
# Example 2:


# Input: root = [2,1,3]
# Output: [2,3,1]
# Example 3:

# Input: root = []
# Output: []
 

# Constraints:

# The number of nodes in the tree is in the range [0, 100].
# -100 <= Node.val <= 100


      
    # //find the parent
    # //if has most child/leaf it a parent
    #   //if a node has 2 child 
    # //swap left & right child
    # //if a node doesnt have any child, its leaf - doenst have left and right child


    
    # //return its root

    # //recursive
    # //base case: if root is retrun root
    # //action: root.left = root.right
    # //recursive call: 
    #    // swap(root)

    
    # //null -> null
    # // 1 -> 1

