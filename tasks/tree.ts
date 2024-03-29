class TreeNode {
    val: number;
    left: any;
    right: any;

    constructor(val: number) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    root: TreeNode | null;
    constructor() {
        this.root = null
    }

    insert(val: number) {
        let newNode = new TreeNode(val)
        if (!this.root) { this.root = newNode; return true }
        else {
            let root = this.root

            while (true) {
                if (val < root.val) {
                    if (!root.left) {
                        root.left = newNode
                        break
                    } else {
                        root = root.left
                    }
                } else if (val > root.val) {
                    if (!root.right) {
                        root.right = newNode
                        break;
                    } else {
                        root = root.right
                    }
                }
            }

            return true
        }
    }

    insertRec(val: number) {
        let newNode = new TreeNode(val)

        if (!this.root) {
            this.root = newNode
        } else {
            let insertVal = (newNode, root: TreeNode) => {
                if (!root) {
                    root = newNode
                    return root
                }

                if (val < root.val) {
                    root.left = insertVal(newNode, root.left)
                } else if (val > root.val) {
                    root.right = insertVal(newNode, root.right)
                }
                return root
            }

            this.root = insertVal(newNode, this.root)
        }



    }


    preOrder(root = this.root) {
        if (!root) return undefined
        else {
            let stack: TreeNode[] = [root]
            let orderArr: number[] = []

            while(stack.length){
                let current = stack.pop() as TreeNode
                orderArr.push(current?.val)

                if(current.right){
                    stack.push(current.right)
                }
                if(current.left){
                    stack.push(current.left)
                }
            }

            return orderArr
        }

    }

    inOrder(root = this.root){
        let stack :TreeNode[] = []
        let res : number[] = []
        let current = root

        while(stack.length || current){
            
            while(current){
                stack.push(current)
                current = current.left
            }

            current = stack.pop() as TreeNode
            res.push(current.val)
            current = current.right

        }

        return res
    }

    postOrder(root = this.root){
        let stack : TreeNode[] = [root] as TreeNode[]
        let res : number[] = []

        while(stack.length){
            let current = stack.pop() as TreeNode
            res.unshift(current?.val)

            if(current.left){
                stack.push(current.left)
            }

            if(current.right){
                stack.push(current.right)
            }
        }

        return res
    }

    preorderRecursive(root = this.root){
        let res : number[] = []
        function traverse(root : TreeNode){
            if(root){

                res.push(root.val)
                if(root.left) traverse(root.left)
                if(root.right)traverse(root.right)
            }
        }

        traverse(root as TreeNode)

        return res
    }

    bfs(root = this.root){
        let queue : TreeNode[] = [root] as TreeNode[]
        let res  : number[] = []


        while(queue.length){
            let current = queue.shift() as TreeNode
            res.push(current?.val)

            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
        }

        return res
    }


    validate(root = this.root){
        let prev = -Infinity

        function traverse(root){
            if(root){
                traverse(root.left)
                if(prev >= root.val){
                    return false
                }
                prev = root.val
                console.log(root.val)
                traverse(root.right)
            }
        }

      return traverse(root)
        
    }
}