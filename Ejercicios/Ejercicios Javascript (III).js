/*1. Realizar una función que indicando un texto y un carácter (ambos obligatorios, 
comprobar que el segundo parámetro es realmente un único carácter), nos diga
 cuántas veces aparece el carácter en el texto.
 */

function numCaracteres(texto = isRequired(), caracter = isRequired()) {
  var vecesCaracter = 0;

  var array = texto.split(''); //con un split separamos todas las letras y las guardamos en un array

  for (let i = 0; i < array.length; i++) {  //recorremos el bucle buscando coincidencias
    if (array[i].toLowerCase() == caracter.toLowerCase()) { // tanto las letras del array y el cáracter a buscar los pasamos a mnúsculas para que no existan errores a la hora de contar
      vecesCaracter++; // incrementamos las veces que aparece el caracter con cada iteración
    }

  }

  return vecesCaracter;
}

/*
Escribir una función que acepte al menos un argumento (el primer argumento debe ser obligatorio, 
mostrar un mensaje de error si no se indica, luego se pueden indicar tantos argumentos como desee 
el usuario) y que devuelva la suma y la media de todos los elementos. Comprobar que todos los argumentos
sean números e ignorar los que no lo sean, mostrando un aviso (por ejemplo: ¡AVISO! El argumento número 
3 "Hola" no es un número, lo ignoramos").
*/


function sumaYmedia() {
  var resultado;
  var media = 0;
  var suma = 0;
  var arrayNum = new Array(arguments.length); //Creamos un array con la longitud de la cantidad de argumentos 
  var iteraciones = 0;

  if (arguments.length == 0) { //Primero verificamos si hay al menos un argumento 
    resultado = "Debes introducir un argumento como mínimo";
  } else { 

    for (let i = 0; i < arguments.length; i++) {
      if (typeof (arguments[i]) == 'string') { //comprobamos si los argumentos dados por el usuario son palabras
        console.log("¡AVISO! El argumento número  " + i + " " + arguments[i] + " no es un número, lo ignoramos"); //lanzamos un aviso al usuario en caso de que no sea un número
      } else {
        arrayNum[i] = arguments[i]; // en el caso de que sea un número almacenamos este en el array que previamente creamos 

      }

    }

    for (let i = 0; i < arrayNum.length; i++) { 
      if (typeof (arrayNum[i]) !== 'undefined') { // a continuación si la casilla del array no está vacia procedemos a la suma 
        suma += arrayNum[i]; 
        iteraciones++ //añadimos un contador para saber el número de argumentos que estamos sumando, ya que el length no nos sirvirá porque también contará las casillas vacias 
        // y para la media supondrá un problema. 
      }
    }

    media = suma / iteraciones;
    resultado = "La suma de todos los números es " + suma + " y la media: " + media;


  }
  return resultado;
}
/*
Realizar una función en JS que dado un DNI (comprobar que es un número entre 0 y 99999999), 
devuelva la letra asociado al mismo. Esta letra se calcula como el módulo (resto) de la división
del número del DNI entre 23, y a partir del resto se escoge una de las siguientes letras según 
la posición: TRWAGMYFPDXBNJZSQVHLCKET. Por ejemplo, para el DNI 12345678, al dividir entre 23 se
obtiene como resto 14, por lo que le corresponde la letra 'Z', siendo el DNI correcto 12345678Z.
  */
function letraDNI(numDNI) {
  //comprobar que es un número entre 0 y 99999999
  let letraDNI = "";
  let resto;
  let cadena = "TRWAGMYFPDXBNJZSQVHLCKE";
  resto = parseInt(numDNI % 23);
  for (let i = 0; i < cadena.length; i++) {
    letraDNI = cadena.charAt(resto);
  }

  return letraDNI;
}

/*
Crear una función que genere un array aleatorio, usando 3 parámetros: número de elementos 
(por defecto 10, valor mínimo del elemento (por defecto 100), valor máximo (por defecto 200).
*/

function arrayAleatorio(numElementos = 10, valorMin = 100, valorMax = 200) { //revisar limites
  var arrayAleatorio = new Array(numElementos);
  for (let i = 0; i < arrayAleatorio.length; i++) {
    arrayAleatorio[i] = Math.floor(Math.random() * (valorMax - valorMin + 1)) + (valorMin);
    console.log(arrayAleatorio[i]);

  }
}

/*
Usando la función del ejercicio 1, generar un array aleatorio de 20 elementos entre 20 y 100 y luego ordenarlo.
*/
function arrayAleatorio(numElementos = 20, valorMin = 20, valorMax = 100) {
  var temp;

  var arrayAleatorio = new Array(numElementos);
  for (let i = 0; i < arrayAleatorio.length; i++) {
    arrayAleatorio[i] = Math.floor(Math.random() * (valorMax - valorMin + 1)) + (valorMin);

  }



  for (let i = 0; i < arrayAleatorio.length - 1; i++) {
    for (let j = i + 1; j < arrayAleatorio.length; j++) {
      if (arrayAleatorio[i] > arrayAleatorio[j]) {
        //Intercambiamos valores
        temp = arrayAleatorio[i];
        arrayAleatorio[i] = arrayAleatorio[j];
        arrayAleatorio[j] = temp;

      }
    }
  }

  for (let i = 0; i < arrayAleatorio.length; i++) {
    console.log(arrayAleatorio[i]);

  }
}

