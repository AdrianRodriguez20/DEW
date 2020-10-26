/*
1-    Realiza 3 ejercicios anteriores utilizando operador ternario.
*/
var palabraGanadora = "PARIS"; //establecemos la capital
var palabraUsuario = "";
var intentos = 3;

do {
    intentos--; //contador para cada vez que falle , se decrementen los intentos
    palabraUsuario = prompt("Introduce la capital de Francia: ");
    palabraUsuario.toUpperCase() == palabraGanadora ? console.log("Correcto ") : console.log("Incorrecto"); //si es correcto devuelve "Correcto", si no "Incorrecto".
    palabraUsuario.toUpperCase() == palabraGanadora ? intentos = 0 : console.log("Intentos restantes: " + intentos); //si es correcto los intentos son 0 y se acaba , si no muestra los intentos que quedan".
} while (intentos > 0);
//------------------------------------------------------------------------------------------------------------------------------//
function busquedaPalabra(texto) {

    var resultado;
    var patt = new RegExp(/\barriba\b/);  //creamos un patrón para buscar la palabra arriba
    var palabraEnTexto = patt.test(texto); 
    var textoModificado = texto.replace(/\barriba\b/, 'abajo') //si esta cambia la arriba por abajo
    palabraEnTexto == true ? resultado = "Se encuentra la palabra en el texto -> " + textoModificado : resultado = "La palabra no se encuentra en el texto"; 
    return resultado;
}
//------------------------------------------------------------------------------------------------------------------------------//


/*
2-    Realiza una función sumatoria utilizando “arguments”. Utiliza un bucle for. El usuario debe introducir 7 números. Resultado muéstralo en consola.
*/
function sumatorio() {
    var resultado = 0;
    for (let i = 0; i < arguments.length; i++) {
        resultado += arguments[i];

    }
    return resultado;
}

/*
3-    Realiza una función que calcule la media de 5 notas introducidas por el usuario. Utiliza “arguments”. Muestra el resultado por consola.
*/
function media() {
    var media = 0;
    var suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i]; //sumamos todos los argumentos

    }
    media = suma / arguments.length; // y para calcular la media lo dividimos entre la cantidad de los argumentoss

    return media;
}
/*
4-    Realiza la validación de una matrícula de un coche 0000-XXX mediante expresiones regulares.
*/
function validarMatricula(matricula) {
    var patt = new RegExp(/[0-9]{4}[-][A-Z]{3}/); //creamos un patrón (0000-XXX) para las matriculas con expresiones regulares
    var validar = patt.test(matricula); //buscamos en la matricula introducida por el usuario ese patron
    return validar; //si está devuelve true y si no false;
}
/*
5-    Valida un nombre de usuario en twitter, empieza por @ y puede contener letras mayúsculas y minúsculas, números, guiones y guiones bajos.
*/
function validarUsuarioTwitter(nick) {
    var patt = new RegExp(/@([a-z]|[A-Z]|[0-9]|[-]|[_]){1,15}/);  //creamos un patrón  para los nick con expresiones regulares
    var validar = patt.test(nick); //buscamos en el nick introducido por el usuario ese patron
    return validar;  //si está devuelve true y si no false;
}
/*
6-    Crear una expresión regular que valide una dirección de email. Para simplificar, los valores antes de la @ pueden contener cualquier carácter alfanumérico, y los caracteres 
. y _, mientras que los valores tras la @ pueden contener caracteres alfanuméricos, y el tipo de dominio puede tener una longitud de 2 o 3 caracteres.
*/
function validarCorreo(correo) {
    var patt = new RegExp(/([a-z]|[0-19]|[.]|[_]){1,}@[a-z]{1,}[.]([a-z]|[0-19]){2,3}/); //creamos un patrón  para validar los correos con expresiones regulares
    var validar = patt.test(correo); //buscamos en correo introducido por el usuario la estructura de ese patron
    return validar;  //si está devuelve true y si no false;
}

/*
7-    Crear una expresión regular valide una fecha en formato "XX/XX/XXXX", donde "X" es un dígito. Probarlo con la expresión: "Nací el 05/04/1982 en Donostia.".
*/

function validarFecha(fecha) {
    var patt = new RegExp(/\d{1,2}\/\d{1,2}\/\d{4}/);  //creamos un patrón (XX/XX/XXXX)  para validar una fecha con expresiones regulares
    var validar = patt.test(fecha);//buscamos en la fecha introducido por el usuario la estructura de ese patron
    return validar;  //si está devuelve true y si no false;
}
/*
8-    Realiza 3 ejercicios anteriores utilizando funciones anónimas.
*/
var sumatorio=function () { //funcion que calcula la suma de los valores introducidos por el usuario.
    var resultado = 0;
    for (let i = 0; i < arguments.length; i++) { //como no definimos el numero de parámetros , utilizamos arguments
        resultado += arguments[i]; //sumamos cada valor y lo introducimos dentro del resultado en cada iteración

    }
    return resultado;
}
//------------------------------------------------------------------------------------------------------------------------------//
var media =function (){
    var media = 0;
    var suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i]; //sumamos todos los argumentos

    }
    media = suma / arguments.length; // y para calcular la media lo dividimos entre la cantidad de los argumentoss

    return media;
}

