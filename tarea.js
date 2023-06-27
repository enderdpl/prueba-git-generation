var input = document.getElementById("myInput");
var lista = document.getElementById("myList");


function agregar() {
  //tomamos el valor que tiene el input al momento de presionar el boton
    
    var texto = input.value;

    if (texto==""){
        alert(' INGRESA UNA TAREA')
    }
    else{

        //generamos el elemento li para la lista ordenada de ol
    var nuevoElemento = document.createElement("li");

    // le asignamos al nuevo elemento li el valor del input al momento de presionar  boton agregar 
    nuevoElemento.textContent = texto;

    // agregamos el nuevo elemento li a la lista ('ol') 

    lista.appendChild(nuevoElemento);
    
    // queda en blanco el input cada vez que se preione el botton
    input.value = "";
    }
    
  }



  function borrar() {
    lista.textContent = "";
  }