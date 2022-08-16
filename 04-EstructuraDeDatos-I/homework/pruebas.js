//RECURSION

/*function factorial(x) {
    if (x >- 1 && x < 2) return 1; 
    else if (x < 0) return 0;
    return x * factorial (x - 1); 
    
}

console.log(factorial(5));*/

function fibonacci(n) {
    if (n < 2) {
        return 1;
    } else {
        return fibonacci(n - 2) + fibonacci(n - 1);
    }
    /*
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];    
    }
    return fib[fib.length - 1];*/

}

//console.log(fibonacci(5));


/*function decimalABinario(num) {
    if (num === 1) return '1';
    if (num === 0) return '0';
    return decimalABinario(Math.floor(num / 2)) + (num % 2);
}

console.log(decimalABinario(0));*/

/*function binarioADecimal(num) {
    var sum = 0;
    var nroReverse = num.split('').reverse().join('');
    for (let i = 0; i < nroReverse.length; i++) {
        sum = sum + nroReverse[i] * 2 ** [i];
    

    return sum + binarioADecimal();
}*/
function toDecimal(binary, i) {
    // If we reached last character
    let n = binary.length;
    if (i == n - 1)
        return parseInt(binary[i]);

    // Add current tern and recur for
    // remaining terms
    return (parseInt(binary[i]) << (n - i - 1)) + toDecimal(binary, i + 1);
}

// Driver code
let binary = "1111";
let i = 0;
debugger;
console.log(toDecimal(binary, i));






/*class MiArr {
    constructor(){
        this.size = 0;
        this.data = {}
    }
    push(value){

    }
}

var nuevaArr = new MiArr();

nuevaArr.push('chris');*/

/*class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor(value){
        this.arriba = value;
        this.abajo = null;
        this.size = 0;
    }
    peek(){}

    push(value){}

    pop(){}

}

let miStack = new Stack();
miStack.push('David');*/