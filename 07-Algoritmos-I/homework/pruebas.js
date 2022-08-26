//factorear y ordenar de menor a mayor
/*var arr = [1];
var num = 220;
let i = 2;

while (num !== 1) {
    if (num % i === 0) {        
        arr.push(i);
        num = num / i;
    }else{
        i++;
    }    
}



arr.sort((a, b) => {
    return a - b;
});


console.log(arr);
*/

//bubble sort
/*var arr = [5, 1, 4, 2, 8];
console.log(arr);
let swap = true;
let max = arr.length-1;
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


console.log(arr);
*/

//insertion sort
arr = [5, 1, 4, 2, 8, 0];
for (let i = 1; i < arr.length; i++) {
    let aux = arr[i];
    let j = i-1;
    while ((j >= 0) && (aux < arr[j])) {
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1]=aux;
}
console.log(arr);

//selection sort

// 9  8  7  5  0
//             i
//            min
// j

//J=0
//i=4
//min = 4

let array = [-9, 8, 7, -155, 0];
console.log(array);

for (let j = 0; j < array.length; j++) {
    let min = j;
    for (let i = j + 1; i < array.length; i++) {
        if (array[i] < array[min]) {
            min = i;
        }        
    }
    if (j !== min) {
        let aux = array[min];
        array[min]= array[j];
        array[j]= aux;
        min = j+1;
    }    
}
console.log(array);

