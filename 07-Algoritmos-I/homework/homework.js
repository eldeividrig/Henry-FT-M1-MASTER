'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var arr = [1];

  /*for (let x = 2; x <= num; x++) {
    for (let j = 2; j <= num; j++) {
      for (let i = 2; i <= num; i++) {
        if (num % x == 0) {
          num = num / x;
          arr.push(x);
        }
        if (num % j == 0) {
          num = num / j;
          arr.push(j);
        }
        if (num % i == 0) {
          num = num / i;
          arr.push(i);
        }
      }

    }
  }*/
  let i = 2;

  while (num !== 1) {
    if (num % i === 0) {
      arr.push(i);
      num = num / i;
    } else {
      i++;
    }
  }
  arr.sort((a, b) => {
    return a - b;
  });
  return arr;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var arr = array;
  let swap = true;
  let max = arr.length - 1;
  while (swap) {
    swap = false;
    for (let i = 0; i < max; i++) {
      if (arr[i] > arr[i + 1]) {
        let aux = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = aux;
        swap = true;
      }
    }
    max--;
  }
  return (arr);
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let arr = array;
  for (let i = 1; i < arr.length; i++) {
    let aux = arr[i];
    let j = i - 1;
    while ((j >= 0) && (aux < arr[j])) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = aux;
  }
  return (arr);
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let j = 0; j < array.length; j++) {
    let min = j;
    for (let i = j + 1; i < array.length; i++) {
      if (array[i] < array[min]) {
        min = i;
      }
    }
    if (j !== min) {
      let aux = array[min];
      array[min] = array[j];
      array[j] = aux;
      min = j + 1;
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
