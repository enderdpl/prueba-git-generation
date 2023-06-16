const persona = {
    nombre: "david",
    apellido: "Pérez",
    edad: 27,
    email: "david@",
    direccion: "Calle eyzaguirre"
  };
  
  console.log(persona.nombre);
  console.log( persona.apellido);
  console.log( persona.edad);
  console.log( persona.email);
  console.log(persona.direccion);
//   ---------------------------- Ejercicio 2----------------------------------------------

const alumno = {
    nombre: "david Pérez",
    calificaciones: {
      ingles: 85,
      programacion: 92,
      html: 78
    }
  };
  
  const nombreAlumno = alumno.nombre;
  const calificaciones = alumno.calificaciones;
  
  const promedio = (calificaciones.ingles + calificaciones.programacion + calificaciones.html) / 3;
  
  console.log("Nombre del alumno: " + nombreAlumno);
  console.log("Promedio de calificaciones: " + promedio);

//   --------------------------------------ejercicio 3---------------------------------

const objeto = {
    precio: 400,
    descuento: 10
  };
  
  function precioNeto() {
    return objeto.precio - (objeto.descuento * objeto.precio / 100);
  };
  
  console.log("Precio neto: " + precioNeto() );

  //   --------------------------------------ejercicio 4---------------------------------
  const numeros = [];

for (let i = 1; i <= 10; i++) {
  numeros.push(i);
}

console.log(numeros);

  //   --------------------------------------ejercicio 5---------------------------------
  let amigos = ["pedro", "maria", "joan", "pili"];
  console.log("Mis amigos son " + amigos[1] + " y " + amigos[2] + ".");
  

  //   --------------------------------------ejercicio 6---------------------------------

  function obtenerNombreMes(numero) {
    const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    console.log("el mes es : ", meses[numero]) 
  }
  obtenerNombreMes(4)
  //   --------------------------------------ejercicio 7---------------------------------
  function sumaLista(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
     console.log("El resultado de la suma es: " + suma);
  }
  
  sumaLista([2, 4, 5, 1, 2]);
 
  
 
  

