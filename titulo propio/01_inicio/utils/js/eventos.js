let boton_agregar = document.querySelector("#boton_agregar");
let input_agregar = document.querySelector("#texto_li");
let contador = 0;
let spanPulsaciones = 0;
boton_agregar.addEventListener("click", (element) => {
  console.log(element);
});

input_agregar.addEventListener("keydown", (event) => {
    // sacar la tecla pulsada por consola
    //console.log(event,key);

    //sacar el contenido del input
    //console.log(input_agregar.value);
    
    contador++;
    spanPulsaciones.innerTex = contador;
});





// declarar la funcion fuera (va a ser reutilizada?)
// o dentro(solo ejecutada por el evento) --> anónima
