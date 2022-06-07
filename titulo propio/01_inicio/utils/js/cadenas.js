let frase = "Esto es un ejemplo de string";
console.log(frase);
// console.log( frase.charAt(0).toLocaleLowerCase());

// Ejercicio: sacar por consola cada una de las letras que tiene la palabra


/*
for (let index = 0; index < frase.length; index++) {
    console.log(frase.charAt(index).toLocaleLowerCase());
}
*/

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