/*
Crear una función que mezcle los elementos de un array en orden aleatorio. Probar con el array ordenado creado en el ejercicio anterior
*/
function desordenarArray(array){

}
/* 
Recorrer un array aleatorio generado con la función del ejercicio 1 (15 elementos entre -10 y 20) y para cada elemento x, gestionar un nuevo array de la siguiente forma:
x <= -5: Eliminar el primer elemento del array
-5 < x <= 0: Eliminar el último elemento del array
0 < x <=  10: Añadir x al principio del array
10 < x <=  10: Añadir x al final del array
Mostrar un mensaje de texto para cada número indicando el valor de x, la operación realizada (eliminar o añadir, al principio o al final), el número añadido/eliminado y el tamaño del array tras realizar la operación
*/

/*
Crear una función que acepte un array y devuelva otro array con la raíz cuadrada de cada elemento. Probar con un array aleatorio de 20 números entre 60 y 100.
*/
function raizCuadradaArray(numElementos = 20, valorMin = 60, valorMax = 100) {
  var arrayAleatorio = new Array(numElementos);
  for (let i = 0; i < arrayAleatorio.length; i++) {
    arrayAleatorio[i] = Math.floor(Math.random() * (valorMax - valorMin + 1)) + (valorMin);

  }
  var arrayRaiz = new Array(numElementos);
  for (let i = 0; i < arrayRaiz.length; i++) {
    arrayRaiz[i] = Math.sqrt(arrayAleatorio[i]);
    console.log(arrayRaiz[i]);

  }
}
/* 
Crear una función que devuelva el valor máximo y mínimo del array, e indique el índice de estos valores (si el valor se repite, informar sólo sobre la primera vez que aparezca).
 Probar con un array aleatorio de 20 números entre -100 y 100.
*/
function valorMaxyMin(numElementos = 20, valorMin = -100, valorMax = 100) {
  var tempA = 0;
  var tempB = 0;
  var arrayAleatorio = new Array(numElementos);
  for (let i = 0; i < arrayAleatorio.length; i++) {
    arrayAleatorio[i] = Math.floor(Math.random() * (valorMax - valorMin + 1)) + (valorMin);
    console.log(arrayAleatorio[i]);
  }

  for (let i = 0; i < arrayAleatorio.length - 1; i++) {
    for (let j = i + 1; j < arrayAleatorio.length; j++) {
      if (arrayAleatorio[i] > arrayAleatorio[j]) {
        if (tempA < arrayAleatorio[i])
          tempA = arrayAleatorio[i];

      }
    }
  }

  for (let i = 0; i < arrayAleatorio.length - 1; i++) {
    for (let j = i + 1; j < arrayAleatorio.length; j++) {        //buscar indices
      if (arrayAleatorio[i] < arrayAleatorio[j]) {
        if (tempB > arrayAleatorio[i])
          tempB = arrayAleatorio[i];

      }
    }
  }



  var valorMin = "Valor Min:  " + tempB
  var valorMax = "Valor Máximo:  " + tempA;

  return valorMin + ", " + valorMax;
}
/*
Crear un array de 50 números aleatorios enteros aleatorios entre 10 y 20. Para cada elemento, informar si es la primera vez que aparece, o si se trata de un elemento repetido.
*/

function buscar(arrayAleatorio) {
  var veces = 0;
  for (let j = 0; j < arrayAleatorio.length; j++) {
    if (arrayAleatorio[j] == 12) {
      veces++
      do {
        console.log("Es la primera vez que aparece");
      } while (veces < 1);

    }
  }
}

function busquedaArray(numElementos = 50, valorMin = 10, valorMax = 20) {
  var arrayAleatorio = new Array(numElementos);
  for (let i = 0; i < arrayAleatorio.length; i++) {
    arrayAleatorio[i] = Math.floor(Math.random() * (valorMax - valorMin + 1)) + (valorMin);
    console.log(arrayAleatorio[i]);
    buscar(arrayAleatorio);
  }



}

//continuar



/* 
Modificar el ejercicio anterior para que si el número ya existía, nos indique cuántas veces había aparecido con anterioridad.
*/

/*
Escribir una función que busque la cadena "arriba" en un texto. La función deberá informar si encuentra o no esta cadena en el texto y, si la encuentra, nos deberá mostrar el texto reemplazando "arriba" por "abajo".
*/
function busquedaPalabra(texto) {

  var resultado;
  var patt = new RegExp(/\barriba\b/);
  var palabraEnTexto = patt.test(texto);
  var textoModificado = texto.replace(/\barriba\b/, 'abajo')
  if (palabraEnTexto == true) {
    resultado = "Se encuentra la palabra en el texto -> " + textoModificado;
  } else {
    resultado = "La palabra no se encuentra en el texto";
  }
  return resultado;
}