function LinkedList() {
    this._lenght = 0;
    this.head = null;
}

function Node(data) {
    this.value = data;
    this.next = null;
}

LinkedList.prototype.add = function (data) {
    let newNode = new Node(data);
    let current = this.head;
    if (!current) {
        this.head = newNode;
        this._lenght++;
        return newNode;
    }
    while (current.next) {
        current = current.next;
    }
    current.next = newNode;
    this._lenght++;
    return newNode;
}
LinkedList.prototype.remove = function () {
    let current = this.head;
    if (this._lenght === 0) return null;
    if (this._lenght === 1) {
        let aux = current.value;
        this.head = null;
        this._lenght--;
        return aux;
    }
    while (current.next.next) {
        current = current.next;
    }
    let aux = current.next.value;
    current.next = null;
    this._lenght--;
    return aux;
}

LinkedList.prototype.search = function (value) {
    let current = this.head;
    console.log(current);
    if (!current) {
        console.log("La lista esta vacia");
        return null;
    }
    while (current) {
        if (current.value === value) {
            console.log("Se encontro el nodo con el dato: " + value);
            return value;
        }
        current = current.next;
    }
    return console.log("no anda");;
}

let list1 = new LinkedList();
list1.add(4);
list1.remove();
list1.remove();
list1.add(5);
list1.add(6);
list1.remove();
list1.search(5);
console.log(list1);
list1
var numBuckets = Array(5);
var tamaño = numBuckets.length;
tamaño

var value = 'foobarr'
var arr = [0, 1, 2, 3];
var suma = 0;


for (let i = 0; i < value.length; i++) {
    suma = suma + value.charCodeAt(i);    
}
var primero = 0;
let pr = value.split('');
let sum = 0;
sum = pr.map(ps => {return sum = sum + ps.charCodeAt()});
let ver = sum[sum.length - 1];
let mod = ver % 35;
mod

let total = arr.map(nro => {return nro * 2});
total
pr

let modulo = suma % 35;

console.log(suma);
console.log(modulo);


//reduce

let arr1 = [[9, 8], 6, 7, 4];

let acum = arr1.reduce((a, b) => {return a.concat(b)});

let r = acum.reduce((a, b) => {return a + b});

acum

r