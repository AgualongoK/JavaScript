let boton_agregar = document.querySelector("#boton_agregar");
let input_agregar = document.querySelector("#texto_li");

boton_agregar.addEventListener("click", (element) => {
  console.log(element);
});

input_agregar.addEventListener("keydown", (event) => {
    // sacar la tecla pulsada por consola
    //console.log(event,key);

    //sacar el contenido del input
    console.log(input_agregar.value);
    
});



// declarar la funcion fuera (va a ser reutilizada?)
// o dentro(solo ejecutada por el evento) --> anónima
