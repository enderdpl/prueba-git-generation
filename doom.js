const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const p = document.getElementById("saludo");

function enviarSaludo() {
    console.log(nombre.value);
    p.innerHTML = `Hola ${nombre.value} ${apellido.value}, bienvenido.`;
}
