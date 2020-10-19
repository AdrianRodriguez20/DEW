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
2.Escribir una función que acepte al menos un argumento (el primer argumento debe ser obligatorio, 
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
3.Realizar una función en JS que dado un DNI (comprobar que es un número entre 0 y 99999999), 
devuelva la letra asociado al mismo. Esta letra se calcula como el módulo (resto) de la división
del número del DNI entre 23, y a partir del resto se escoge una de las siguientes letras según 
la posición: TRWAGMYFPDXBNJZSQVHLCKET. Por ejemplo, para el DNI 12345678, al dividir entre 23 se
obtiene como resto 14, por lo que le corresponde la letra 'Z', siendo el DNI correcto 12345678Z.
  */
function validarNumDNI(numDNI) { // creamos una funcion para validar que el dni tiene entre 0 y 99999999
  var patt = new RegExp(/^[0-9]{1,8}$/);
  var validar = patt.test(numDNI);
  return validar;
}

function letraDNI(numDNI) {
  let resultado = "";
  let resto;
  let cadena = "TRWAGMYFPDXBNJZSQVHLCKE";

  if (validarNumDNI(numDNI) == true) { //si pasa la validación procedemos a calcular el número

    resto = parseInt(numDNI % 23); // hacemos el modulo del número del dni 
    for (let i = 0; i < cadena.length; i++) {
      resultado = cadena.charAt(resto); //y buscamos en número que ocuparía este (módulo) en la cadena (TRWAGMYFPDXBNJZSQVHLCKET)
    }
  } else {
    resultado = "El número introducido no cúmple con los parámetros establecidos";
  }


  return resultado;
}

/*
4.Crear una función que genere un array aleatorio, usando 3 parámetros: número de elementos 
(por defecto 10, valor mínimo del elemento (por defecto 100), valor máximo (por defecto 200).
*/

function arrayAleatorio(numElementos = 10, valorMin = 100, valorMax = 200) { //establecemos los parámetros predefinidos 
  var arrayAleatorio = new Array(numElementos); // creamos el array 
  for (let i = 0; i < arrayAleatorio.length; i++) {
    arrayAleatorio[i] = Math.floor(Math.random() * (valorMax - valorMin + 1)) + (valorMin); // introducimos los valores aleatorios , 
    console.log(arrayAleatorio[i]);                                                         // para ello utilizamos el Math.random y para reflejarlo como un entero utilizamos el Math.floor
                                                                                            // y establecemos los límites.
  }
}

/*
5.Usando la función del ejercicio 1, generar un array aleatorio de 20 elementos entre 20 y 100 y luego ordenarlo.
*/
function arrayAleatorio(numElementos = 20, valorMin = 20, valorMax = 100) {
  var temp;

  var arrayAleatorio = new Array(numElementos);
  for (let i = 0; i < arrayAleatorio.length; i++) { //utilizamos el random del ejercicio anterior
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
    console.log(arrayAleatorio[i]); //mostramos el array

  }
}

/*
6.Crear una función que mezcle los elementos de un array en orden aleatorio. Probar con el array ordenado creado en el ejercicio anterior
*/
function desordenarArray(arrayOrdenado) {
  var temp;
  var posRandom;
  for (let i = 0; i < arrayOrdenado.length - 1; i++) {
    posRandom = Math.floor(Math.random() * arrayOrdenado.length); // con el random y sabiendo la logitud del array creamos posiciónes alatorias
    temp = arrayOrdenado[i]; // para los numeros y los intercambiamos 
    arrayOrdenado[i] = arrayOrdenado[posRandom];
    arrayOrdenado[posRandom] = temp;
  }

  for (let i = 0; i < arrayOrdenado.length; i++) { // mostramos el array
    console.log(arrayOrdenado[i]);

  }
}
/* 
7.Recorrer un array aleatorio generado con la función del ejercicio 1 (15 elementos entre -10 y 20) y para cada elemento x, gestionar un nuevo array de la siguiente forma:
x <= -5: Eliminar el primer elemento del array
-5 < x <= 0: Eliminar el último elemento del array
0 < x <=  10: Añadir x al principio del array
10 < x <=  10: Añadir x al final del array
Mostrar un mensaje de texto para cada número indicando el valor de x, la operación realizada (eliminar o añadir, al principio o al final), el número añadido/eliminado 
y el tamaño del array tras realizar la operación
*/

/*
8.Crear una función que acepte un array y devuelva otro array con la raíz cuadrada de cada elemento. Probar con un array aleatorio de 20 números entre 60 y 100.
*/
function raizCuadradaArray(numElementos = 20, valorMin = 60, valorMax = 100) { //creamos un array aleatorio con los parámetros establecidos 
  var arrayAleatorio = new Array(numElementos);
  for (let i = 0; i < arrayAleatorio.length; i++) {
    arrayAleatorio[i] = Math.floor(Math.random() * (valorMax - valorMin + 1)) + (valorMin);

  }
  var arrayRaiz = new Array(numElementos); // creamos un nuevo array 
  for (let i = 0; i < arrayRaiz.length; i++) {
    arrayRaiz[i] = Math.sqrt(arrayAleatorio[i]); //y copiamos las raices cuadradas en el nuevo array
    console.log(arrayRaiz[i]); //lo mostramos para comprobar

  }
}
/* 
9.Crear una función que devuelva el valor máximo y mínimo del array, e indique el índice de estos valores (si el valor se repite, informar sólo sobre la primera vez que aparezca).
 Probar con un array aleatorio de 20 números entre -100 y 100.
*/
function valorMaxyMin(numElementos = 20, valorMin = -100, valorMax = 100) {
  var tempA = 0;
  var tempB = 0;
  var arrayAleatorio = new Array(numElementos);
  var posMin;
  var posMax;
  for (let i = 0; i < arrayAleatorio.length; i++) { //creamos el array aleatorio
    arrayAleatorio[i] = Math.floor(Math.random() * (valorMax - valorMin + 1)) + (valorMin);
    console.log(arrayAleatorio[i]);
  }

  for (let i = 0; i < arrayAleatorio.length - 1; i++) {

    if (arrayAleatorio[i] > tempA) { // Buscamos el valor máximo y el posición del mismo
      tempA = arrayAleatorio[i];
      posMax = i;
    }

  }

  for (let i = 0; i < arrayAleatorio.length - 1; i++) { // Buscamos el valor mínimo y el posición del mismo
    
    if (arrayAleatorio[i] < tempB) {
      tempB = arrayAleatorio[i];
      posMin = i;
    }

  }


  var valorMin = "Valor Min:  " + tempB + " Con la posición " + posMin
  var valorMax = "Valor Máximo:  " + tempA + " Con la posición " + posMax;

  return valorMin + ", " + valorMax;
}
/*
10.Crear un array de 50 números aleatorios enteros aleatorios entre 10 y 20. Para cada elemento, informar si es la primera vez que aparece, o si se trata de un elemento repetido.
*/

function busquedaArray(numElementos = 50, valorMin = 10, valorMax = 20) {
  var arrayAleatorio = new Array(numElementos); //se crea el array 
 
  var arrayNum = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,); // array de  comprobación repetidos
  for (let i = 0; i < arrayAleatorio.length; i++) {
      arrayAleatorio[i] = Math.floor(Math.random() * (valorMax - valorMin + 1)) + (valorMin);
      console.log(arrayAleatorio[i]);

    for (let j = 10; j < arrayNum.length; j++) {

      if (arrayAleatorio[i]==j) {  // si el número random coincide con la posición del nuevo array 
          if (arrayNum[j] == 0){  // entramos al if , si arrayNum[j] es igual a O , es la primera vez que aparece.
              arrayNum[j]=1; // y cambiamos a 1;
              console.log("Es la primera vez que aparece");  
          }else {
              console.log("Numero repetido")
          }
        
      }  
  }
}

}


