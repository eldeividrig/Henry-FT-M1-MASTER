//BIND

var persona = {
    nombre: 'David',
    apellido: 'Barboza',
}

var perro = {
    nombre: 'Magui',
    apellido: 'Barboza',
}

var logNombre = function() {
    console.log(this.nombre);
    console.log(this.apellido);
}

var saludarPerrito = function(arg1, arg2) {    
    console.log( arg1 + ' ' + this.nombre + arg2);
}

var logNombrePersona = logNombre.bind(persona); //retorna la funcion

logNombrePersona();

//CALL

logNombre.call(perro); //ejecuta ak mismo

//APPLY

saludarPerrito.apply(perro, ['Hola', ' como estas perrita'])