// -------------EJERCICIO 1----------------------------------------
function numeroMayor(num1, num2, num3) {
    if (num1 === num2 && num2 === num3) {
      return "Los números son iguales";
    } else {
      return   console.log(   Math.max(num1, num2, num3));
    }
  }
  
  numeroMayor(3,4,8)
  // -------------EJERCICIO 2----------------------------------------
  var vocales = ['a', 'e', 'i', 'o', 'u'];

  function esVocal(caracter) {
    
    if (vocales.includes(caracter)) {
      return console.log("es vocal");
    } else {
      return console.log("no es vocal");
    }
  }
  esVocal("d")
  
// -------------EJERCICIO 3----------------------------------------
    var result="";

function generarCaracteres(n, caracter) {
    for (var i = 0; i < n; i++) {
      result += caracter;
    }
    return console.log(result) ;
  }
  generarCaracteres(3,"d")
  
// -------------EJERCICIO 4----------------------------------------
function sumaArreglo(arr) {
    var suma = 0;
    
    for (var i = 0; i < arr.length; i++) {
      suma += arr[i];
    }
    
    return console.log("la longitud del arraglo es; ", arr.length , "la suma de todos los elementos es: ", suma);
  }
  sumaArreglo([1,3,4])
  

// -------------EJERCICIO 5----------------------------------------

  function multiplicarArreglo(arr) {

    var menor = arr[0];
    var mayor = arr[0];
    
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < menor) {
        menor = arr[i];
      }
      
      if (arr[i] > mayor) {
        mayor = arr[i];
      }
    }
    
    return console.log(menor * mayor );
  }
  multiplicarArreglo([2,6,8])

  // -------------EJERCICIO 6----------------------------------------

  function booleanoArray(arr1, arr2) {
    var nuevoArreglo = arr1.concat(arr2);
    
    return console.log(nuevoArreglo.length >= 10) ;
  }
  booleanoArray([4, 5, 6, 7],[1, 2, 3] );
  
    
// -------------EJERCICIO 7----------------------------------------

function funcionArray(arr1, arr2) {
    var arregloUnido = arr1.concat(arr2);
    var arregloMultiplicado = [];
  
    for (var i = 0; i < arregloUnido.length; i++) {
      arregloMultiplicado.push(arregloUnido[i] * 2);
    }
  
    return console.log(arregloMultiplicado );
  }
funcionArray([1, 5, 3],[2, 5, 2] );
