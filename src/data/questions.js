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
- `
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
- `
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
- `
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
- `
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
- `
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
- `
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
- `
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
- `
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
- `
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
- `
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
- `
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
- `
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
- `
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
- `
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
- `
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
- `
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
- `
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
- `
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
- `
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
- `
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
- `
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
- `
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
- `
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
- `
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
}`
  },
];