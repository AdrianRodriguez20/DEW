/*
1-    Realiza 3 ejercicios anteriores utilizando operador ternario.
*/

/*
2-    Realiza una función sumatoria utilizando “arguments”. Utiliza un bucle for. El usuario debe introducir 7 números. Resultado muéstralo en consola.
*/


/*
3-    Realiza una función que calcule la media de 5 notas introducidas por el usuario. Utiliza “arguments”. Muestra el resultado por consola.
*/

/*
4-    Realiza la validación de una matrícula de un coche 0000-XXX mediante expresiones regulares.
*/
function validarMatricula(matricula) {
    var patt = new RegExp(/[0-9]{4}[-][A-Z]{3}/);
    var validar = patt.test(matricula);
    return validar;
}
/*
5-    Valida un nombre de usuario en twitter, empieza por @ y puede contener letras mayúsculas y minúsculas, números, guiones y guiones bajos.
*/
function validarUsuarioTwitter(nick) {
    var patt = new RegExp(/@([a-z]|[A-Z]|[0-9]|[-]|[_]){1,15}/);
    var validar = patt.test(nick);
    return validar;
}
/*
6-    Crear una expresión regular que valide una dirección de email. Para simplificar, los valores antes de la @ pueden contener cualquier carácter alfanumérico, y los caracteres 
. y _, mientras que los valores tras la @ pueden contener caracteres alfanuméricos, y el tipo de dominio puede tener una longitud de 2 o 3 caracteres.
*/
function validarCorreo(correo) {
    var patt = new RegExp(/([a-z]|[0-19]|[.]|[_]){1,}@[a-z]{1,}[.]([a-z]|[0-19]){2,3}/);
    var validar = patt.test(correo);
    return validar;
}

/*
7-    Crear una expresión regular valide una fecha en formato "XX/XX/XXXX", donde "X" es un dígito. Probarlo con la expresión: "Nací el 05/04/1982 en Donostia.".
*/

function validarFecha(fecha) {
var patt = new RegExp(/\d{1,2}\/\d{1,2}\/\d{4}/);
var validar = patt.test(fecha);
    return validar;
}

/*
8-    Realiza 3 ejercicios anteriores utilizando funciones anónimas.
*/

/*
9-    Analiza los diferentes métodos de string y crea 3 ejercicios aplicados donde el usuario deba intervenir.
*/

/*
10-  Analiza los diferentes métodos de arrays y crea 3 ejercicios aplicados donde el usuario deba intervenir.
*/