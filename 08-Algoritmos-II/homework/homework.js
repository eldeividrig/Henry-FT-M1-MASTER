'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let arr = array;
  let pivote = arr[Math.floor(Math.random() * arr.length)];
  let left = [];//numeros del array menor al pivote
  let right = [];//numero del array mayor al pivote
  let equals = []; //pivote y cualquier numero igual
  if (arr.length <= 1) return arr;

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] < pivote) {
      left.push(arr[i]);
    } else if (arr[i] > pivote) {
      right.push(arr[i]);
    } else {
      equals.push(arr[i]);
    }

  }

  return quickSort(left).concat(equals).concat(quickSort(right));
}

function merge(left, right) {
  let arr = [];
  while(left.length && right.length){
      if (left[0] < right[0]) {
          arr.push(left.shift())
      }else {
          arr.push(right.shift())
      }
  }
  return [ ...arr, ...left, ...right]
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let arr = array;
  let mitad = Math.floor(arr.length / 2);  
  if (arr.length < 2) return arr;

  const left = arr.splice(0, mitad);
  return merge(mergeSort(left), mergeSort(arr));

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
