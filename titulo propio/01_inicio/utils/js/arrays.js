let elementos = [1,2,3,4,5,6,7,8,9]; // number
let equipos = ["madrid","barsa","sevilla","celta","villareal"]; //sring
let cosas = [1,2,3,4,5,6,"madrid", true]; // any

//acceder posiciones 

console.log(equipos[0]);

// valor nuevo

equipos[0] = "leganes";

equipos[equipos.length] = "alcorcon";

equipos[8] = "fuera de lista";

// metodo push: inserta un elemento al final del array
console.log(equipos.push("leganes","cadiz"));

// metodo pop: quita la ultima posicion
console.log(equipos.pop());
console.log(equipos);

