/* let frase = "Esto es un ejemplo de string";
console.log(frase);
// console.log( frase.charAt(0).toLocaleLowerCase());

// Ejercicio: sacar por consola cada una de las letras que tiene la palabra



for (let index = 0; index < frase.length; index++) {
    console.log(frase.charAt(index).toLocaleLowerCase());
}

let contadorVocales = 0;
let contadorConsonantes = 0;
frase = frase.replaceAll(" ", "");
for (let index = 0; index < frase.length; index++) {
    if(
      frase.charAt(index).toLocaleLowerCase() == 'a' ||
      frase.charAt(index).toLocaleLowerCase() == 'e' || 
      frase.charAt(index).toLocaleLowerCase() == 'i' || 
      frase.charAt(index).toLocaleLowerCase() == 'o' || 
      frase.charAt(index).toLocaleLowerCase() == 'u'
      ){
        contadorVocales++;
    } else{
        contadorConsonantes++;
    }
}

console.log(`Hay ${contadorVocales} vocales`);
console.log(`Hay ${contadorConsonantes} consonantes`);

console.log(frase.length); 


let frase
let estaLetra = frase.includes("E");
let subFrase = frase.slice(0,5);
console.log(subFrase);


Ejercicio: se pide por prompt un correo electronico
se compruebe si está bien formateado:
tiene un @
en la segunda parte tiene un .
tiene una extension com o es
borja@gmail.com
borja@borja@gmail.es
borja@gmail.asd


let correo = prompt("Introduzca un email");
let numeroArrobas = 0;
let posicionArroba = 0;

console.log(correo);
for (let index = 0; index < correo.length; index++) {
    if(correo.charAt(index) == "@")
    {
    numeroArrobas++;
    posicionArroba = index;
    }; 
}

if(numeroArrobas == 1){
    // console.log("la posicion de la @ es " + posicionArroba);
    let dominio = correo.slice(posicionArroba, correo.length);
    console.log(dominio);
}

correo.split('@');
console.log(numeroArrobas);

let partesCorreo = correo.split("@");
if (partesCorreo.length == 2) {
    let dominio = partesCorreo[1].split('.');
    if (dominio.length == 2 && (dominio[1] == 'es' || dominio[1] == 'com')) {
        console.log('correo valido');
    }else{
        console.log("correo invalido");
    }
} else{
    console.log("correo invalido");
    
}
*/