let array = [1,2,3,4,5,6,7,8,9,10];
let contador = 0;

_.shuffle(array);
/* 
Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.
while (contador < array.length) {
        console.log(array[contador]);
        contador++;
}

Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    
}
Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en pantalla.
array.forEach(element => {
    console.log(array[element-1]);   
});

Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
for (let index = 0; index < array.length; index++) {
    console.log((array[index]) + 1);
}

Calcular la media de todos los elementos del array
let total = 0;
let media = 0.0;
for (let index = 0; index < array.length; index++) {
    total = total + (array[index]);
}

media = total / array.length;

console.log(total);
console.log(media);


Crear un array vacío, luego generar 20 números al azar y guardarlos en un array.
let arrayVacio = [null];

let aleatorio = 0;

for (let index = 0; index < 20; index++) {
    aleatorio = (Math.random()*100);
    arrayVacio[index] = aleatorio.toFixed(2);
}

for (let index = 0; index < arrayVacio.length; index++) {
    console.log(arrayVacio[index]);
}

*/