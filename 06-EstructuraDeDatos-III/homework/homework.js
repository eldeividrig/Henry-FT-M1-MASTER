"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
  if (value > this.value) {
    //derecha
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
  if (value < this.value) {
    //Izquierda
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
}

BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) return true;
  if (value < this.value && this.left) {
    return this.left.contains(value);
  } else if (value > this.value && this.right) {
    return this.right.contains(value);
  }
  return false;
}

BinarySearchTree.prototype.depthFirstForEach = function (cb, order = 'in-order') {  
  if (order === 'in-order') {
    if (this.left) {
      this.left.depthFirstForEach(cb, order);
    }
    cb(this.value);
    if (this.right) {
      this.right.depthFirstForEach(cb, order);
    }
  }
  if (order === 'pre-order') {
    cb(this.value);
    if (this.left) {
      this.left.depthFirstForEach(cb, order);
    }    
    if (this.right) {
      this.right.depthFirstForEach(cb, order);
    }
  }
  if (order === 'post-order') {    
    if (this.left) {
      this.left.depthFirstForEach(cb, order);
    }    
    if (this.right) {
      this.right.depthFirstForEach(cb, order);
    }
    cb(this.value);
  }
}

BinarySearchTree.prototype.height = function(height = 1) {
  if(!this.right && !this.left) {
      // No hay elementos, devolver profudidad actual
      return height;
  } else {
      // Calcular profundidad máxima en cada extremo con asignación ternaria
      // Si el extremo no tiene elementos, se mantiene profundidad actual
      let lHeight = (!this.left) ? height : this.left.height(height + 1);
      let rHeight = (!this.right) ? height : this.right.height(height + 1);
      // Se devuelve el mayor de ambos extremos
      lHeight
      rHeight
      height = Math.max(lHeight, rHeight);
  }
  return height;
}


let bst = new BinarySearchTree(20);
bst.insert(3);
bst.insert(22);
bst.insert(21);
bst.insert(24);
bst.insert(19);
bst.insert(17);
console.log(bst);

var testArr = [];
bst.depthFirstForEach(function(val){ testArr.push(val); });
testArr
var testArr = [];
bst.depthFirstForEach(function(val){ testArr.push(val); }, 'pre-order');
testArr
var testArr = [];
bst.depthFirstForEach(function(val){ testArr.push(val); }, 'post-order');
testArr
console.log(bst.height());

BinarySearchTree.prototype.breadthFirstForEach = function (cb, arr = []) {
    
  if (this.left){
    arr.push(this.left);
  }  
  if (this.right){
    arr.push(this.right);
  }
  cb(this.value);

  if (arr.length > 0) {
    arr.shift().breadthFirstForEach(cb, arr);
  }  
}
var depth = [];
bst.breadthFirstForEach(function(val){ depth.push(val); });
depth

BinarySearchTree.prototype.size = function () {
  let contador = 1;
  if (this.left && this.right) {
    contador += this.left.size() + this.right.size();
  } else {
    contador += this.left ? this.left.size() : 0;
    contador += this.right ? this.right.size() : 0;
  }
  return contador;
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
