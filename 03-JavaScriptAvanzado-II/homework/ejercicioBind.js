var persona = {
    nombre: 'David',
    apellido: 'Barboza',
}

var logNombre = function() {
    console.log(this.nombre);
}

var logNombrePersona = logNombre.bind(persona);

logNombrePersona();