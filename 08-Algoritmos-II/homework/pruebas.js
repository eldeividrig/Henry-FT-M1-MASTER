
var arr = [50, 440, 190, 45, 32, 44, 123, 34, 67, 86];

// Quick Sort
/*function quickSort(arr) {

    let pivote = arr[Math.floor(Math.random() * arr.length)];
    let left = [];//numeros del array menor al pivote
    let right = [];//numero del array mayor al pivote
    let equals = []; //pivote y cualquier numero igual
    if (arr.length <= 1) return arr;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < pivote) {
            left.push(arr[i]);
        } else if (arr[i] > pivote){
            right.push(arr[i]);
        } else {
            equals.push(arr[i]);
        }

    }

    return quickSort(left).concat(equals).concat(quickSort(right));


}

let ordenar = new quickSort(arr);
ordenar*/

// Merge Sort
/*Solucion 1
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

function mergeSort(arr) { 
    if (arr.length <= 1) return arr;
    let mitad = Math.floor(arr.length / 2);
    const left = arr.splice(0, mitad);
    return merge(mergeSort(left),mergeSort(arr));

}

let ordenar = new mergeSort(arr);
console.log(...ordenar);
*/

//Solucion 2



function merge(left, right) {
    let leftIndex = 0;
    let rightIndex = 0;
    let arr = [];
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            arr.push(left[leftIndex]);
            leftIndex++;
        }else{
            arr.push(right[rightIndex]);            
            rightIndex++;
        }
    }
    arr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    arr
}

function our_split(arr) {
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);//left = [0, middle -1]
    let right = arr.slice(middle);//right = [middle, final]
    return [left, right]; //rta = [[left],[right]] para asignar => [left] = rta[0]  [right] = rta[1]
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let div = our_split(arr);
    let left = div[0];
    left
    let right = div[1];
    right
    console.log(right.length)
    return merge(mergeSort(left), mergeSort(right))
    
}


let ordenar = mergeSort(arr);
ordenar