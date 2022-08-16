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
        return fibonacci(n - 2) + fibonacci (n - 1);
    }
    /*
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];    
    }
    return fib[fib.length - 1];*/

}





console.log(fibonacci(2));



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

class Node {
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
miStack.push('David');