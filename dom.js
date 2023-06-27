const parrafo= document.getElementById('text');

function js_style(){

    parrafo.style.fontFamily = "Times New Roman, serif";
parrafo.style.fontSize = "30px";
parrafo.style.color = "red";
}
// ------------------------EJERCICIO 2 ---------------------------------------

var fname= document.getElementById('name');
var lname= document.getElementById('lname');

function getFormvalue(){

    console.log('nombre: ', fname.value, 'apellido: ', lname.value )

    
}