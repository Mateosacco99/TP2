const persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 39,
    fecha_nac: "17/03/1987",
    saludar: function() {
        console.log("Hola, mi nombre es " + this.nombre + " " + this.apellido + " y tengo " + this.edad + " años.");
    }
};

persona.saludar();

//let nombre = "Juan";

//console.log('nombre: ' + nombre);

//const fecha_nac = "17/03/1987";

//console.log('fecha de nacimiento: ' + fecha_nac);

//let edad = 2026 - 1987;

//console.log('edad: ' + edad);

//const array = [1, 2, 3, 4, 5, {}, [], "hola", true, false];

//console.log('array: ' + array);

//array[0] = "adios";

//console.log('array: ' + array);

//array.push("nuevo elemento");

//console.log('array: ' + array);

//array.pop();

//console.log('array: ' + array);