//------------------------------------------------------------------------------------------------------------------------------//
var validarMatricula= function (matricula) { 
    var patt = new RegExp(/[0-9]{4}[-][A-Z]{3}/); //creamos un patrón (0000-XXX) para las matriculas con expresiones regulares
    var validar = patt.test(matricula); //buscamos en la matricula introducida por el usuario ese patron
    return validar; //si está devuelve true y si no false;
}
/*
9-    Analiza los diferentes métodos de string y crea 3 ejercicios aplicados donde el usuario deba intervenir.
*/
function refactorName (text,oldWord, newWord){ //el usuario introduce el texto que desea modificar así como la palabra que quiere sustituir y la nueva palabra
var text;
var textRefactored = text.replace(oldWord, newWord); //utilizamos el metodo replace para intercambiar las palabras.
return textRefactored ;
}

//------------------------------------------------------------------------------------------------------------------------------//
var text=prompt("Introduce el texto a separar") 
separarPalabras(text);
function separarPalabras (text){ //funcion que separa el texto en que introduce el usuario y lo convierte a un array con cada una de las palabras
    var array =text.split(" "); //para separar las palabras utilizamos el split , en este caso por espacios .
    return array; //devolvemos el array.
} 
//------------------------------------------------------------------------------------------------------------------------------//

function inicialEnMayuscula (texto){ //funcion que cambia la primera letra de la palabra que introduce el usuario por mayuscula
    var letraMayuscula= texto.charAt(0).toUpperCase()  // utilizamos el metodo charAt para coger la primera letra
    var palabraMayuscula="";
    for (let i = 1; i < texto.length; i++) {
        palabraMayuscula+=texto.charAt(i)  //separamos el resto de la palabra , por eso empezamos el bucle en i=1;
        
    }
   return letraMayuscula+palabraMayuscula; //finalmente delvolvemos la palabra con la primera letra mayúscula 
}
/*
10-  Analiza los diferentes métodos de arrays y crea 3 ejercicios aplicados donde el usuario deba intervenir.
*/

function buscarNumMayor (numMayor){ //funcion para buscar el primer número mayor del array al que has introducido 
    var array1 = [5, 12, 8, 130, 44 ,200 ,32 ,243]

    const found = array1.find(element => element > numMayor); //utilizamos el metodo find para buscar la primera coincidencia , en este caso mayor que el número que hemos introducido
    return found;

}
//------------------------------------------------------------------------------------------------------------------------------//

function loteria(num) { //En la función lotería introducimos un número y nos dice si este esta premiado o no
    var resultado;
    var array1 = [5, 12, 8, 130, 44 ,200 ,32 ,243]
    if(array1.indexOf(num)==-1){ //si el método indexOf nos devuelve -1 significa que no está en el array 
        resultado="No premiado";
    }else{ //por el contrario si se encuentra nos devolverá la posición del mismo . 
        resultado="Premiado"; //Por lo que estaría premiado
    }
    return resultado;
}

//------------------------------------------------------------------------------------------------------------------------------//


/*
11-   Realiza un programa para probar si el primer carácter de una cadena introducida por el usuario está en mayúsculas o no.
*/
function isUpperCase(texto) {
    var patt = new RegExp(/^[A-Z]/); //creamos un patrón  para saber si el primer caracter una cadena es una mayúscula con expresiones regulares
    var validar = patt.test(texto);//buscamos en la cadena introducida por el usuario ese patron
    return validar;  //si está devuelve true y si no false;
}
/*
12-   Realiza un script para buscar una fecha dentro de una cadena introducida por el usuario.
*/

function buscarFecha(texto) {
    var patt = new RegExp(/([0][1-9]|[12][0-9]|3[01])\/([0][1-9]|[1][0-2])\/(\d{4})/);  //creamos un patrón  para saber si hay una fecha en el texto.
    var coincidencia = texto.match(patt);  //con el match recoge la coincidencia 
    return coincidencia[0];//si está devuelve la fecha
}

/*
13-   Escriba un programa para contar el número de palabras en una cadena.
Nota :
- Elimine los espacios en blanco de la posición inicial y final.
- Convierta 2 o más espacios en 1.
- Excluya la nueva línea con un espaciado inicial.
*/
function contarpalabras(texto) {
    var arrayTexto = texto.split('');
    var numCaracteres=arrayTexto.length;

    if (arrayTexto[0] == " ") {
       numCaracteres--
    }
    if (arrayTexto[arrayTexto.length - 1] == " ") {
        numCaracteres--
     }
    for (let i = 0; i < arrayTexto.length; i++) {
        if ((arrayTexto[i] == " " ) && ( [arrayTexto[i + 1]] == " ")) {
            numCaracteres--
        }
    }

    return numCaracteres;

}
/*
14- Escriba una función para verificar si un valor dado por el usuario es un valor de IP o no.
El usuario puede incluir IP v4 o IP v6. Debe mostrase un resultado e indicar si es IP v4 o IP v6
*/

