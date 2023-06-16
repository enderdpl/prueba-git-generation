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
  
  