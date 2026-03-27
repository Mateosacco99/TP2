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


function heladito(str) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (str === "bien") {
                resolve("hay helado");
            } else {
                reject("no hay helado");
            }
        }, 2000);
    });
};

// Ejemplo con .then() y .catch()
heladito("bien")
    .then(result => console.log(result))
    .catch(error => console.log(error));

// Ejemplo con async/await
async function test() {
    try {
        const result = await heladito("bien");
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

test();