//Extra 1

String.prototype.repeatify = function(entero) {
    let resultado = "";
    for (let i = 0; i < entero; i++) {
        resultado += this;
    }
    return resultado;
}
console.log('hola'.repeatify(3));


//Extra 2

function Shape(type, getType){
    this.type = type;
    this.getType = getType;
};

function Triangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
}

Triangle.prototype = new Shape('Triangle', function(){return this.type;});
Triangle.prototype.getPerimeter = function() {    
    return this.a + this.b + this.c;
}

var t = new Triangle(1,2,3);
console.log(t instanceof Triangle);
console.log(Shape.prototype.isPrototypeOf(t));      
console.log(t.getPerimeter());            
console.log(t.getType());

//Extra 3

function Circle(radio) {
    this.raido = radio;
    this.getPerimeter = function() {return 3.14 * radio ** 2}
}
  
Circle.prototype = new Shape(
    'Circle',
    function(){return this.type;}
);

var c = new Circle(2);
console.log(c instanceof Circle);
console.log(Shape.prototype.isPrototypeOf(c));      
console.log(c.getPerimeter());            
console.log(c.getType());