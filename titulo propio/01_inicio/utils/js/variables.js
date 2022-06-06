// let --> declaracion de variables de ambito global y de metodo
// var --> ambito global --> ya no se utiliza
// const --> constantes 

const DNI = "123456X"; // String
let nombre = "Borja"; // String
let nombreObj = new String("Elemento");
let apellido; // null --> undifined
let edad = 37; // number
let carnet =  true; // boolean
let fecha = new Date(); // daye -->object

apellido = "Martin"; // String
// DNI = 12345667;

// comprobacion de tipos
console.log(typeof nombreObj);

// isNaN --> is not a number T/F
console.log(isNaN (nombre));
console.log(isNaN (edad));

// Ejercicio: salida por consola
// Mi nombre es XXX ZZZ y tengo CC años

console.log("Mi nombre es " + nombre + " y tengo " + edad + " anios");

// llamo al contenido de la variable 
console.log(`Mi nombre es ${nombre} ${apellido} y tengo ${edad} anios`);


