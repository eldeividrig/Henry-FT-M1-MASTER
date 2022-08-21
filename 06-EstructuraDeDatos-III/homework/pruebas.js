function BinarySearchTree(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

let bst = new BinarySearchTree(5);

BinarySearchTree.prototype.add = function (data) {
    if (this.data < data) {
        //derecha
        if (this.right === null) {
            this.right = new BinarySearchTree(data);
        } else {
            this.right.add(data);
        }
    }
    if (this.data > data) {
        //Izquierda
        if (this.left === null) {
            this.left = new BinarySearchTree(data);
        } else {
            this.left.add(data);
        }
    }
}

BinarySearchTree.prototype.size = function () {
    let contador = 1;
    //derecha
    if (this.left && this.right) {
        contador += this.left.size() + this.right.size();      
    }else{
        contador += this.left ? this.left.size() : 0;
        contador += this.right ? this.right.size() : 0;
    }
    return contador;
}
//console.log(bst);
bst.add(4);
bst.add(6);
bst.add(7);
bst.add(9);
bst.add(70);
console.log(bst.size());
bst


//console.log(bst);