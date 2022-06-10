// HTMLElement --> individual (1)  find()
// NodeList<HTMLElements> --> conjunto (1 o mas) findAll()
// HTMLCollection<HTMLElements> --> conjunto (1 o mas)  findAll()

// buscar elementos: 
// tag
let listas = document.getElementsByTagName("ul");
let elementosListas = document.getElementsByTagName("il");
console.log(elementosListas[0].innerText);

for (let index = 0; index < elementosListas.length; index++) {
    console.log(elementosListas[index].innerText);
    
}

/* 
    Ejercicio: hacer un array de 5 palabras
    Modificar cada uno de los textos que ponen en el li de las asignaturas de primero
*/

let palabras = ('ola','sol','mar','playa','arena');

// ASINCRONIA
// a los 5000 milisegundos, cambia el contenido
setTimeout(() => {
    for (let index = 0; index < palabras.length; index++) {
        elementosListas[index].innerText = palabras[index];
    }
     
}, 5000);

// id

let boton = document.querySelectorAll("#boton-agregar");

//id

let listas = document.querySelectorAll("ul");

// class


