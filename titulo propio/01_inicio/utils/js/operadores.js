// operadores aritmeticos
let numero1 = 6;
let numero2 = 10;
let suma = numero1 + numero2;
let resultado;

suma +=10;

let resta = numero1 - numero2;
resta -=10;

let multiplicacion = numero1 * numero2;
multiplicacion *= 2;

let division = numero1 / numero2;
division /= 2;

let modulo = numero1 % numero2;


console.log(`La suma de los numeros es ${suma}`);
console.log(`La multiplicaciones de los numeros es ${multiplicacion}`);
console.log(`La resta de los numeros es ${resta}`);
console.log(`La division de los numeros es ${division}`);
console.log(`El modulo de los numeros es ${modulo}`);


// console.log(numero1+numero2);

console.log(`La suma de los numeros es ${numero1 + numero2}`);
console.log(`La multiplicaciones de los numeros es ${numero1 * numero2}`);
console.log(`La resta de los numeros es ${numero1 - numero2}`);
console.log(`La division de los numeros es ${numero1 / numero2}`);
console.log(`El modulo de los numeros es ${numero1 % numero2}`);

resultado = numero1 % numero2;
console.log(`El tipo del resto es ${typeof resultado}`);
console.log(`El tipo del resto es ${typeof (numero1 % numero2)}`);

// operadores de comparacion

numero1 = 11;
numero2 = 10;

let mayorQue = numero1 > numero2;
console.log(mayorQue);

let mayorIgual = numero1 >= numero2;
console.log(mayorIgual);

let menorQue = numero1 < numero2;
console.log(menorQue);

let menorIgual = numero1 <= numero2;
console.log(menorIgual);

let diferente = numero1 != numero2;
console.log(diferente);

let igual = numero1 == numero2;
console.log(igual);

console.log("igual");

numero1 = 4;
numero2 = "4";
console.log(igual);

// operadores []

// Metodos/funciones
/* alert(`Bienvenido ${nombre}`);
let confirmacion = confirm("¿Segurp que quieres continuar?");
console.log(confirmacion); */

// let introduccion = prompt("introduce un dato a trabajar", "parametro por defecto");
// let introduccion = prompt(`Por favor ${nombre}, introduce un dato a trabajar`, "parametro por defecto");

// console.log(introduccion);

// Ejercicio: realizar un script que te pida nombre y apellidos
// Una vez introducidos, se pediran dos numeros a operar (cada uno en un promt)
// En el mensaje, aparecerán los nombres y apellidos introducidos
// Una vez introducidos los datos se preguntara si se quiere realizar la operacion
// En el caso de decir que si aparecera un mensaje con todas las operaciones y sus resultados
// las operaciones entre X e Y son:
// multiplicacion: xxx
// division: xxx
// suma: xxx
// resta: xxx
// modulo: xxx

let nombreEj = prompt("Introduzca su nombre");
let apellidoEj = prompt("Introduzca su apellido");

let numero1Ej = prompt(`Por favor ${nombreEj + ' ' + apellidoEj}, introduce un numero`);
let numero2Ej = prompt(`Por favor ${nombreEj + ' ' + apellidoEj}, introduce otro numero`);

let pregunta = confirm(`${nombreEj + ' ' + apellidoEj}, ¿quiere realizar alguna operacion?`);


suma = numero1Ej + numero2Ej;
resta = numero1Ej - numero2Ej;
multiplicacion = numero1Ej * numero2Ej;
division = numero1Ej / numero2Ej;
modulo = numero1Ej % numero2Ej;

alert(`La suma de los numeros es ${suma}` + ` | La multiplicaciones de los numeros es ${multiplicacion}` + ` | La resta de los numeros es ${resta}` + ` | La division de los numeros es ${division}` + ` | El modulo de los numeros es ${modulo}`);
/* alert(`La multiplicaciones de los numeros es ${multiplicacion}`);
alert(`La resta de los numeros es ${resta}`);
alert(`La division de los numeros es ${division}`);
alert(`El modulo de los numeros es ${modulo}`); */








