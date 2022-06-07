// estructura if / if else
if (true) {
    console.log("La respuesta es true");
}else{
    console.log("La respuesta es false");
}

let nota = 5;

/*
if (nota >=5){
    console.log("El examen está aprobado");
}else{
    console.log("El examen está suspenso");
}

// if ternario

nota ? console.log('examen aprobado') : console.log('examen suspenso');

let acierto = true;
true & console.log("examen aprobado");

*/

/*
nota = 2;
switch (nota) {
    case 1:
        console.log("dato introducido 1");
        break;
    case 2:
        console.log("dato introducido 2");
        break;
    case 3:
        console.log("dato introducio 3");
        break;
    /*default:
        console.log("dato incorrecto");
        break;*/

/* 
Pedir por prompt dos numeros
Pedir por prompt una operacion (suma, resta, division, multiplicaciones)

Si se introduce numeros menores que 0 o letras que salte una alerta indicando el
error y el programa parara
Si los numeros introducidos son validos se realizara la operacion indicada
Si se detecta que las operaciones es negativa el programa parara tras realizar todas las operaciones 
de los numeros y saltará una alerta indicando de ello
*/
 /*
let num1 = prompt('Introduzca un numero');
let num2 = prompt('Introduzca otro numero');

if(!isNaN(Number(num1)) && !isNaN(Number(num2)) && num1 > 0 && num2 > 0){

    let operacion = prompt("Introduce la operacion a realizar");
    switch(operacion){
        case "suma":
            alert(`${num1} + ${num2} = ${num1 + num2}`);
            break;
        case "resta":
            alert(`${num1} - ${num2} = ${num1 - num2}`);
            break;
        case "multiplicacion":
            alert(`${num1} x ${num2} = ${num1 * num2}`);
            break;
        case "division":
            alert(`${num1} / ${num2} = ${num1 / num2}`);
            break;
        default:
            console.log("operacion desconocida");
            break;
    }


} else{
    console.log('Alguno de los datos es incorrecto');
}

*/

/* 
//estructura del while
let numero = 12;
while (numero > 10){
    console.log("numero mayor que 10");
    numero--;
};
*/

/*
Ejercicio: pedir un numero por prompt y mostrar por consola todos los numeros
desde el introducido hasta 0.
En el caso de ser un numero negativo saltara una alerta.
*/

let numero1 = prompt("Introduzca un numero");

if(!isNaN(Number(numero1)) && numero1 > 0){
    while(numero1 > 0){
        console.log(numero1);
        numero1--;
    }
} else{
    alert("ERROR");
}

/*
Ejercicio: pedir por consola dos numeros y sacar por consola todos los numeros entre ellos
*/

let numUno = prompt("introduce un numero");
let numDos = prompt("introduce un numero");

let max, min;

if(numDos > numUno){
    max = numDos;
    min = numUno;
}

else if(numUno > numDos){
    max = numUno;
    min = numDos;
} else{
    alert("los numeros son iguales");
}

while(max > min){
    console.log(max);
    max--;
}