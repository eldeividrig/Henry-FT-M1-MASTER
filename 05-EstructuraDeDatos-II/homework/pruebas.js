function Node(data) {
    this.data = data;
    this.next = null;
}

function List() {
    this._length = 0;
    this.head = null;
}

let list1 = new List();

List.prototype.add = function (data) {
    let newNode = new Node(data);
    let current = this.head;

    if (!current) {
        this.head = newNode;
        this._length++;
        return newNode;
    }
    while (current.next) {
        current = current.next;
    }
    current.next = newNode;
    this._length++;
    return newNode;
};

List.prototype.getAll = function() {
    let current = this.head;
    if (!current) {
        console.log("La lista esta vacia");
        return;
    }
    while (current) {
        console.log(current.data);
        current = current.next;
    }
    return;
}

List.prototype.buscar = function(dato) {
    let current = this.head;
    if (!current) {
        console.log("La lista esta vacia");
        return false;
    }
    while (current) {
        if (current.data === dato) {
            console.log("Se encontro el nodo con el dato: " + dato);
            return
        }        
        current = current.next;
    }
    return console.log("No se encontro el dato buscado");;
}

list1.add(5);
list1.add(6);
list1.add(9);
list1.getAll();
list1.buscar(6);
console.log(list1._length);
list1
let list2 = new List();
list2.getAll();
list2
