export const questions = [
  {
    id: 1,
    question: `To implement a Threaded Binary Tree and perform in-order traversal without using stack or recursion.`,
    code: `#include <stdio.h>
#include <stdlib.h>
struct Node
{
    int data;
    struct Node *left;
    struct Node *right;
    int rightThread;
};
struct Node* createNode(int data)
{
    struct Node *newNode;
    newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->left = NULL;
    newNode->right = NULL;
    newNode->rightThread = 0;
    return newNode;
}
// Find leftmost node
struct Node* leftMost(struct Node *root)
{
    while(root != NULL && root->left != NULL)
    {
        root = root->left;
    }
    return root;
}
// Inorder traversal without stack and recursion
void inorder(struct Node *root)
{
    struct Node *temp;
    temp = leftMost(root);
    while(temp != NULL)
    {
        printf("%d ", temp->data);
        // Move using thread
        if(temp->rightThread == 1)
        {
            temp = temp->right;
        }
        else
        {
            temp = leftMost(temp->right);
        }
    }
}
int main()
{
    struct Node *root;
    // Creating tree manually
    root = createNode(20);
    root->left = createNode(10);
    root->right = createNode(30);
    root->left->left = createNode(5);
    root->left->right = createNode(15);
    // Creating threads
    root->left->left->right = root->left;
    root->left->left->rightThread = 1;
    root->left->right->right = root;
    root->left->right->rightThread = 1;
    printf("Inorder Traversal:\\n");
    inorder(root);
    return 0;
}
`,
    algorithm: `Algorithm: Right Threaded Binary Tree - In-order Traversal

Step 1: Create a Node structure with data, left/right pointers, and rightThread flag
Step 2: Implement createNode() to allocate memory and initialize node with rightThread = 0
Step 3: Implement leftMost() to find the leftmost node by traversing left pointers
Step 4: In inorder() traverse function:
  - Start from leftmost node of root
  - Print current node's data
  - If rightThread is 1, move directly to right pointer (thread)
  - If rightThread is 0, find leftmost node of right subtree
  - Continue until current node becomes NULL
Step 5: Create sample tree and set up threading pointers between nodes
Step 6: Call inorder() to display traversal

Time Complexity: O(n) where n is number of nodes
Space Complexity: O(1) since no stack or recursion is used
`
  },
  {
    id: 2,
    question: `To design a Threaded Binary Tree and perform preorder traversal without recursion and stack.`,
    code: `#include <stdio.h>
#include <stdlib.h>
struct Node
{
    int data;
    struct Node *left;
    struct Node *right;
    int rightThread;
};
struct Node* createNode(int data)
{
    struct Node *newNode;
    newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->left = NULL;
    newNode->right = NULL;
    newNode->rightThread = 0;
    return newNode;
}
// Preorder traversal without recursion and stack
void preorder(struct Node *root)
{
    struct Node *temp;
    temp = root;
    while(temp != NULL)
    {
        printf("%d ", temp->data);
        // Move to left child first
        if(temp->left != NULL)
        {
            temp = temp->left;
        }
        else
        {
            // Follow threads
            while(temp != NULL && temp->rightThread == 1)
            {
                temp = temp->right;
            }
            if(temp != NULL)
            {
                temp = temp->right;
            }
        }
    }
}
int main()
{
    struct Node *root;
    // Creating tree manually
    root = createNode(20);
    root->left = createNode(10);
    root->right = createNode(30);
    root->left->left = createNode(5);
    root->left->right = createNode(15);
    // Creating threads
    root->left->left->right = root->left;
    root->left->left->rightThread = 1;
    root->left->right->right = root;
    root->left->right->rightThread = 1;
    printf("Preorder Traversal:\\n");
    preorder(root);
    return 0;
}
`,
    algorithm: `Algorithm: Right Threaded Binary Tree - Preorder Traversal

Step 1: Create Node structure with data, left/right pointers, and rightThread flag
Step 2: Implement createNode() to allocate memory and initialize node
Step 3: In preorder() traversal function:
  - Start from root node
  - Print current node's data
  - If left child exists, move to left child
  - If no left child, follow thread pointers:
    - While rightThread is 1 (indicating thread), move right
    - If rightThread is 0, move to right child (actual tree node)
  - Continue until current node becomes NULL
Step 4: Set up threading relationships between nodes
Step 5: Execute preorder() to display nodes in preorder sequence

Time Complexity: O(n) where n is number of nodes
Space Complexity: O(1) with no external stack or recursion
`
  },
  {
    id: 3,
    question: `Write a program to implement a Left Threaded Binary Tree and display its nodes using preorder traversal.`,
    code: `#include <stdio.h>
#include <stdlib.h>
struct Node
{
    int data;
    struct Node *left;
    struct Node *right;
    int leftThread;
};
struct Node* createNode(int data)
{
    struct Node *newNode;
    newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->left = NULL;
    newNode->right = NULL;
    newNode->leftThread = 0;
    return newNode;
}
// Preorder traversal
void preorder(struct Node *root)
{
    struct Node *temp;
    temp = root;
    while(temp != NULL)
    {
        printf("%d ", temp->data);
        // Move to left child if it is not thread
        if(temp->left != NULL && temp->leftThread == 0)
        {
            temp = temp->left;
        }
        else
        {
            temp = temp->right;
        }
    }
}
int main()
{
    struct Node *root;
    // Creating tree
    root = createNode(20);
    root->left = createNode(10);
    root->right = createNode(30);
    root->left->left = createNode(5);
    root->left->right = createNode(15);
    // Creating left thread
    root->left->right->left = root->left;
    root->left->right->leftThread = 1;
    printf("Preorder Traversal:\\n");
    preorder(root);
    return 0;
}
`,
    algorithm: `Algorithm: Left Threaded Binary Tree - Preorder Traversal

Step 1: Create Node structure with data, left/right pointers, and leftThread flag
Step 2: Implement createNode() to allocate memory and initialize node with leftThread = 0
Step 3: In preorder() traversal function:
  - Start from root node
  - Print current node's data
  - Check left child pointer:
    - If left child exists AND leftThread is 0 (not a thread), move to left child
    - If left child is NULL or leftThread is 1 (thread), move to right child
  - Continue until current node becomes NULL
Step 4: Set up left threading pointers to predecessor nodes
Step 5: Execute preorder() to display traversal

Time Complexity: O(n) where n is number of nodes
Space Complexity: O(1) as no stack or recursion is used
`
  },
  {
    id: 4,
    question: `Develop a program to create a Right Threaded Binary Tree where NULL right pointers point to the in-order successor.`,
    code: `#include <stdio.h>
#include <stdlib.h>
struct Node
{
    int data;
    struct Node *left;
    struct Node *right;
    int rightThread;
};
struct Node* createNode(int data)
{
    struct Node *newNode;
    newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->left = NULL;
    newNode->right = NULL;
    newNode->rightThread = 0;
    return newNode;
}
// Find leftmost node
struct Node* leftMost(struct Node *root)
{
    while(root != NULL && root->left != NULL)
    {
        root = root->left;
    }
    return root;
}
// Inorder traversal using threads
void inorder(struct Node *root)
{
    struct Node *temp;
    temp = leftMost(root);
    while(temp != NULL)
    {
        printf("%d ", temp->data);
        // Move using thread
        if(temp->rightThread == 1)
        {
            temp = temp->right;
        }
        else
        {
            temp = leftMost(temp->right);
        }
    }
}
int main()
{
    struct Node *root;
    // Create tree
    root = createNode(20);
    root->left = createNode(10);
    root->right = createNode(30);
    root->left->left = createNode(5);
    root->left->right = createNode(15);
    // Create right threads
    root->left->left->right = root->left;
    root->left->left->rightThread = 1;
    root->left->right->right = root;
    root->left->right->rightThread = 1;
    printf("Inorder Traversal:\\n");
    inorder(root);
    return 0;
}
`,
    algorithm: `Algorithm: Right Threaded Binary Tree - In-order with Threading

Step 1: Create Node structure with data, left/right pointers, and rightThread flag
Step 2: Implement createNode() to allocate memory and initialize with rightThread = 0
Step 3: Implement leftMost() helper to find leftmost node in a subtree
Step 4: In inorder() traversal:
  - Find leftmost node of entire tree
  - While current node is not NULL:
    - Print current node's data
    - If rightThread is 1, follow thread to in-order successor
    - If rightThread is 0, find leftmost node of right subtree
  - Continue until all nodes are processed
Step 5: Manually set right thread pointers to in-order successors
Step 6: Execute inorder() to display sorted traversal

Time Complexity: O(n) where n is number of nodes
Space Complexity: O(1) with no recursion or external stack
`
  },
  {
    id: 5,
    question: `To design and implement an AVL Tree by inserting elements and maintaining balance using rotations, and display the tree using in-order traversal.`,
    code: `#include <stdio.h>
#include <stdlib.h>
struct Node
{
    int data;
    struct Node *left;
    struct Node *right;
    int height;
};
// Find maximum
int max(int a, int b)
{
    if(a > b)
        return a;
    else
        return b;
}
// Get height
int height(struct Node *root)
{
    if(root == NULL)
        return 0;
    return root->height;
}
// Create node
struct Node* createNode(int data)
{
    struct Node *newNode;
    newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->left = NULL;
    newNode->right = NULL;
    newNode->height = 1;
    return newNode;
}
// Right Rotation
struct Node* rightRotate(struct Node *y)
{
    struct Node *x;
    struct Node *temp;
    x = y->left;
    temp = x->right;
    x->right = y;
    y->left = temp;
    y->height = max(height(y->left), height(y->right)) + 1;
    x->height = max(height(x->left), height(x->right)) + 1;
    return x;
}
// Left Rotation
struct Node* leftRotate(struct Node *x)
{
    struct Node *y;
    struct Node *temp;
    y = x->right;
    temp = y->left;
    y->left = x;
    x->right = temp;
    x->height = max(height(x->left), height(x->right)) + 1;
    y->height = max(height(y->left), height(y->right)) + 1;
    return y;
}
// Balance Factor
int getBalance(struct Node *root)
{
    if(root == NULL)
        return 0;
    return height(root->left) - height(root->right);
}
// Insert node
struct Node* insert(struct Node *root, int data)
{
    int balance;
    // Normal BST insertion
    if(root == NULL)
        return createNode(data);
    if(data < root->data)
        root->left = insert(root->left, data);
    else if(data > root->data)
        root->right = insert(root->right, data);
    else
        return root;
    // Update height
    root->height = 1 + max(height(root->left),
                           height(root->right));
    // Get balance factor
    balance = getBalance(root);
    // Left Left Case
    if(balance > 1 && data < root->left->data)
        return rightRotate(root);
    // Right Right Case
    if(balance < -1 && data > root->right->data)
        return leftRotate(root);
    // Left Right Case
    if(balance > 1 && data > root->left->data)
    {
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }
    // Right Left Case
    if(balance < -1 && data < root->right->data)
    {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }
    return root;
}
// Inorder traversal
void inorder(struct Node *root)
{
    if(root != NULL)
    {
        inorder(root->left);
        printf("%d ", root->data);
        inorder(root->right);
    }
}
int main()
{
    struct Node *root = NULL;
    root = insert(root, 30);
    root = insert(root, 20);
    root = insert(root, 10);
    root = insert(root, 40);
    root = insert(root, 50);
    printf("Inorder Traversal:\\n");
    inorder(root);
    return 0;
}
`,
    algorithm: `Algorithm: AVL Tree - Insertion with Self-Balancing

Step 1: Create Node structure with data, left/right pointers, and height field
Step 2: Implement helper functions:
  - height() to get node's height (0 if NULL)
  - getBalance() to calculate balance factor (left height - right height)
  - leftRotate() and rightRotate() for tree rotations
Step 3: In insert() function:
  - If root is NULL, create and return new node
  - Recursively insert into left or right subtree based on value
  - Update height of current node
  - Calculate balance factor
  - Based on balance factor, perform appropriate rotation:
    - Balance > 1 (left heavy) and data < left->data: Right rotation (LL case)
    - Balance < -1 (right heavy) and data > right->data: Left rotation (RR case)
    - Balance > 1 and data > left->data: Left-Right rotation (LR case)
    - Balance < -1 and data < right->data: Right-Left rotation (RL case)
Step 4: Display tree using in-order traversal

Time Complexity: O(log n) for insertion and balancing operations
Space Complexity: O(log n) for recursion stack
`
  },
  {
    id: 6,
    question: `Design and implement a program to create an AVL Tree by inserting a set of elements. The program should automatically perform necessary rotations to maintain balance. Display the tree using in-order traversal.`,
    code: `#include <stdio.h>
#include <stdlib.h>
struct Node
{
    int data;
    struct Node *left;
    struct Node *right;
    int height;
};
// Find maximum
int max(int a, int b)
{
    if(a > b)
        return a;
    else
        return b;
}
// Get height
int height(struct Node *root)
{
    if(root == NULL)
        return 0;
    return root->height;
}
// Create new node
struct Node* createNode(int data)
{
    struct Node *newNode;
    newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->left = NULL;
    newNode->right = NULL;
    newNode->height = 1;
    return newNode;
}
// Right Rotation
struct Node* rightRotate(struct Node *y)
{
    struct Node *x;
    struct Node *temp;
    x = y->left;
    temp = x->right;
    x->right = y;
    y->left = temp;
    y->height = max(height(y->left),
                    height(y->right)) + 1;
    x->height = max(height(x->left),
                    height(x->right)) + 1;
    return x;
}
// Left Rotation
struct Node* leftRotate(struct Node *x)
{
    struct Node *y;
    struct Node *temp;
    y = x->right;
    temp = y->left;
    y->left = x;
    x->right = temp;
    x->height = max(height(x->left),
                    height(x->right)) + 1;
    y->height = max(height(y->left),
                    height(y->right)) + 1;
    return y;
}
// Get balance factor
int getBalance(struct Node *root)
{
    if(root == NULL)
        return 0;
    return height(root->left) - height(root->right);
}
// Insert node into AVL Tree
struct Node* insert(struct Node *root, int data)
{
    int balance;
    // BST insertion
    if(root == NULL)
        return createNode(data);
    if(data < root->data)
        root->left = insert(root->left, data);
    else if(data > root->data)
        root->right = insert(root->right, data);
    else
        return root;
    // Update height
    root->height = max(height(root->left),
                       height(root->right)) + 1;
    // Get balance factor
    balance = getBalance(root);
    // LL Rotation
    if(balance > 1 && data < root->left->data)
        return rightRotate(root);
    // RR Rotation
    if(balance < -1 && data > root->right->data)
        return leftRotate(root);
    // LR Rotation
    if(balance > 1 && data > root->left->data)
    {
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }
    // RL Rotation
    if(balance < -1 && data < root->right->data)
    {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }
    return root;
}
// Inorder traversal
void inorder(struct Node *root)
{
    if(root != NULL)
    {
        inorder(root->left);
        printf("%d ", root->data);
        inorder(root->right);
    }
}
int main()
{
    struct Node *root = NULL;
    root = insert(root, 50);
    root = insert(root, 40);
    root = insert(root, 30);
    root = insert(root, 60);
    root = insert(root, 70);
    printf("Inorder Traversal:\\n");
    inorder(root);
    return 0;
}
`,
    algorithm: `Algorithm: AVL Tree - Insertion and Auto-Balancing

Step 1: Define Node structure with data, left/right children, and height
Step 2: Implement utility functions:
  - height() returns node height (0 for NULL)
  - getBalance() returns balance factor = left height - right height
  - leftRotate() performs left rotation on subtree
  - rightRotate() performs right rotation on subtree
Step 3: In insert() recursive function:
  - Base case: if root is NULL, create new node with height 1
  - If data < root->data, insert in left subtree
  - If data > root->data, insert in right subtree
  - If data == root->data, return (duplicate)
  - Update root's height after insertion
  - Calculate balance factor of current node
  - Check all 4 cases and perform rotations:
    - LL Case: balance > 1 and data < left->data → right rotation
    - RR Case: balance < -1 and data > right->data → left rotation
    - LR Case: balance > 1 and data > left->data → left on left, right on root
    - RL Case: balance < -1 and data < right->data → right on right, left on root
Step 4: Display tree with in-order traversal

Time Complexity: O(log n) per insertion with balancing
Space Complexity: O(log n) for recursion
`
  },
  {
    id: 7,
    question: `Write a program to implement an AVL Tree and display its elements using different traversal techniques. (Preorder/Post-order)`,
    code: `#include <stdio.h>
#include <stdlib.h>
struct Node
{
    int data;
    struct Node *left;
    struct Node *right;
    int height;
};
// Find maximum
int max(int a, int b)
{
    if(a > b)
        return a;
    else
        return b;
}
// Find height
int height(struct Node *root)
{
    if(root == NULL)
        return 0;
    return root->height;
}
// Create node
struct Node* createNode(int data)
{
    struct Node *newNode;
    newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->left = NULL;
    newNode->right = NULL;
    newNode->height = 1;
    return newNode;
}
// Right Rotation
struct Node* rightRotate(struct Node *y)
{
    struct Node *x;
    struct Node *temp;
    x = y->left;
    temp = x->right;
    x->right = y;
    y->left = temp;
    y->height = max(height(y->left),
                    height(y->right)) + 1;
    x->height = max(height(x->left),
                    height(x->right)) + 1;
    return x;
}
// Left Rotation
struct Node* leftRotate(struct Node *x)
{
    struct Node *y;
    struct Node *temp;
    y = x->right;
    temp = y->left;
    y->left = x;
    x->right = temp;
    x->height = max(height(x->left),
                    height(x->right)) + 1;
    y->height = max(height(y->left),
                    height(y->right)) + 1;
    return y;
}
// Get balance factor
int getBalance(struct Node *root)
{
    if(root == NULL)
        return 0;
    return height(root->left) - height(root->right);
}
// Insert node
struct Node* insert(struct Node *root, int data)
{
    int balance;
    if(root == NULL)
        return createNode(data);
    if(data < root->data)
        root->left = insert(root->left, data);
    else if(data > root->data)
        root->right = insert(root->right, data);
    else
        return root;
    // Update height
    root->height = max(height(root->left),
                       height(root->right)) + 1;
    // Get balance factor
    balance = getBalance(root);
    // LL Rotation
    if(balance > 1 && data < root->left->data)
        return rightRotate(root);
    // RR Rotation
    if(balance < -1 && data > root->right->data)
        return leftRotate(root);
    // LR Rotation
    if(balance > 1 && data > root->left->data)
    {
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }
    // RL Rotation
    if(balance < -1 && data < root->right->data)
    {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }
    return root;
}
// Preorder Traversal
void preorder(struct Node *root)
{
    if(root != NULL)
    {
        printf("%d ", root->data);
        preorder(root->left);
        preorder(root->right);
    }
}
// Postorder Traversal
void postorder(struct Node *root)
{
    if(root != NULL)
    {
        postorder(root->left);
        postorder(root->right);
        printf("%d ", root->data);
    }
}
int main()
{
    struct Node *root = NULL;
    root = insert(root, 30);
    root = insert(root, 20);
    root = insert(root, 10);
    root = insert(root, 40);
    root = insert(root, 50);
    printf("Preorder Traversal:\\n");
    preorder(root);
    printf("\\n\\nPostorder Traversal:\\n");
    postorder(root);
    return 0;
}
`,
    algorithm: `Algorithm: AVL Tree - Multiple Traversal Methods

Step 1: Create Node structure with data, left/right pointers, and height
Step 2: Implement balancing functions:
  - rightRotate() and leftRotate() for tree rotations
  - getBalance() to compute balance factor
Step 3: Implement insert() with automatic balancing:
  - Standard BST insertion
  - Update heights and check balance factors
  - Perform appropriate rotations to maintain AVL property
Step 4: Implement traversal methods:
  - preorder(root): print → left → right (root first)
  - postorder(root): left → right → print (root last)
Step 5: Insert multiple elements and display using both traversals

Time Complexity: O(log n) for each insertion and balancing
Space Complexity: O(log n) for recursion stack during traversals
`
  },
  {
    id: 8,
    question: `Write a program to implement a Red-Black Tree by inserting a set of elements and display the tree using in-order traversal.`,
    code: `#include <stdio.h>
#include <stdlib.h>
#define RED 1
#define BLACK 0
struct Node
{
    int data;
    int color;
    struct Node *left;
    struct Node *right;
    struct Node *parent;
};
struct Node *root = NULL;
// Create new node
struct Node* createNode(int data)
{
    struct Node *newNode;
    newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->color = RED;
    newNode->left = NULL;
    newNode->right = NULL;
    newNode->parent = NULL;
    return newNode;
}
// Left Rotation
void leftRotate(struct Node *x)
{
    struct Node *y;
    y = x->right;
    x->right = y->left;
    if(y->left != NULL)
        y->left->parent = x;
    y->parent = x->parent;
    if(x->parent == NULL)
        root = y;
    else if(x == x->parent->left)
        x->parent->left = y;
    else
        x->parent->right = y;
    y->left = x;
    x->parent = y;
}
// Right Rotation
void rightRotate(struct Node *y)
{
    struct Node *x;
    x = y->left;
    y->left = x->right;
    if(x->right != NULL)
        x->right->parent = y;
    x->parent = y->parent;
    if(y->parent == NULL)
        root = x;
    else if(y == y->parent->left)
        y->parent->left = x;
    else
        y->parent->right = x;
    x->right = y;
    y->parent = x;
}
// Fix Red-Black Tree
void fixInsert(struct Node *temp)
{
    struct Node *parentNode;
    struct Node *grandParent;
    struct Node *uncle;
    while(temp != root && temp->parent->color == RED)
    {
        parentNode = temp->parent;
        grandParent = parentNode->parent;
        // Parent is left child
        if(parentNode == grandParent->left)
        {
            uncle = grandParent->right;
            // Case 1: Uncle is RED
            if(uncle != NULL && uncle->color == RED)
            {
                parentNode->color = BLACK;
                uncle->color = BLACK;
                grandParent->color = RED;
                temp = grandParent;
            }
            else
            {
                // Case 2
                if(temp == parentNode->right)
                {
                    temp = parentNode;
                    leftRotate(temp);
                }
                // Case 3
                parentNode->color = BLACK;
                grandParent->color = RED;
                rightRotate(grandParent);
            }
        }
        else
        {
            uncle = grandParent->left;
            if(uncle != NULL && uncle->color == RED)
            {
                parentNode->color = BLACK;
                uncle->color = BLACK;
                grandParent->color = RED;
                temp = grandParent;
            }
            else
            {
                if(temp == parentNode->left)
                {
                    temp = parentNode;
                    rightRotate(temp);
                }
                parentNode->color = BLACK;
                grandParent->color = RED;
                leftRotate(grandParent);
            }
        }
    }
    root->color = BLACK;
}
// Insert node
void insert(int data)
{
    struct Node *newNode;
    struct Node *temp;
    struct Node *parentNode;
    newNode = createNode(data);
    temp = root;
    parentNode = NULL;
    while(temp != NULL)
    {
        parentNode = temp;
        if(data < temp->data)
            temp = temp->left;
        else
            temp = temp->right;
    }
    newNode->parent = parentNode;
    if(parentNode == NULL)
        root = newNode;
    else if(data < parentNode->data)
        parentNode->left = newNode;
    else
        parentNode->right = newNode;
    fixInsert(newNode);
}
// Inorder traversal
void inorder(struct Node *root)
{
    if(root != NULL)
    {
        inorder(root->left);
        if(root->color == RED)
            printf("%d(R) ", root->data);
        else
            printf("%d(B) ", root->data);
        inorder(root->right);
    }
}
int main()
{
    insert(10);
    insert(20);
    insert(30);
    insert(15);
    insert(25);
    printf("Inorder Traversal:\\n");
    inorder(root);
    return 0;
}
`,
    algorithm: `Algorithm: Red-Black Tree - Insertion and Balancing

Step 1: Define Node with data, color (RED/BLACK), left/right pointers, and parent
Step 2: Implement rotation functions:
  - leftRotate() rotates left around specified node
  - rightRotate() rotates right around specified node
  - Update parent pointers accordingly
Step 3: In insert() function:
  - Find correct position using BST search
  - Create new RED node at leaf position
  - Link to parent node
  - Call fixInsert() to fix Red-Black properties
Step 4: In fixInsert() function:
  - While temp is not root and parent is RED:
    - Identify uncle node (parent's sibling)
    - If uncle is RED: recolor parent, uncle, and grandparent
    - If uncle is BLACK: perform rotations and recoloring:
      - LL case: right rotation
      - RR case: left rotation
      - LR case: left then right rotation
      - RL case: right then left rotation
    - Continue with grandparent as new temp
  - Ensure root is always BLACK
Step 5: Display using in-order traversal with node colors

Time Complexity: O(log n) for insertion and fixing
Space Complexity: O(log n) for recursion in traversal
`
  },
  {
    id: 9,
    question: `Develop a menu-driven program for Red-Black Tree operations such as insertion, searching, and traversal.`,
    code: `#include <stdio.h>
#include <stdlib.h>
#define RED 1
#define BLACK 0
struct Node
{
    int data;
    int color;
    struct Node *left;
    struct Node *right;
    struct Node *parent;
};
struct Node *root = NULL;
// Create node
struct Node* createNode(int data)
{
    struct Node *newNode;
    newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->color = RED;
    newNode->left = NULL;
    newNode->right = NULL;
    newNode->parent = NULL;
    return newNode;
}
// Left Rotation
void leftRotate(struct Node *x)
{
    struct Node *y;
    y = x->right;
    x->right = y->left;
    if(y->left != NULL)
        y->left->parent = x;
    y->parent = x->parent;
    if(x->parent == NULL)
        root = y;
    else if(x == x->parent->left)
        x->parent->left = y;
    else
        x->parent->right = y;
    y->left = x;
    x->parent = y;
}
// Right Rotation
void rightRotate(struct Node *y)
{
    struct Node *x;
    x = y->left;
    y->left = x->right;
    if(x->right != NULL)
        x->right->parent = y;
    x->parent = y->parent;
    if(y->parent == NULL)
        root = x;
    else if(y == y->parent->left)
        y->parent->left = x;
    else
        y->parent->right = x;
    x->right = y;
    y->parent = x;
}
// Fix tree after insertion
void fixInsert(struct Node *temp)
{
    struct Node *parentNode;
    struct Node *grandParent;
    struct Node *uncle;
    while(temp != root && temp->parent->color == RED)
    {
        parentNode = temp->parent;
        grandParent = parentNode->parent;
        if(parentNode == grandParent->left)
        {
            uncle = grandParent->right;
            if(uncle != NULL && uncle->color == RED)
            {
                parentNode->color = BLACK;
                uncle->color = BLACK;
                grandParent->color = RED;
                temp = grandParent;
            }
            else
            {
                if(temp == parentNode->right)
                {
                    temp = parentNode;
                    leftRotate(temp);
                }
                parentNode->color = BLACK;
                grandParent->color = RED;
                rightRotate(grandParent);
            }
        }
        else
        {
            uncle = grandParent->left;
            if(uncle != NULL && uncle->color == RED)
            {
                parentNode->color = BLACK;
                uncle->color = BLACK;
                grandParent->color = RED;
                temp = grandParent;
            }
            else
            {
                if(temp == parentNode->left)
                {
                    temp = parentNode;
                    rightRotate(temp);
                }
                parentNode->color = BLACK;
                grandParent->color = RED;
                leftRotate(grandParent);
            }
        }
    }
    root->color = BLACK;
}
// Insert node
void insert(int data)
{
    struct Node *newNode;
    struct Node *temp;
    struct Node *parentNode;
    newNode = createNode(data);
    temp = root;
    parentNode = NULL;
    while(temp != NULL)
    {
        parentNode = temp;
        if(data < temp->data)
            temp = temp->left;
        else
            temp = temp->right;
    }
    newNode->parent = parentNode;
    if(parentNode == NULL)
        root = newNode;
    else if(data < parentNode->data)
        parentNode->left = newNode;
    else
        parentNode->right = newNode;
    fixInsert(newNode);
}
// Search node
void search(struct Node *root, int key)
{
    while(root != NULL)
    {
        if(key == root->data)
        {
            printf("Element Found\\n");
            return;
        }
        if(key < root->data)
            root = root->left;
        else
            root = root->right;
    }
    printf("Element Not Found\\n");
}
// Inorder traversal
void inorder(struct Node *root)
{
    if(root != NULL)
    {
        inorder(root->left);
        if(root->color == RED)
            printf("%d(R) ", root->data);
        else
            printf("%d(B) ", root->data);
        inorder(root->right);
    }
}
int main()
{
    int choice, data;
    while(1)
    {
        printf("\\n1.Insert");
        printf("\\n2.Search");
        printf("\\n3.Display");
        printf("\\n4.Exit");
        printf("\\nEnter Choice: ");
        scanf("%d", &choice);
        switch(choice)
        {
            case 1:
                printf("Enter Element: ");
                scanf("%d", &data);
                insert(data);
                break;
            case 2:
                printf("Enter Element to Search: ");
                scanf("%d", &data);
                search(root, data);
                break;
            case 3:
                printf("Inorder Traversal:\\n");
                inorder(root);
                printf("\\n");
                break;
            case 4:
                exit(0);
            default:
                printf("Invalid Choice");
        }
    }
    return 0;
}
`,
    algorithm: `Algorithm: Red-Black Tree - Menu-Driven Operations

Step 1: Define global root pointer and Node structure with color, parent pointers
Step 2: Implement helper functions:
  - createNode() creates RED node
  - leftRotate() and rightRotate() for tree restructuring
  - fixInsert() maintains RB properties after insertion
Step 3: Implement insert(data):
  - Find insertion position using standard BST search
  - Create new RED node and link to parent
  - Call fixInsert() to restore red-black properties
  - Recoloring and rotations ensure no two RED nodes are adjacent
Step 4: Implement search(root, key):
  - Traverse tree using BST search logic
  - Compare key with current node's data
  - Go left if key is smaller, right if larger
  - Return success or failure
Step 5: Implement inorder() traversal:
  - Recursively traverse left subtree, print node with color, right subtree
Step 6: Main menu loop:
  - Option 1: Insert element with input
  - Option 2: Search element with input
  - Option 3: Display tree in inorder with colors
  - Option 4: Exit program

Time Complexity: O(log n) for insertion, search, and display
Space Complexity: O(n) for storing n nodes in tree
`
  },
  {
    id: 10,
    question: `Implement a self-balancing Red-Black Binary Search Tree and demonstrate insertion with balancing operations.`,
    code: `#include <stdio.h>
#include <stdlib.h>
#define RED 1
#define BLACK 0
struct Node
{
    int data;
    int color;
    struct Node *left;
    struct Node *right;
    struct Node *parent;
};
struct Node *root = NULL;
// Create node
struct Node* createNode(int data)
{
    struct Node *newNode;
    newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->color = RED;
    newNode->left = NULL;
    newNode->right = NULL;
    newNode->parent = NULL;
    return newNode;
}
// Left Rotation
void leftRotate(struct Node *x)
{
    struct Node *y;
    y = x->right;
    x->right = y->left;
    if(y->left != NULL)
        y->left->parent = x;
    y->parent = x->parent;
    if(x->parent == NULL)
        root = y;
    else if(x == x->parent->left)
        x->parent->left = y;
    else
        x->parent->right = y;
    y->left = x;
    x->parent = y;
}
// Right Rotation
void rightRotate(struct Node *y)
{
    struct Node *x;
    x = y->left;
    y->left = x->right;
    if(x->right != NULL)
        x->right->parent = y;
    x->parent = y->parent;
    if(y->parent == NULL)
        root = x;
    else if(y == y->parent->left)
        y->parent->left = x;
    else
        y->parent->right = x;
    x->right = y;
    y->parent = x;
}
// Fix tree after insertion
void fixInsert(struct Node *temp)
{
    struct Node *parentNode;
    struct Node *grandParent;
    struct Node *uncle;
    while(temp != root && temp->parent->color == RED)
    {
        parentNode = temp->parent;
        grandParent = parentNode->parent;
        // Parent is left child
        if(parentNode == grandParent->left)
        {
            uncle = grandParent->right;
            // Recoloring
            if(uncle != NULL && uncle->color == RED)
            {
                parentNode->color = BLACK;
                uncle->color = BLACK;
                grandParent->color = RED;
                temp = grandParent;
            }
            else
            {
                // Left Rotation
                if(temp == parentNode->right)
                {
                    temp = parentNode;
                    leftRotate(temp);
                }
                // Right Rotation
                parentNode->color = BLACK;
                grandParent->color = RED;
                rightRotate(grandParent);
            }
        }
        else
        {
            uncle = grandParent->left;
            if(uncle != NULL && uncle->color == RED)
            {
                parentNode->color = BLACK;
                uncle->color = BLACK;
                grandParent->color = RED;
                temp = grandParent;
            }
            else
            {
                if(temp == parentNode->left)
                {
                    temp = parentNode;
                    rightRotate(temp);
                }
                parentNode->color = BLACK;
                grandParent->color = RED;
                leftRotate(grandParent);
            }
        }
    }
    root->color = BLACK;
}
// Insert node
void insert(int data)
{
    struct Node *newNode;
    struct Node *temp;
    struct Node *parentNode;
    newNode = createNode(data);
    temp = root;
    parentNode = NULL;
    while(temp != NULL)
    {
        parentNode = temp;
        if(data < temp->data)
            temp = temp->left;
        else
            temp = temp->right;
    }
    newNode->parent = parentNode;
    if(parentNode == NULL)
        root = newNode;
    else if(data < parentNode->data)
        parentNode->left = newNode;
    else
        parentNode->right = newNode;
    // Balance the tree
    fixInsert(newNode);
}
// Inorder Traversal
void inorder(struct Node *root)
{
    if(root != NULL)
    {
        inorder(root->left);
        if(root->color == RED)
            printf("%d(R) ", root->data);
        else
            printf("%d(B) ", root->data);
        inorder(root->right);
    }
}
int main()
{
    insert(10);
    insert(20);
    insert(30);
    insert(15);
    insert(25);
    printf("Inorder Traversal:\\n");
    inorder(root);
    return 0;
}
`,
    algorithm: `Algorithm: Red-Black Tree - Self-Balancing Insertion

Step 1: Node structure includes: data, color (RED/BLACK), left/right children, parent pointer
Step 2: Create balanced insertions:
  - Insert new node as RED in BST position
  - Update parent pointers for tree structure
  - Call fixInsert() to maintain RB properties
Step 3: fixInsert() balancing procedure:
  - While inserted node is not root and parent is RED:
    - Locate uncle node (parent's sibling)
    - Case 1 (Uncle RED): Recolor parent, uncle, grandparent; move up to grandparent
    - Case 2 & 3 (Uncle BLACK): Perform rotations and recoloring:
      - If node is right child of left parent: left rotate parent
      - Make parent BLACK, grandparent RED, right rotate grandparent
      - Mirror cases for right parent
    - Continue fixing from grandparent position
  - Ensure root is always BLACK
Step 4: Properties maintained:
  - Root is BLACK
  - Leaves are BLACK
  - No RED node has RED child
  - All paths have equal BLACK count
Step 5: Display tree in-order showing node colors

Time Complexity: O(log n) for insertion with automatic balancing
Space Complexity: O(log n) for recursion in traversal, O(n) for tree storage
`
  },
  {
    id: 11,
    question: `Develop a menu-driven program for B-Tree operations such as insertion, searching, and traversal.`,
    code: `#include <stdio.h>
#include <stdlib.h>
#define MAX 3
#define MIN 2
struct Node
{
    int data[MAX + 1];
    struct Node *child[MAX + 1];
    int count;
};
struct Node *root = NULL;
// Create node
struct Node* createNode(int data, struct Node *child)
{
    struct Node *newNode;
    int i;
    newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data[1] = data;
    newNode->count = 1;
    for(i = 0; i <= MAX; i++)
        newNode->child[i] = NULL;
    newNode->child[0] = root;
    newNode->child[1] = child;
    return newNode;
}
// Insert value into node
void insertNode(int data, int pos,
                struct Node *node,
                struct Node *child)
{
    int j;
    for(j = node->count; j > pos; j--)
    {
        node->data[j + 1] = node->data[j];
        node->child[j + 1] = node->child[j];
    }
    node->data[j + 1] = data;
    node->child[j + 1] = child;
    node->count++;
}
// Split node
void splitNode(int data, int *pval,
               int pos, struct Node *node,
               struct Node *child,
               struct Node **newNode)
{
    int median, j;
    if(pos > MIN)
        median = MIN + 1;
    else
        median = MIN;
    *newNode = (struct Node*)malloc(sizeof(struct Node));
    j = median + 1;
    while(j <= MAX)
    {
        (*newNode)->data[j - median] = node->data[j];
        (*newNode)->child[j - median] = node->child[j];
        j++;
    }
    node->count = median;
    (*newNode)->count = MAX - median;
    if(pos <= MIN)
        insertNode(data, pos, node, child);
    else
        insertNode(data, pos - median,
                   *newNode, child);
    *pval = node->data[node->count];
    (*newNode)->child[0] =
        node->child[node->count];
    node->count--;
}
// Set value in node
int setValue(int data, int *pval,
             struct Node *node,
             struct Node **child)
{
    int pos;
    if(node == NULL)
    {
        *pval = data;
        *child = NULL;
        return 1;
    }
    if(data < node->data[1])
        pos = 0;
    else
    {
        for(pos = node->count;
            data < node->data[pos] && pos > 1;
            pos--);
        if(data == node->data[pos])
        {
            printf("Duplicate Value\\n");
            return 0;
        }
    }
    if(setValue(data, pval,
                node->child[pos], child))
    {
        if(node->count < MAX)
        {
            insertNode(*pval, pos,
                       node, *child);
        }
        else
        {
            struct Node *newNode;
            splitNode(*pval, pval, pos,
                      node, *child, &newNode);
            *child = newNode;
            return 1;
        }
    }
    return 0;
}
// Insert function
void insert(int data)
{
    int flag, val;
    struct Node *child;
    flag = setValue(data, &val,
                    root, &child);
    if(flag)
        root = createNode(val, child);
}
// Search element
void search(struct Node *root, int key)
{
    int i;
    if(root == NULL)
    {
        printf("Element Not Found\\n");
        return;
    }
    for(i = 1; i <= root->count; i++)
    {
        if(key == root->data[i])
        {
            printf("Element Found\\n");
            return;
        }
        if(key < root->data[i])
            break;
    }
    search(root->child[i - 1], key);
}
// Traversal
void inorder(struct Node *root)
{
    int i;
    if(root != NULL)
    {
        for(i = 0; i < root->count; i++)
        {
            inorder(root->child[i]);
            printf("%d ", root->data[i + 1]);
        }
        inorder(root->child[i]);
    }
}
int main()
{
    int choice, data;
    while(1)
    {
        printf("\\n1.Insert");
        printf("\\n2.Search");
        printf("\\n3.Display");
        printf("\\n4.Exit");
        printf("\\nEnter Choice: ");
        scanf("%d", &choice);
        switch(choice)
        {
            case 1:
                printf("Enter Element: ");
                scanf("%d", &data);
                insert(data);
                break;
            case 2:
                printf("Enter Element to Search: ");
                scanf("%d", &data);
                search(root, data);
                break;
            case 3:
                printf("Traversal:\\n");
                inorder(root);
                printf("\\n");
                break;
            case 4:
                exit(0);
            default:
                printf("Invalid Choice");
        }
    }
    return 0;
}
`,
    algorithm: `Algorithm: B-Tree - Menu-Driven Operations (Order 3)

Step 1: Define Node structure:
  - data[] array of size MAX+1 to store keys
  - child[] array of pointers to children
  - count to track number of keys in node
Step 2: Implement helper functions:
  - insertNode() inserts key at position pos with child pointer
  - splitNode() divides a full node when MAX keys exceeded
  - setValue() recursively finds position and inserts key
Step 3: Insert operation:
  - Call setValue() starting from root
  - If node is NULL, return key and NULL child
  - Find position: if key < first key, pos=0; else binary search
  - Recursively insert in child
  - If returning child, insert key at found position
  - If node becomes full (count > MAX), call splitNode()
  - splitNode() moves median key to parent, splits remaining keys to new node
  - If root is modified, create new root
Step 4: Search operation:
  - Start from root
  - Loop through keys to find insertion position
  - If key found, return success
  - Recursively search in appropriate child
  - If reach NULL, element not found
Step 5: Traversal (in-order):
  - For each child pointer: traverse child
  - Print current key
  - Continue with next child-key pair
Step 6: Menu interface:
  - Option 1: Insert with validation
  - Option 2: Search with feedback
  - Option 3: Display all elements
  - Option 4: Exit program

Time Complexity: O(log n) for insertion, search, and traversal
Space Complexity: O(n) for storing n keys in tree
`
  },
  {
    id: 12,
    question: `Implement a B-Tree of order m and display its structure after inserting elements.`,
    code: `#include <stdio.h>
#include <stdlib.h>
#define MAX 3
#define MIN 2
struct Node
{
    int data[MAX + 1];
    struct Node *child[MAX + 1];
    int count;
};
struct Node *root = NULL;
// Create node
struct Node* createNode(int data, struct Node *child)
{
    struct Node *newNode;
    int i;
    newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data[1] = data;
    newNode->count = 1;
    for(i = 0; i <= MAX; i++)
        newNode->child[i] = NULL;
    newNode->child[0] = root;
    newNode->child[1] = child;
    return newNode;
}
// Insert into node
void insertNode(int data, int pos,
                struct Node *node,
                struct Node *child)
{
    int j;
    for(j = node->count; j > pos; j--)
    {
        node->data[j + 1] = node->data[j];
        node->child[j + 1] = node->child[j];
    }
    node->data[j + 1] = data;
    node->child[j + 1] = child;
    node->count++;
}
// Split node
void splitNode(int data, int *pval,
               int pos, struct Node *node,
               struct Node *child,
               struct Node **newNode)
{
    int median, j;
    if(pos > MIN)
        median = MIN + 1;
    else
        median = MIN;
    *newNode = (struct Node*)malloc(sizeof(struct Node));
    j = median + 1;
    while(j <= MAX)
    {
        (*newNode)->data[j - median] =
            node->data[j];
        (*newNode)->child[j - median] =
            node->child[j];
        j++;
    }
    node->count = median;
    (*newNode)->count = MAX - median;
    if(pos <= MIN)
        insertNode(data, pos, node, child);
    else
        insertNode(data, pos - median,
                   *newNode, child);
    *pval = node->data[node->count];
    (*newNode)->child[0] =
        node->child[node->count];
    node->count--;
}
// Set value
int setValue(int data, int *pval,
             struct Node *node,
             struct Node **child)
{
    int pos;
    if(node == NULL)
    {
        *pval = data;
        *child = NULL;
        return 1;
    }
    if(data < node->data[1])
        pos = 0;
    else
    {
        for(pos = node->count;
            data < node->data[pos] && pos > 1;
            pos--);
        if(data == node->data[pos])
        {
            printf("Duplicate Value\\n");
            return 0;
        }
    }
    if(setValue(data, pval,
                node->child[pos], child))
    {
        if(node->count < MAX)
        {
            insertNode(*pval, pos,
                       node, *child);
        }
        else
        {
            struct Node *newNode;
            splitNode(*pval, pval, pos,
                      node, *child, &newNode);
            *child = newNode;
            return 1;
        }
    }
    return 0;
}
// Insert function
void insert(int data)
{
    int flag, val;
    struct Node *child;
    flag = setValue(data, &val,
                    root, &child);
    if(flag)
        root = createNode(val, child);
}
// Display tree structure
void display(struct Node *root, int level)
{
    int i;
    if(root != NULL)
    {
        printf("\\nLevel %d : ", level);
        for(i = 1; i <= root->count; i++)
            printf("%d ", root->data[i]);
        for(i = 0; i <= root->count; i++)
            display(root->child[i], level + 1);
    }
}
int main()
{
    insert(10);
    insert(20);
    insert(30);
    insert(40);
    insert(50);
    printf("B-Tree Structure:\\n");
    display(root, 0);
    return 0;
}
`,
    algorithm: `Algorithm: B-Tree - Structure Display After Insertion (Order 3)

Step 1: Node structure with:
  - data[] array for storing keys
  - child[] array for child pointers
  - count for number of keys
Step 2: Insertion process:
  - Call setValue() recursively to find insertion position
  - At leaf, if key doesn't exist, return key and NULL child
  - Propagate back up tree
  - If node exceeds MAX keys, split the node:
    - Find median (MIN+1)
    - Create new node for keys after median
    - Move median key to parent
    - Continue with parent insertion
  - If root splits, create new root with median key
Step 3: Display function:
  - Recursive level-order display of tree structure
  - Print level indicator and all keys at current node
  - Recursively display all children with incremented level
  - Shows hierarchical structure of B-Tree
Step 4: Sequential insertion:
  - Insert elements: 10, 20, 30, 40, 50
  - Tree splits nodes as needed to maintain B-Tree properties
Step 5: Display final tree showing all levels and node contents

Time Complexity: O(n * log n) for inserting n elements
Space Complexity: O(n) for storing keys in tree structure
`
  },
  {
    id: 13,
    question: `Write a program to create a B-Tree and display the elements using in-order traversal.`,
    code: `#include <stdio.h>
#include <stdlib.h>
#define MAX 3
#define MIN 2
struct Node
{
    int data[MAX + 1];
    struct Node *child[MAX + 1];
    int count;
};
struct Node *root = NULL;
// Create node
struct Node* createNode(int data, struct Node *child)
{
    struct Node *newNode;
    int i;
    newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data[1] = data;
    newNode->count = 1;
    for(i = 0; i <= MAX; i++)
        newNode->child[i] = NULL;
    newNode->child[0] = root;
    newNode->child[1] = child;
    return newNode;
}
// Insert into node
void insertNode(int data, int pos,
                struct Node *node,
                struct Node *child)
{
    int j;
    for(j = node->count; j > pos; j--)
    {
        node->data[j + 1] = node->data[j];
        node->child[j + 1] = node->child[j];
    }
    node->data[j + 1] = data;
    node->child[j + 1] = child;
    node->count++;
}
// Split node
void splitNode(int data, int *pval,
               int pos, struct Node *node,
               struct Node *child,
               struct Node **newNode)
{
    int median, j;
    if(pos > MIN)
        median = MIN + 1;
    else
        median = MIN;
    *newNode = (struct Node*)malloc(sizeof(struct Node));
    j = median + 1;
    while(j <= MAX)
    {
        (*newNode)->data[j - median] =
            node->data[j];
        (*newNode)->child[j - median] =
            node->child[j];
        j++;
    }
    node->count = median;
    (*newNode)->count = MAX - median;
    if(pos <= MIN)
        insertNode(data, pos, node, child);
    else
        insertNode(data, pos - median,
                   *newNode, child);
    *pval = node->data[node->count];
    (*newNode)->child[0] =
        node->child[node->count];
    node->count--;
}
// Set value
int setValue(int data, int *pval,
             struct Node *node,
             struct Node **child)
{
    int pos;
    if(node == NULL)
    {
        *pval = data;
        *child = NULL;
        return 1;
    }
    if(data < node->data[1])
        pos = 0;
    else
    {
        for(pos = node->count;
            data < node->data[pos] && pos > 1;
            pos--);
        if(data == node->data[pos])
        {
            printf("Duplicate Value\\n");
            return 0;
        }
    }
    if(setValue(data, pval,
                node->child[pos], child))
    {
        if(node->count < MAX)
        {
            insertNode(*pval, pos,
                       node, *child);
        }
        else
        {
            struct Node *newNode;
            splitNode(*pval, pval, pos,
                      node, *child, &newNode);
            *child = newNode;
            return 1;
        }
    }
    return 0;
}
// Insert function
void insert(int data)
{
    int flag, val;
    struct Node *child;
    flag = setValue(data, &val,
                    root, &child);
    if(flag)
        root = createNode(val, child);
}
// Inorder Traversal
void inorder(struct Node *root)
{
    int i;
    if(root != NULL)
    {
        for(i = 0; i < root->count; i++)
        {
            inorder(root->child[i]);
            printf("%d ", root->data[i + 1]);
        }
        inorder(root->child[i]);
    }
}
int main()
{
    insert(10);
    insert(20);
    insert(5);
    insert(30);
    insert(25);
    printf("Inorder Traversal:\\n");
    inorder(root);
    return 0;
}
`,
    algorithm: `Algorithm: B-Tree - Creation and In-order Traversal

Step 1: Node structure contains:
  - data[] array to hold keys (1-indexed)
  - child[] array of child pointers
  - count field for number of keys
Step 2: Insert elements with balancing:
  - Insert 10, 20, 5, 30, 25
  - Use setValue() to recursively place each element
  - Automatically split nodes when count exceeds MAX (3)
  - Maintain B-Tree properties during insertion
Step 3: In-order traversal algorithm:
  - For each node:
    - Recursively traverse child[0]
    - Print data[1] (first key)
    - Recursively traverse child[1]
    - Print data[2] (second key)
    - Recursively traverse child[2]
    - Print data[3] (third key)
    - Recursively traverse child[3]
  - Base case: NULL node, return
  - Result: all elements printed in ascending sorted order
Step 4: Properties maintained:
  - All keys in subtree child[i] are between data[i] and data[i+1]
  - All leaf nodes at same level
  - Non-root nodes have at least MIN keys
Step 5: Display traversal output

Time Complexity: O(n) for in-order traversal of n elements
Space Complexity: O(log n) for recursion stack
`
  },
  {
    id: 14,
    question: `Implement insertion and searching operations in a B-Tree using user input.`,
    code: `#include <stdio.h>
#include <stdlib.h>
#define MAX 3
#define MIN 2
struct Node
{
    int data[MAX + 1];
    struct Node *child[MAX + 1];
    int count;
};
struct Node *root = NULL;
// Create node
struct Node* createNode(int data, struct Node *child)
{
    struct Node *newNode;
    int i;
    newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data[1] = data;
    newNode->count = 1;
    for(i = 0; i <= MAX; i++)
        newNode->child[i] = NULL;
    newNode->child[0] = root;
    newNode->child[1] = child;
    return newNode;
}
// Insert into node
void insertNode(int data, int pos,
                struct Node *node,
                struct Node *child)
{
    int j;
    for(j = node->count; j > pos; j--)
    {
        node->data[j + 1] = node->data[j];
        node->child[j + 1] = node->child[j];
    }
    node->data[j + 1] = data;
    node->child[j + 1] = child;
    node->count++;
}
// Split node
void splitNode(int data, int *pval,
               int pos, struct Node *node,
               struct Node *child,
               struct Node **newNode)
{
    int median, j;
    if(pos > MIN)
        median = MIN + 1;
    else
        median = MIN;
    *newNode = (struct Node*)malloc(sizeof(struct Node));
    j = median + 1;
    while(j <= MAX)
    {
        (*newNode)->data[j - median] =
            node->data[j];
        (*newNode)->child[j - median] =
            node->child[j];
        j++;
    }
    node->count = median;
    (*newNode)->count = MAX - median;
    if(pos <= MIN)
        insertNode(data, pos, node, child);
    else
        insertNode(data, pos - median,
                   *newNode, child);
    *pval = node->data[node->count];
    (*newNode)->child[0] =
        node->child[node->count];
    node->count--;
}
// Set value
int setValue(int data, int *pval,
             struct Node *node,
             struct Node **child)
{
    int pos;
    if(node == NULL)
    {
        *pval = data;
        *child = NULL;
        return 1;
    }
    if(data < node->data[1])
        pos = 0;
    else
    {
        for(pos = node->count;
            data < node->data[pos] && pos > 1;
            pos--);
        if(data == node->data[pos])
        {
            printf("Duplicate Value\\n");
            return 0;
        }
    }
    if(setValue(data, pval,
                node->child[pos], child))
    {
        if(node->count < MAX)
        {
            insertNode(*pval, pos,
                       node, *child);
        }
        else
        {
            struct Node *newNode;
            splitNode(*pval, pval, pos,
                      node, *child, &newNode);
            *child = newNode;
            return 1;
        }
    }
    return 0;
}
// Insert function
void insert(int data)
{
    int flag, val;
    struct Node *child;
    flag = setValue(data, &val,
                    root, &child);
    if(flag)
        root = createNode(val, child);
}
// Search function
void search(struct Node *root, int key)
{
    int i;
    if(root == NULL)
    {
        printf("Element Not Found\\n");
        return;
    }
    for(i = 1; i <= root->count; i++)
    {
        if(key == root->data[i])
        {
            printf("Element Found\\n");
            return;
        }
        if(key < root->data[i])
            break;
    }
    search(root->child[i - 1], key);
}
int main()
{
    int n, i, data, key;
    printf("Enter Number of Elements: ");
    scanf("%d", &n);
    printf("Enter Elements:\\n");
    for(i = 0; i < n; i++)
    {
        scanf("%d", &data);
        insert(data);
    }
    printf("Enter Element to Search: ");
    scanf("%d", &key);
    search(root, key);
    return 0;
}
`,
    algorithm: `Algorithm: B-Tree - User-Driven Insertion and Search

Step 1: Define B-Tree Node structure with:
  - data[] for storing keys
  - child[] for child node pointers
  - count for number of keys
Step 2: Insert function with user input:
  - Read n (number of elements)
  - For each element:
    - Read data value
    - Call insert() to place in B-Tree
    - If node exceeds MAX keys, splitNode() divides it
    - Propagate changes up the tree
Step 3: insert() operation:
  - Call setValue() from root recursively
  - setValue() finds correct position based on key comparison
  - If node is full, perform split before insertion
  - Maintain B-Tree invariants:
    - Keys in sorted order within node
    - child[i] contains keys between data[i] and data[i+1]
    - Min MAX/2 - 1 keys in non-root nodes
Step 4: Search function:
  - Read key to search
  - Starting from root, recursively search:
    - Loop through keys in current node
    - If key found, print "Element Found"
    - If key < data[i], search child[i-1]
    - If no more children and not found, print "Element Not Found"
  - Time: O(log n) since tree is balanced
Step 5: Both operations handle duplicates and edge cases

Time Complexity: O(log n) for both insertion and search
Space Complexity: O(n) for tree nodes
`
  },
  {
    id: 15,
    question: `Develop a menu-driven program for B+ Tree operations such as insertion and searching.`,
    code: `#include <stdio.h>
#include <stdlib.h>
#define MAX 3
struct Node
{
    int data[MAX];
    struct Node *child[MAX + 1];
    int count;
    int leaf;
};
struct Node *root = NULL;
// Create node
struct Node* createNode(int leaf)
{
    struct Node *newNode;
    int i;
    newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->count = 0;
    newNode->leaf = leaf;
    for(i = 0; i <= MAX; i++)
        newNode->child[i] = NULL;
    return newNode;
}
// Simple insertion in leaf node
void insert(int data)
{
    int i;
    // Create root if tree empty
    if(root == NULL)
    {
        root = createNode(1);
        root->data[0] = data;
        root->count = 1;
        return;
    }
    // Simple insertion in root leaf
    i = root->count - 1;
    while(i >= 0 && data < root->data[i])
    {
        root->data[i + 1] = root->data[i];
        i--;
    }
    root->data[i + 1] = data;
    root->count++;
    // Overflow condition
    if(root->count > MAX)
    {
        printf("Node Overflow\\n");
        root->count = MAX;
    }
}
// Search element
void search(int key)
{
    int i;
    if(root == NULL)
    {
        printf("Tree Empty\\n");
        return;
    }
    for(i = 0; i < root->count; i++)
    {
        if(root->data[i] == key)
        {
            printf("Element Found\\n");
            return;
        }
    }
    printf("Element Not Found\\n");
}
// Display tree
void display()
{
    int i;
    if(root == NULL)
    {
        printf("Tree Empty\\n");
        return;
    }
    printf("B+ Tree Elements:\\n");
    for(i = 0; i < root->count; i++)
    {
        printf("%d ", root->data[i]);
    }
    printf("\\n");
}
int main()
{
    int choice, data;
    while(1)
    {
        printf("\\n1.Insert");
        printf("\\n2.Search");
        printf("\\n3.Display");
        printf("\\n4.Exit");
        printf("\\nEnter Choice: ");
        scanf("%d", &choice);
        switch(choice)
        {
            case 1:
                printf("Enter Element: ");
                scanf("%d", &data);
                insert(data);
                break;
            case 2:
                printf("Enter Element to Search: ");
                scanf("%d", &data);
                search(data);
                break;
            case 3:
                display();
                break;
            case 4:
                exit(0);
            default:
                printf("Invalid Choice");
        }
    }
    return 0;
}
`,
    algorithm: `Algorithm: B+ Tree - Menu-Driven Insertion and Search

Step 1: Node structure with:
  - data[] array for storing keys (0-indexed)
  - child[] array for child pointers (not used in simple version)
  - count for number of keys
  - leaf flag to identify leaf nodes
Step 2: createNode() function:
  - Allocate memory for new node
  - Initialize count to 0
  - Set leaf flag (1 for leaf, 0 for internal)
  - Initialize all child pointers to NULL
Step 3: Insert operation:
  - If root is NULL, create root as leaf node
  - Otherwise, insert in sorted order:
    - Start from last position
    - Shift elements right if new data is smaller
    - Insert data at correct position
    - Increment count
  - Check for overflow: if count > MAX, print message
Step 4: Search operation:
  - If tree is empty, return "Tree Empty"
  - Loop through all data elements in root
  - If element found, print "Element Found"
  - If loop completes without finding, print "Element Not Found"
Step 5: Display operation:
  - If tree is empty, print message
  - Otherwise, print all elements in order
Step 6: Menu-driven interface:
  - Option 1: Insert element with input
  - Option 2: Search element with input and feedback
  - Option 3: Display all current elements
  - Option 4: Exit program

Time Complexity: O(n) for simple insertion and search in root
Space Complexity: O(n) for storing n keys
`
  },
  {
    id: 16,
    question: `Write a program to insert multiple keys into a B+ Tree and display the final tree.`,
    code: `#include <stdio.h>
#include <stdlib.h>
#define MAX 3
struct Node
{
    int data[MAX + 1];
    int count;
};
struct Node *root = NULL;
// Create node
struct Node* createNode()
{
    struct Node *newNode;
    newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->count = 0;
    return newNode;
}
// Insert element
void insert(int data)
{
    int i;
    // Create root node
    if(root == NULL)
    {
        root = createNode();
        root->data[0] = data;
        root->count = 1;
        return;
    }
    // Insert in sorted order
    i = root->count - 1;
    while(i >= 0 && data < root->data[i])
    {
        root->data[i + 1] = root->data[i];
        i--;
    }
    root->data[i + 1] = data;
    root->count++;
    // Overflow condition
    if(root->count > MAX)
    {
        printf("Node Overflow\\n");
        root->count = MAX;
    }
}
// Display tree
void display()
{
    int i;
    if(root == NULL)
    {
        printf("Tree Empty\\n");
        return;
    }
    printf("Final B+ Tree:\\n");
    for(i = 0; i < root->count; i++)
    {
        printf("%d ", root->data[i]);
    }
    printf("\\n");
}
int main()
{
    int n, i, data;
    printf("Enter Number of Keys: ");
    scanf("%d", &n);
    printf("Enter Keys:\\n");
    for(i = 0; i < n; i++)
    {
        scanf("%d", &data);
        insert(data);
    }
    display();
    return 0;
}       
`,
    algorithm: `Algorithm: B+ Tree - Multiple Insertions and Display

Step 1: Define simple Node structure with:
  - data[] array to store keys
  - count field for number of keys
Step 2: createNode() function:
  - Allocate memory for new node
  - Initialize count to 0
  - Return newly created node
Step 3: Main program flow:
  - Read n (number of keys to insert)
  - Read each key value
  - For each key, call insert()
Step 4: Insert operation:
  - If root is NULL, create root node as first leaf
  - Store first key with count = 1
  - For subsequent keys:
    - Start from last position (right to left)
    - Shift elements that are greater than new data
    - Insert new data at correct position
    - Increment count
  - Handle overflow: if count exceeds MAX, print warning
Step 5: Display function:
  - Check if tree is empty
  - If empty, print "Tree Empty"
  - If not empty, print all keys in sorted order
  - Print all keys from data array up to count
Step 6: Sequential insertion:
  - Insert keys maintaining sorted order
  - Final tree contains all keys in ascending sequence
  - Display shows final state of tree

Time Complexity: O(n²) for n insertions (each insertion O(n))
Space Complexity: O(n) for storing n keys in tree
`
  },
  {
    id: 17,
    question: `Design a menu-driven B+ Tree application supporting insertion, searching, and traversal.`,
    code: `#include <stdio.h>
#include <stdlib.h>
#define MAX 5
struct Node
{
    int data[MAX];
    int count;
};
struct Node *root = NULL;
// Create node
struct Node* createNode()
{
    struct Node *newNode;
    newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->count = 0;
    return newNode;
}
// Insert element
void insert(int data)
{
    int i;
    // Create root node
    if(root == NULL)
    {
        root = createNode();
        root->data[0] = data;
        root->count = 1;
        return;
    }
    // Insert in sorted order
    i = root->count - 1;
    while(i >= 0 && data < root->data[i])
    {
        root->data[i + 1] = root->data[i];
        i--;
    }
    root->data[i + 1] = data;
    root->count++;
    // Overflow condition
    if(root->count > MAX)
    {
        printf("Node Overflow\\n");
        root->count = MAX;
    }
}
// Search element
void search(int key)
{
    int i;
    if(root == NULL)
    {
        printf("Tree Empty\\n");
        return;
    }
    for(i = 0; i < root->count; i++)
    {
        if(root->data[i] == key)
        {
            printf("Element Found\\n");
            return;
        }
    }
    printf("Element Not Found\\n");
}
// Traversal
void traversal()
{
    int i;
    if(root == NULL)
    {
        printf("Tree Empty\\n");
        return;
    }
    printf("B+ Tree Traversal:\\n");
    for(i = 0; i < root->count; i++)
    {
        printf("%d ", root->data[i]);
    }
    printf("\\n");
}
int main()
{
    int choice, data;
    while(1)
    {
        printf("\\n1.Insert");
        printf("\\n2.Search");
        printf("\\n3.Traversal");
        printf("\\n4.Exit");
        printf("\\nEnter Choice: ");
        scanf("%d", &choice);
        switch(choice)
        {
            case 1:
                printf("Enter Element: ");
                scanf("%d", &data);
                insert(data);
                break;
            case 2:
                printf("Enter Element to Search: ");
                scanf("%d", &data);
                search(data);
                break;
            case 3:
                traversal();
                break;
            case 4:
                exit(0);
            default:
                printf("Invalid Choice");
        }
    }
    return 0;
}
`,
    algorithm: `Algorithm: B+ Tree - Complete Menu-Driven Application

Step 1: Node structure with:
  - data[] array of size MAX (5) for keys
  - count field for number of keys
  - Simple leaf node representation
Step 2: Helper functions:
  - createNode() allocates and initializes new node
Step 3: Insert operation:
  - If tree is empty, create root and insert first key
  - For existing tree, find correct position:
    - Start from rightmost position
    - Shift elements that are greater than new data
    - Insert at correct sorted position
    - Increment count
  - Check overflow: if count > MAX, print warning
Step 4: Search operation:
  - If tree is empty, print "Tree Empty"
  - Linear search through data array
  - If found, print "Element Found" and return
  - If not found after checking all, print "Element Not Found"
Step 5: Traversal operation:
  - If tree is empty, print message
  - Otherwise, print all elements in sorted order
  - Display traversal of B+ Tree structure
Step 6: Main menu interface:
  - Option 1: Insert with user input validation
  - Option 2: Search with feedback on existence
  - Option 3: Traverse and display all elements
  - Option 4: Exit program cleanly
Step 7: Continuous menu loop:
  - Repeat until user selects exit
  - Handle invalid input gracefully

Time Complexity: O(n) per operation (linear search/insertion in simple version)
Space Complexity: O(n) for storing n keys in tree
`
  },
  {
    id: 18,
    question: `To implement Heap Sort using Min Heap/Max Heap techniques.`,
    code: `#include <stdio.h>
// Heapify function
void heapify(int arr[], int n, int i)
{
    int largest;
    int left, right, temp;
    largest = i;
    left = 2 * i + 1;
    right = 2 * i + 2;
    // Find largest element
    if(left < n && arr[left] > arr[largest])
        largest = left;
    if(right < n && arr[right] > arr[largest])
        largest = right;
    // Swap and heapify again
    if(largest != i)
    {
        temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        heapify(arr, n, largest);
    }
}
// Heap Sort
void heapSort(int arr[], int n)
{
    int i, temp;
    // Build Max Heap
    for(i = n / 2 - 1; i >= 0; i--)
    {
        heapify(arr, n, i);
    }
    // Extract elements
    for(i = n - 1; i > 0; i--)
    {
        temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, i, 0);
    }
}
// Display array
void display(int arr[], int n)
{
    int i;
    for(i = 0; i < n; i++)
    {
        printf("%d ", arr[i]);
    }
}
int main()
{
    int arr[100];
    int n, i;
    printf("Enter Number of Elements: ");
    scanf("%d", &n);
    printf("Enter Elements:\\n");
    for(i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }
    heapSort(arr, n);
    printf("Sorted Array:\\n");
    display(arr, n);
    return 0;
}
`,
    algorithm: `Algorithm: Heap Sort using Max Heap

Step 1: Input array of n elements
Step 2: Build Max Heap:
  - Start from index n/2 - 1 (last non-leaf node)
  - Call heapify() for each node going backwards
  - This ensures parent >= both children (max heap property)
Step 3: Heapify function for node at index i:
  - Calculate left child index: 2*i + 1
  - Calculate right child index: 2*i + 2
  - Find largest among node, left child, right child
  - If largest is not current node:
    - Swap current node with largest
    - Recursively heapify subtree rooted at largest
Step 4: Extract elements from heap:
  - Swap root (maximum) with last element
  - Reduce heap size by 1
  - Heapify root to restore max heap property
  - Repeat until heap size is 1
Step 5: Result:
  - Last element (index 0) after swap is smallest
  - Repeated swaps place elements in ascending order
  - Final array is sorted in ascending order
Step 6: Display sorted array

Time Complexity: O(n log n)
  - Building heap: O(n)
  - Extracting n elements: O(n log n)
Space Complexity: O(1) - in-place sorting
`
  },
  {
    id: 19,
    question: `Develop a program to manage patients in a hospital using a Priority Queue.`,
    code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX 5
struct Patient
{
    char name[20];
    int priority;
};
struct Patient pq[MAX];
int rear = -1;
// Insert patient
void insert()
{
    int i, j;
    struct Patient temp;
    if(rear == MAX - 1)
    {
        printf("Queue Full\\n");
        return;
    }
    rear++;
    printf("Enter Patient Name: ");
    scanf("%s", pq[rear].name);
    printf("Enter Priority: ");
    scanf("%d", &pq[rear].priority);
    // Sort according to priority
    for(i = 0; i <= rear; i++)
    {
        for(j = i + 1; j <= rear; j++)
        {
            if(pq[i].priority < pq[j].priority)
            {
                temp = pq[i];
                pq[i] = pq[j];
                pq[j] = temp;
            }
        }
    }
    printf("Patient Added\\n");
}
// Delete patient
void deletePatient()
{
    int i;
    if(rear == -1)
    {
        printf("Queue Empty\\n");
        return;
    }
    printf("Patient Served: %s\\n", pq[0].name);
    for(i = 0; i < rear; i++)
    {
        pq[i] = pq[i + 1];
    }
    rear--;
}
// Display patients
void display()
{
    int i;
    if(rear == -1)
    {
        printf("Queue Empty\\n");
        return;
    }
    printf("\\nPatient Queue:\\n");
    for(i = 0; i <= rear; i++)
    {
        printf("%s - Priority %d\\n",
               pq[i].name,
               pq[i].priority);
    }
}
int main()
{
    int choice;
    while(1)
    {
        printf("\\n1.Insert Patient");
        printf("\\n2.Serve Patient");
        printf("\\n3.Display");
        printf("\\n4.Exit");
        printf("\\nEnter Choice: ");
        scanf("%d", &choice);
        switch(choice)
        {
            case 1:
                insert();
                break;
            case 2:
                deletePatient();
                break;
            case 3:
                display();
                break;
            case 4:
                exit(0);
            default:
                printf("Invalid Choice");
        }
    }
    return 0;
}
`,
    algorithm: `Algorithm: Priority Queue - Hospital Patient Management

Step 1: Structure for Patient with name and priority fields
Step 2: Array-based priority queue:
  - pq[] array of size MAX (5 patients)
  - rear pointer to track last patient (-1 when empty)
Step 3: Insert Patient operation:
  - Check if queue is full (rear == MAX - 1)
  - If full, print "Queue Full" and return
  - Increment rear
  - Read patient name and priority
  - Sort entire queue by priority (descending):
    - Use bubble sort on priority field
    - Higher priority comes first
    - Swap patients if needed
  - Print "Patient Added"
Step 4: Delete/Serve Patient operation:
  - Check if queue is empty (rear == -1)
  - If empty, print "Queue Empty" and return
  - Print name of first patient (highest priority)
  - Shift all remaining patients left by 1 position
  - Decrement rear
Step 5: Display operation:
  - Check if queue is empty
  - If empty, print message
  - Otherwise, display all patients with priorities:
    - Highest priority first (sorted order)
    - Show name and priority for each
Step 6: Menu-driven interface:
  - Option 1: Insert new patient
  - Option 2: Serve (remove) highest priority patient
  - Option 3: Display all waiting patients
  - Option 4: Exit program

Time Complexity: O(n²) for insertion (bubble sort), O(n) for deletion
Space Complexity: O(n) for storing patient records
`
  },
  {
    id: 20,
    question: `To implement Dijkstra's Algorithm using a Priority Queue for finding the shortest path in a graph.`,
    code: `#include <stdio.h>
#define MAX 10
#define INF 9999
int main()
{
    int graph[MAX][MAX];
    int dist[MAX];
    int visited[MAX];
    int n, i, j, source;
    int min, u;
    printf("Enter Number of Vertices: ");
    scanf("%d", &n);
    printf("Enter Adjacency Matrix:\\n");
    for(i = 0; i < n; i++)
    {
        for(j = 0; j < n; j++)
        {
            scanf("%d", &graph[i][j]);
        }
    }
    printf("Enter Source Vertex: ");
    scanf("%d", &source);
    // Initialize arrays
    for(i = 0; i < n; i++)
    {
        dist[i] = INF;
        visited[i] = 0;
    }
    dist[source] = 0;
    // Dijkstra Algorithm
    for(i = 0; i < n - 1; i++)
    {
        min = INF;
        // Find minimum distance vertex
        for(j = 0; j < n; j++)
        {
            if(visited[j] == 0 && dist[j] < min)
            {
                min = dist[j];
                u = j;
            }
        }
        visited[u] = 1;
        // Update distances
        for(j = 0; j < n; j++)
        {
            if(visited[j] == 0 &&
               graph[u][j] != 0 &&
               dist[u] + graph[u][j] < dist[j])
            {
                dist[j] = dist[u] + graph[u][j];
            }
        }
    }
    printf("\\nShortest Distances:\\n");
    for(i = 0; i < n; i++)
    {
        printf("Vertex %d -> %d\\n", i, dist[i]);
    }
    return 0;
}
`,
    algorithm: `Algorithm: Dijkstra's Algorithm - Shortest Path using Priority Concept

Step 1: Input graph as adjacency matrix of n vertices
Step 2: Input source vertex
Step 3: Initialize arrays:
  - dist[i] = INF (infinity) for all vertices except source
  - dist[source] = 0
  - visited[i] = 0 for all vertices (not visited)
Step 4: For each of n-1 iterations:
  - Find unvisited vertex u with minimum distance:
    - Scan all vertices j where visited[j] == 0
    - Track minimum distance and corresponding vertex u
  - Mark u as visited: visited[u] = 1
  - Update distances of neighbors of u:
    - For each unvisited vertex j:
      - If edge exists (graph[u][j] != 0)
      - And dist[u] + graph[u][j] < dist[j]
      - Then update dist[j] = dist[u] + graph[u][j]
Step 5: After n-1 iterations, all shortest paths found:
  - dist[i] contains shortest distance from source to vertex i
  - INF indicates unreachable vertices
Step 6: Display shortest distances from source to all vertices

Time Complexity: O(n²) for adjacency matrix representation
Space Complexity: O(n²) for graph + O(n) for arrays
`
  },
  {
    id: 21,
    question: `To implement insertion, search, and prefix matching operations using Trie data structure.`,
    code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define SIZE 26
struct TrieNode
{
    struct TrieNode *child[SIZE];
    int endWord;
};
// Create node
struct TrieNode* createNode()
{
    struct TrieNode *newNode;
    int i;
    newNode = (struct TrieNode*)malloc(sizeof(struct TrieNode));
    for(i = 0; i < SIZE; i++)
    {
        newNode->child[i] = NULL;
    }
    newNode->endWord = 0;
    return newNode;
}
// Insert word
void insert(struct TrieNode *root, char word[])
{
    int i, index;
    struct TrieNode *temp;
    temp = root;
    for(i = 0; word[i] != '\\0'; i++)
    {
        index = word[i] - 'a';
        if(temp->child[index] == NULL)
        {
            temp->child[index] = createNode();
        }
        temp = temp->child[index];
    }
    temp->endWord = 1;
}
// Search word
void search(struct TrieNode *root, char word[])
{
    int i, index;
    struct TrieNode *temp;
    temp = root;
    for(i = 0; word[i] != '\\0'; i++)
    {
        index = word[i] - 'a';
        if(temp->child[index] == NULL)
        {
            printf("Word Not Found\\n");
            return;
        }
        temp = temp->child[index];
    }
    if(temp->endWord == 1)
        printf("Word Found\\n");
    else
        printf("Word Not Found\\n");
}
// Prefix matching
void prefixMatch(struct TrieNode *root, char prefix[])
{
    int i, index;
    struct TrieNode *temp;
    temp = root;
    for(i = 0; prefix[i] != '\\0'; i++)
    {
        index = prefix[i] - 'a';
        if(temp->child[index] == NULL)
        {
            printf("Prefix Not Found\\n");
            return;
        }
        temp = temp->child[index];
    }
    printf("Prefix Found\\n");
}
int main()
{
    struct TrieNode *root;
    root = createNode();
    insert(root, "cat");
    insert(root, "car");
    insert(root, "dog");
    printf("Search Operation:\\n");
    search(root, "cat");
    printf("\\nPrefix Matching:\\n");
    prefixMatch(root, "ca");
    return 0;
}
`,
    algorithm: `Algorithm: Trie Data Structure - Operations

Step 1: TrieNode structure:
  - child[] array of 26 pointers (for a-z)
  - endWord flag (1 if word ends here, 0 otherwise)
Step 2: createNode() function:
  - Allocate memory for new TrieNode
  - Initialize all 26 child pointers to NULL
  - Set endWord to 0
  - Return newly created node
Step 3: Insert operation:
  - Start from root node
  - For each character in word:
    - Calculate index: char - 'a' (0-25)
    - If child[index] is NULL, create new node
    - Move to child[index]
  - After processing all characters, set endWord = 1
  - Marks end of word for distinction from prefix
Step 4: Search operation:
  - Start from root node
  - For each character in word:
    - Calculate index: char - 'a'
    - If child[index] is NULL, word not found
    - Move to child[index]
  - After processing all characters:
    - If endWord == 1, word found
    - If endWord == 0, only prefix exists
Step 5: Prefix matching operation:
  - Similar to search but only checks prefix path
  - If all characters can be followed, prefix exists
  - Return success without checking endWord
Step 6: Example operations:
  - Insert: "cat", "car", "dog"
  - Search: "cat" (found), "car" (found)
  - Prefix: "ca" (found in both "cat" and "car")

Time Complexity: O(m) where m is word length for all operations
Space Complexity: O(n * m) where n words, m average length
`
  },
  {
    id: 22,
    question: `To implement a Suffix Tree for a given string and perform efficient pattern matching operations.`,
    code: `#include <stdio.h>
#include <string.h>
char suffix[100][100];
// Create suffixes
void createSuffixTree(char str[])
{
    int i, j, len;
    len = strlen(str);
    for(i = 0; i < len; i++)
    {
        j = 0;
        while(str[i + j] != '\\0')
        {
            suffix[i][j] = str[i + j];
            j++;
        }
        suffix[i][j] = '\\0';
    }
}
// Display suffixes
void displaySuffixes(char str[])
{
    int i, len;
    len = strlen(str);
    printf("\\nSuffixes:\\n");
    for(i = 0; i < len; i++)
    {
        printf("%s\\n", suffix[i]);
    }
}
// Pattern matching
void patternMatch(char str[], char pattern[])
{
    int i, len;
    len = strlen(str);
    for(i = 0; i < len; i++)
    {
        if(strstr(suffix[i], pattern) == suffix[i])
        {
            printf("Pattern Found at Position %d\\n", i);
            return;
        }
    }
    printf("Pattern Not Found\\n");
}
int main()
{
    char str[100];
    char pattern[100];
    printf("Enter String: ");
    scanf("%s", str);
    createSuffixTree(str);
    displaySuffixes(str);
    printf("\\nEnter Pattern: ");
    scanf("%s", pattern);
    patternMatch(str, pattern);
    return 0;
}
`,
    algorithm: `Algorithm: Suffix Tree - Pattern Matching

Step 1: Input a string
Step 2: Create all suffixes:
  - For each position i from 0 to len-1:
    - Extract substring starting from position i
    - Store in suffix[i]
  - Result: array of all possible suffixes
  - Example for "banana":
    - suffix[0] = "banana"
    - suffix[1] = "anana"
    - suffix[2] = "nana"
    - suffix[3] = "ana"
    - suffix[4] = "na"
    - suffix[5] = "a"
Step 3: Display all suffixes:
  - Print each suffix on new line
  - Shows all suffixes in order
Step 4: Pattern matching:
  - Input pattern to search
  - For each suffix i:
    - Use strstr() to check if pattern is prefix of suffix[i]
    - If strstr(suffix[i], pattern) == suffix[i]:
      - Pattern found at starting position i
      - Print position and return
  - If loop completes without match, pattern not found
Step 5: Key insight:
  - If pattern exists in string, it will be prefix of some suffix
  - Pattern at position p will be prefix of suffix starting at p
  - Example: pattern "ana" is prefix of suffix[3] = "ana"
Step 6: Display results

Time Complexity: O(n) for suffix creation + O(n * m) for pattern search
  where n = string length, m = pattern length
Space Complexity: O(n²) for storing all suffixes
`
  },
  {
    id: 23,
    question: `To design and implement a randomized data structure such as Skip List or Treap.`,
    code: `#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#define MAX_LEVEL 3
struct Node
{
    int data;
    struct Node *forward[MAX_LEVEL + 1];
};
struct Node *header;
// Create node
struct Node* createNode(int data)
{
    struct Node *newNode;
    int i;
    newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    for(i = 0; i <= MAX_LEVEL; i++)
    {
        newNode->forward[i] = NULL;
    }
    return newNode;
}
// Generate random level
int randomLevel()
{
    int level = 0;
    while(rand() % 2 && level < MAX_LEVEL)
    {
        level++;
    }
    return level;
}
// Insert element
void insert(int data)
{
    struct Node *update[MAX_LEVEL + 1];
    struct Node *temp;
    int i, level;
    temp = header;
    // Find position
    for(i = MAX_LEVEL; i >= 0; i--)
    {
        while(temp->forward[i] != NULL &&
              temp->forward[i]->data < data)
        {
            temp = temp->forward[i];
        }
        update[i] = temp;
    }
    level = randomLevel();
    temp = createNode(data);
    // Insert node
    for(i = 0; i <= level; i++)
    {
        temp->forward[i] = update[i]->forward[i];
        update[i]->forward[i] = temp;
    }
    printf("Element Inserted\\n");
}
// Search element
void search(int key)
{
    struct Node *temp;
    int i;
    temp = header;
    for(i = MAX_LEVEL; i >= 0; i--)
    {
        while(temp->forward[i] != NULL &&
              temp->forward[i]->data < key)
        {
            temp = temp->forward[i];
        }
    }
    temp = temp->forward[0];
    if(temp != NULL && temp->data == key)
        printf("Element Found\\n");
    else
        printf("Element Not Found\\n");
}
// Display Skip List
void display()
{
    struct Node *temp;
    temp = header->forward[0];
    printf("Skip List:\\n");
    while(temp != NULL)
    {
        printf("%d ", temp->data);
        temp = temp->forward[0];
    }
    printf("\\n");
}
int main()
{
    int choice, data;
    srand(time(NULL));
    header = createNode(-1);
    while(1)
    {
        printf("\\n1.Insert");
        printf("\\n2.Search");
        printf("\\n3.Display");
        printf("\\n4.Exit");
        printf("\\nEnter Choice: ");
        scanf("%d", &choice);
        switch(choice)
        {
            case 1:
                printf("Enter Element: ");
                scanf("%d", &data);
                insert(data);
                break;
            case 2:
                printf("Enter Element to Search: ");
                scanf("%d", &data);
                search(data);
                break;
            case 3:
                display();
                break;
            case 4:
                exit(0);
            default:
                printf("Invalid Choice");
        }
    }
    return 0;
}
`,
    algorithm: `Algorithm: Skip List - Randomized Data Structure

Step 1: Node structure:
  - data field to store value
  - forward[] array of MAX_LEVEL+1 pointers (different levels)
  - Each level is sorted linked list
Step 2: randomLevel() function:
  - Generates random level for new node
  - Coin flip: while random returns true and level < MAX_LEVEL
  - Higher levels have exponentially fewer nodes
  - Average: ~50% nodes at level 0, ~25% at level 1, etc.
Step 3: Insert operation:
  - Create update[] to track nodes at each level
  - Traverse from top level down to level 0:
    - For each level i:
      - Move right while next node's data < new data
      - Store node at update[i]
  - Generate random level for new node
  - Create new node with data and random level
  - Link new node at all levels:
    - For i = 0 to level:
      - new->forward[i] = update[i]->forward[i]
      - update[i]->forward[i] = new
  - Insert in O(log n) expected time
Step 4: Search operation:
  - Similar traversal from top to bottom
  - At level 0, move forward while data < key
  - Once past key position, move down level
  - After reaching level 0, check current node
  - Return found or not found
Step 5: Display operation:
  - Traverse level 0 (bottom level)
  - Print all nodes in sorted order
Step 6: Menu-driven operations:
  - Option 1: Insert with random level assignment
  - Option 2: Search with binary search-like efficiency
  - Option 3: Display all elements
  - Option 4: Exit

Time Complexity: O(log n) average for insertion and search
Space Complexity: O(n) for storing n nodes with multiple levels
`
  },
  {
    id: 24,
    question: `To implement a Quad Tree for efficient spatial indexing.`,
    code: `#include <stdio.h>
#include <stdlib.h>
struct Point
{
    int x;
    int y;
};
struct QuadTree
{
    struct Point point;
    struct QuadTree *nw;
    struct QuadTree *ne;
    struct QuadTree *sw;
    struct QuadTree *se;
};
// Create node
struct QuadTree* createNode(int x, int y)
{
    struct QuadTree *newNode;
    newNode = (struct QuadTree*)malloc(sizeof(struct QuadTree));
    newNode->point.x = x;
    newNode->point.y = y;
    newNode->nw = NULL;
    newNode->ne = NULL;
    newNode->sw = NULL;
    newNode->se = NULL;
    return newNode;
}
// Insert point
struct QuadTree* insert(struct QuadTree *root,
                        int x, int y)
{
    if(root == NULL)
    {
        return createNode(x, y);
    }
    // North West
    if(x < root->point.x && y >= root->point.y)
    {
        root->nw = insert(root->nw, x, y);
    }
    // North East
    else if(x >= root->point.x &&
            y >= root->point.y)
    {
        root->ne = insert(root->ne, x, y);
    }
    // South West
    else if(x < root->point.x &&
            y < root->point.y)
    {
        root->sw = insert(root->sw, x, y);
    }
    // South East
    else
    {
        root->se = insert(root->se, x, y);
    }
    return root;
}
// Display points
void display(struct QuadTree *root)
{
    if(root != NULL)
    {
        printf("(%d , %d)\\n",
               root->point.x,
               root->point.y);
        display(root->nw);
        display(root->ne);
        display(root->sw);
        display(root->se);
    }
}
int main()
{
    struct QuadTree *root = NULL;
    root = insert(root, 50, 50);
    root = insert(root, 25, 75);
    root = insert(root, 75, 75);
    root = insert(root, 20, 20);
    root = insert(root, 80, 30);
    printf("Quad Tree Points:\\n");
    display(root);
    return 0;
}
`,
    algorithm: `Algorithm: Quad Tree - Spatial Indexing

Step 1: Point structure with x, y coordinates
Step 2: QuadTree node structure:
  - point: stores single point (x, y)
  - nw, ne, sw, se: pointers to four children
    - Northwest: x < root.x, y >= root.y
    - Northeast: x >= root.x, y >= root.y
    - Southwest: x < root.x, y < root.y
    - Southeast: x >= root.x, y < root.y
Step 3: createNode(x, y):
  - Allocate memory for new QuadTree node
  - Store point (x, y)
  - Initialize all children pointers to NULL
  - Return new node
Step 4: Insert operation:
  - If root is NULL, create new node with (x, y)
  - Otherwise, determine quadrant of new point relative to root:
    - If x < root.x AND y >= root.y: insert in NW child
    - If x >= root.x AND y >= root.y: insert in NE child
    - If x < root.x AND y < root.y: insert in SW child
    - If x >= root.x AND y >= root.y: insert in SE child
  - Recursively insert in appropriate child
  - Return root
Step 5: Display operation:
  - Preorder traversal of quad tree
  - Print current point (x, y)
  - Recursively display NW, NE, SW, SE subtrees
Step 6: Example insertion:
  - Insert points: (50,50), (25,75), (75,75), (20,20), (80,30)
  - Root divides 2D space into quadrants
  - Recursively subdivides based on relative positions
Step 7: Applications:
  - Spatial search (find points in region)
  - Geographic data indexing
  - Image compression
  - Game collision detection

Time Complexity: O(log n) average for balanced tree
Space Complexity: O(n) for storing n points
`
  },
  {
    id: 25,
    question: `To implement an Interval Tree or Segment Tree for efficient range query operations.`,
    code: `#include <stdio.h>
int tree[100];
int arr[100];
// Build Segment Tree
void build(int node, int start, int end)
{
    int mid;
    // Leaf node
    if(start == end)
    {
        tree[node] = arr[start];
    }
    else
    {
        mid = (start + end) / 2;
        // Left subtree
        build(2 * node, start, mid);
        // Right subtree
        build(2 * node + 1, mid + 1, end);
        // Store sum
        tree[node] =
            tree[2 * node] +
            tree[2 * node + 1];
    }
}
// Range Sum Query
int query(int node, int start,
          int end, int l, int r)
{
    int mid;
    // No overlap
    if(r < start || end < l)
    {
        return 0;
    }
    // Complete overlap
    if(l <= start && end <= r)
    {
        return tree[node];
    }
    // Partial overlap
    mid = (start + end) / 2;
    return query(2 * node, start, mid, l, r)
         + query(2 * node + 1,
                 mid + 1, end, l, r);
}
int main()
{
    int n, i;
    int l, r, sum;
    printf("Enter Number of Elements: ");
    scanf("%d", &n);
    printf("Enter Array Elements:\\n");
    for(i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }
    // Build Segment Tree
    build(1, 0, n - 1);
    printf("Enter Range (l r): ");
    scanf("%d%d", &l, &r);
    sum = query(1, 0, n - 1, l, r);
    printf("Range Sum = %d", sum);
    return 0;
}
`,
    algorithm: `Algorithm: Segment Tree - Range Sum Query

Step 1: Input array of n elements
Step 2: Build Segment Tree:
  - Call build(node=1, start=0, end=n-1)
  - For each node:
    - If start == end (leaf node): tree[node] = arr[start]
    - Otherwise:
      - Calculate mid = (start + end) / 2
      - Recursively build left subtree: build(2*node, start, mid)
      - Recursively build right subtree: build(2*node+1, mid+1, end)
      - Store sum: tree[node] = tree[2*node] + tree[2*node+1]
Step 3: Tree structure:
  - Node at index k represents sum of range [start, end]
  - Left child at 2*k, Right child at 2*k+1
  - Leaf nodes represent individual array elements
Step 4: Range Sum Query build(node, start, end, l, r):
  - Query sum of elements from index l to r
  - Three cases:
    - No overlap: if r < start OR end < l, return 0
    - Complete overlap: if l <= start AND end <= r, return tree[node]
    - Partial overlap: 
      - Calculate mid = (start + end) / 2
      - Return query(left child, l, r) + query(right child, l, r)
Step 5: Algorithm flow:
  - Build tree once: O(n)
  - Each query: O(log n)
  - For each query, traverse tree from root
  - Prune branches that don't overlap with [l, r]
Step 6: User input:
  - Enter array size and elements
  - Build segment tree
  - Enter query range [l, r]
  - Display range sum

Time Complexity: O(n) for building + O(log n) per query
Space Complexity: O(n) for tree array
`
  },
];
