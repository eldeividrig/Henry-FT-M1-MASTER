'use strict'
// MATRIZ

class Matriz {

  constructor(alto, ancho) {
    this.data = [];
    for (var i=0; i<alto; i++) {
      this.data[i] = [];
      for (var j=0; j<ancho; j++) {
        this.data[i][j] = undefined;
      }
    }
  }

  buscar(val) {
    for (var i=0; i<this.data.length; i++) {
      for (var j=0; j<this.data[i].length; j++) {
        if (this.data[i][j] == val) return [i,j];
      }
    }
  }

  sumar(mat) {
    var newMatriz = [];
    for (var i=0; i<this.data.length; i++) {
      newMatriz[i]=[];
      for (var j=0 ; j<this.data[i].length; j++) {
        newMatriz[i][j] = this.data[i][j]+mat[i][j];
      }
    }
    return newMatriz;
  }

  restar(mat) {
    var newMatriz = [];
    for(var i=0; i<this.data.length; i++) {
      newMatriz[i] = [];
      for (var j=0; j<this.data[i].length; j++ ) {
        newMatriz[i][j] = this.data[i][j]-mat[i][j];
      }
    }
    return newMatriz;
  }

  multiplicar(mat) {
    var newMatriz = [];
    var suma = 0;
    for( var i=0; i<this.data.length; i++) {
      newMatriz[i]=[];
      for (var j=0; j<this.data[i].length; j++) {
        for (var k=0; k<this.data.length; k++) {
          suma += this.data[k][j] * mat[j][k];
        }
        newMatriz[i][j] = suma;
      }
    }
    return newMatriz;
  }

  print() {
    var mat = this.data;
    for( var i = 0; i < mat.length; i++ ){
      let linea = '['
      for (var j = 0; j < mat[i].length; j++) {
          linea += mat[i][j] + (j === mat[i].length-1 ? '' : ',')
      }
      console.log(linea + ']')
    }
  }
}

let mat1 = new Matriz(4, 4);
let acum = 0;
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    mat1.data[i][j] = acum ++;
  }  
}

let mat2 = new Matriz(4, 4);
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    mat2.data[i][j] = acum ++;
  }  
}


console.log(mat1.buscar(4));

console.log(mat1.sumar(mat2.data));

console.log(mat2.restar(mat1.data));
mat1
mat2
console.log(mat1.multiplicar(mat2.data));