/* 
11.Modificar el ejercicio anterior para que si el número ya existía, nos indique cuántas veces había aparecido con anterioridad.
*/
function busquedaArray(numElementos = 50, valorMin = 10, valorMax = 20) {
  var arrayAleatorio = new Array(numElementos); //se crea el array 
 
  var arrayNum = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,); // array de  comprobación repetidos
  for (let i = 0; i < arrayAleatorio.length; i++) {
      arrayAleatorio[i] = Math.floor(Math.random() * (valorMax - valorMin + 1)) + (valorMin);
      console.log(arrayAleatorio[i]);

    for (let j = 10; j < arrayNum.length; j++) {

      if (arrayAleatorio[i]==j) {   // si el número random coincide con la posición del nuevo array 
          if (arrayNum[j] == 0){ // entramos al if , si arrayNum[j] es igual a O , es la primera vez que aparece.
              arrayNum[j]=1; // y cambiamos a 1;
              console.log("Es la primera vez que aparece");  
          }else { 
          
              console.log("Numero repetido: "+ ++arrayNum[j]) //incrementamos arrayNum[j]
          }
        
      }  
  }
}

}

/*
12.Escribir una función que busque la cadena "arriba" en un texto. La función deberá informar si encuentra o no esta cadena en el texto y, si la encuentra, nos deberá mostrar el texto reemplazando "arriba" por "abajo".
*/
function busquedaPalabra(texto) {

  var resultado;
  var patt = new RegExp(/\barriba\b/); // creamos un pattern 
  var palabraEnTexto = patt.test(texto); // .test() nos devuelve si está en el texto 
  var textoModificado = texto.replace(/\barriba\b/, 'abajo')
  if (palabraEnTexto == true) {
    resultado = "Se encuentra la palabra en el texto -> " + textoModificado; // si está lo modifica cambiando por abajo
  } else {
    resultado = "La palabra no se encuentra en el texto"; // si no nos notifica que no hay nada
  }
  return resultado;
}