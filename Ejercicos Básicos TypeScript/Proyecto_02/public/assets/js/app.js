"use strict";
/*
1. Implementar el control de 3 variables (a, b, c) para que se muestre un mensaje de error
cuando se produzca alguna de las siguientes situaciones (el mensaje de error debe indicar
qué situación(es) no se cumplieron):
a) Al menos una de las 3 variables es negativa
b) Las tres variables son iguales a 0
c) Las suma de las 3 variables es mayor que 10 Y las tres variables son diferentes
*/
var aSTR;
var bSTR;
var cSTR;
aSTR = Number(prompt("Introduce el valor de la variable a: "));
bSTR = Number(prompt("Introduce el valor de la variable b: "));
cSTR = Number(prompt("Introduce el valor de la variable c: "));
var a = aSTR;
var b = bSTR;
var c = cSTR;
if (a < 0 || b < 0 || c < 0) {
    console.log("Al menos una de las 3 variables es negativa");
}
else {
    console.log("Ninguna variable es negativa");
}
;
if ((a == 0) && (b == 0) && (c == 0)) {
    console.log("Las tres variables son iguales a 0");
}
else {
    console.log("Las tres variables no son iguales a 0");
}
;
if ((a + b + c > 10) && (a !== b || b !== c)) {
    console.log("Las suma de las 3 variables es mayor que 10 Y las tres variables son diferentes");
}
else {
    console.log("Las suma de las 3 variables es menor que 10 o las tres variables no son diferentes");
}
;
/*
2. Diseñar una función que acepta un argumento x y que muestre los siguientes mensajes:
a) ‘Este es muy fácil... ¡prueba otro!’, si x es 0
b) ‘El número es par’, si x es 2, 4 ó 6
c) ‘El número es impar’, si x es 1, 3 ó 5
d) ‘¡¡Sólo sé contar de 0 a 6!!’, para los demás casos
*/
function mifuncion(x) {
    var resultado;
    if (x == 0) {
        resultado = "‘Este es muy fácil... ¡prueba otro!’, si x es 0";
    }
    else if ((x % 2 == 0) && ((x > 0) && (x < 6))) {
        resultado = "‘El número es par’, si x es 2, 4 ó 6";
    }
    else if ((x % 2 !== 0) && ((x > 0) && (x < 6))) {
        resultado = "‘El número es impar’, si x es 1, 3 ó 5";
    }
    else {
        resultado = " ‘¡¡Sólo sé contar de 0 a 6!!’, para los demás casos";
    }
    return resultado;
}
/*
3. Realizar un bucle for que actualice una variable i y otra j de la siguiente forma:
a) i comienza en 0, j comienza en 20
b) El bucle debe parar cuando i sea mayor que 8 ó j sea menor que 0
c) i se incrementa de 1 en 1, j se decrementa de 3 en 3
d) Dentro del bucle sólo puede estar la sentencia console.log(i, j)
*/
for (var i = 0, j = 20; (j > 0) && (i < 9); i++, j = j - 3) {
    console.log(i, j);
}
;
/*
4. En el siguiente bucle while tenemos que tener cuidado porque hay operaciones que pueden dar error
(no puede haber raíces cuadradas de números negativos, ni divisiones por cero).
let result = 1, arg1, arg2, res1, res2;
while (result > 0) {
  arg1 = Math.random() - 0.5;
  res1 = Math.sqrt(arg1);
  arg2 = Math.random();
  res2 = res1/(arg1 + arg2);
  result = res1 + res2;
  console.log(result);
}
*/
/*
a) Cambia el bucle while usando continue y break para que si hay una raíz cuadrada de un número negativo
directamente pase a la siguiente iteración. En el caso de haber una división por cero, el bucle debe
detenerse inmediatamente.
*/
var solucion = 1;
var arg1;
var arg2;
var res1;
var res2;
while (solucion > 0) {
    arg1 = Math.random() - 0.5;
    res1 = Math.sqrt(arg1);
    if (res1 < 0) {
        continue;
    }
    arg2 = Math.random();
    res2 = res1 / (arg1 + arg2);
    if (res2 == 0) {
        break;
    }
    solucion = res1 + res2;
    console.log(solucion);
}
/*
b) Prueba a realizar el apartado anterior sin usar ni continue ni break. ¿Es más sencillo?
*/
/*
c) Cambia el bucle while original para que se ejecute sin tener que asignar un valor inicial a la variable result.
*/
/*
let resul:number;
let argu1:number;
let argu2:number;
let resu1:number;
let resu2:number;
do{
    argu1 = Math.random() - 0.5;

    resu1 = Math.sqrt(argu1);
    if (resu1 < 0) {
        continue;
    }
    argu2 = Math.random();
    resu2 = resu1 / (argu1 + argu2);
    if (resu2 == 0) {
        break;
    }
  
   
    resul = resu1 + resu2;

    console.log(resul);
}while(resul > 0) ;
*/
/*
5. La letra del NIF se calcula dividiendo la parte numérica (8 primeras cifras) por 23.
A partir del resto de esta división se asigna una letra según su posición en la siguiente
cadena: `'TRWAGMYFPDXBNJZSQVHLCKE'`.
Por ejemplo, el DNI 64253469 da como resto 2 al dividir por 23 (tercera posición, ya que
empieza por 0), por lo que le corresponde la letra `W`.
Implementar una función que calcule la letra a partir del número del NIF.
*/
function letraDNI(numDNI) {
    var letraDNI = "";
    var resto;
    var cadena = "TRWAGMYFPDXBNJZSQVHLCKE";
    resto = numDNI % 23; // hacemos el modulo del número del dni 
    for (var i = 0; i < cadena.length; i++) {
        letraDNI = cadena.charAt(resto); //y buscamos en número que ocuparía este (módulo) en la cadena (TRWAGMYFPDXBNJZSQVHLCKET)
    }
    return letraDNI;
}
/*
6. Para convertir grados Farenheit (`F`) a Celsius (`C`) se usa la siguiente expresión:
 `C = (F − 32) * 5/9`. Implementar una función que realice esta conversión
  (comprueba que 32ºF son 0ºC y que 75.2ºF son 24ºC).
*/
function conversorTemp(gradosFarenheit) {
    var resultadoCelsius;
    resultadoCelsius = (gradosFarenheit - 32) * (5 / 9);
    return resultadoCelsius;
}
/*
7. En el ejercicio anterior, añadir un argumento opcional booleano de forma que si está a
`False` (valor por defecto) devuelve sólo el resultado numérico (p.ej: `24`), mientras
que si se indica `True` le añade la unidad `ºC` (p.ej `24ºC`).
*/
function conversorTemperatura(gradosFarenheit, simbolo) {
    var resultadoCelsius;
    var simbolo;
    var solucion;
    resultadoCelsius = (gradosFarenheit - 32) * (5 / 9);
    if (simbolo == true) {
        solucion = resultadoCelsius + "ºC";
    }
    else {
        solucion = resultadoCelsius + "";
    }
    return solucion;
}
/*
8.Genera una lista que contenga el cuadrado de los números pares y el cubo de los impares entre 1 y 100 (inclusive).
*/
for (var i = 1; i < 101; i++) {
    if (i % 2 == 0) { //utilizamos el módulo de i
        console.log(i * i);
    }
}
for (var i = 1; i < 101; i++) {
    if (i % 2 !== 0) {
        console.log(i * i);
    }
}
/*
9. Escribir un programa que proporcione el desglose en el número mínimo de billetes y monedas de una cantidad entera
cualquiera de euros dada. Recuerda que los billetes y monedas de uso legal disponibles hasta 1 euro son de:
500, 200, 100, 50, 20, 10, 5, 2 y 1 euros. Para ello deben solicitar al usuario un número entero (comprobar que lo es)
 y desglosar la cantidad en el número mínimo de billetes y monedas.
*/
function desgloseBilletes(cantidadDinero) {
    var cash = Array(500, 200, 100, 50, 20, 10, 5, 2, 1); // En este array están todos los billetes y monedas.
    var cambio = Array(0, 0, 0, 0, 0, 0, 0, 0, 0); // Y en este otro los billetes y monedas a devolver
    for (var i = 0; i < cash.length; i++) { // Recorremos los billetes y monedas
        if (cantidadDinero >= cash[i]) { // Si el importe actual, es superior a los billetes y monedas
            cambio[i] = Math.floor(cantidadDinero / cash[i]); // obtenemos cantidad de  billetes y monedas
            cantidadDinero = (cantidadDinero - (cambio[i] * cash[i])); // actualizamos el valor del importe que nos queda por didivir
        }
    }
    for (i = 0; i < cash.length; i++) { // Bucle para mostrar el resultado
        if (cambio[i] > 0) {
            if (cash[i] >= 5)
                console.log("Hay: " + cambio[i] + " billetes de: " + cash[i] + " euro.");
            else
                console.log("Hay: " + cambio[i] + " monedas de: " + cash[i] + " euro.");
        }
    }
}
/*
10. Muestra la fecha y hora actuales en formato: “DD/MM/YYYY hh:mm:ss TimeZone”.
*/
var momentoActual = new Date();
var dia = momentoActual.getDay();
var mes = momentoActual.getMonth();
var anio = momentoActual.getFullYear();
var hora = momentoActual.getHours();
var minuto = momentoActual.getMinutes();
var segundo = momentoActual.getSeconds();
var horaImprimible = hora + " : " + minuto + " : " + segundo;
var fechaImprimible = dia + " / " + mes + " / " + anio;
console.log(fechaImprimible + "    " + horaImprimible + " TimeZone");
/*
11. Construye una fecha a partir del texto “02/04/2015”. Muestra la fecha con console.log,
¿qué obtienes? Prueba ahora con “2015-04-02”.¿Cómo podrías crear una fecha con el texto “April 02, 2015”?
*/
var fecha = new Date("02/04/2015");
console.log(fecha);
var fechaDos = new Date("2015-04-02");
console.log(fechaDos);
var fechaTres = new Date("April 02, 2015");
console.log(fechaTres);
/*
12. ¿Cuántos segundos han pasado desde que naciste? ¿y minutos? ¿y horas? ¿y días?
Implementaruna función que dada una fecha cualquiera en formato “yyyy-mm-dd”, devuelva
cuánto tiempo ha pasado desde esa fecha. La función aceptará un segundo parámetro para
indicar en qué unidad se quiere obtener el resultado: ‘d’ → días, ‘h’ → horas,
‘m’ → minutos y ‘s’ → segundos. Si no es ninguna de estas unidades, se mostrará un error.
*/
function tiempoTranscurrido(fechaNacimiento, unidad) {
    var resultado;
    var fechaUsuario = new Date(fechaNacimiento);
    var fechaActual = new Date();
    var diferenciaMs = Number(fechaActual) - Number(fechaUsuario); // new Date nos da el tiempo en milisegundos , así que restamos la fecha actual entre la que nos da el usuario
    switch (unidad) { // y según la unidad , dividimos entre más o menos milisegundos.
        case "d":
            resultado = diferenciaMs / 86400000;
            break;
        case "h":
            resultado = diferenciaMs / 3600000;
            break;
        case "m":
            resultado = diferenciaMs / 60000;
            break;
        case "s":
            resultado = diferenciaMs / 1000;
            break;
        default:
            console.log("Error , fecha mal introducida.");
            break;
    }
    return resultado;
}
/*
13. Implementar una función hdec2hms(x) que transforme una hora en formato decimal a su equivalente
en formato hh:mm:ss (en texto). Por ejemplo, 8.25 = “8:15:00” y 10.12 = “10:07:12”.Implementar
también la función inversa hms2hdec(h,m,s).
*/
function hdec2hms(x) {
    var arrayHora = x.split("."); //con el split separamos la hora que nos da el usuario  y lo guardamos en un array
    var hora = Number(arrayHora[0]); // la posición 0 , es la hora 
    var minuto = (Number(arrayHora[1]) * 0.6); // a continuación hacemos la conversión a minutos 
    var segundo = ((Number(arrayHora[1]) * 0.6) - (minuto)) * 100; // y después a segundos 
    var horaImprimible = hora + " : " + minuto + " : " + segundo;
    return horaImprimible;
}
function inversaHdec2hms(x) {
    var arrayHora = x.split(":"); //con el split separamos la hora , minutos y segundos.
    var hora = Number(arrayHora[0]); // la posición 0 , es la hora 
    var decimal = (Number(arrayHora[1]) + (Number(arrayHora[2]) / 60) / 60); //pasamos los minutos y segundos a horas.
    var decimalImprimir = String(decimal).match(/.[0-9][0-9]/); // y mostramos solo dos caracteres
    var horaImprimible = hora + "" + decimalImprimir;
    return horaImprimible;
}
/*
14. Como hemos visto, javascript, como muchos otros lenguajes, utilizan el “UNIX EPOCH”
que cuenta el tiempo a partir de la medianoche del 1 de enero de 1970. Sin embargo,
hay otros tipos de fecha que tienen otro origen del tiempo. Por ejemplo, la fecha juliana
empieza a contabilizar el tiempo desde las 12:00 (mediodía) del 1 de enero de 4713 a.C.,
e indica el número de días (y fracciones) que han transcurrido desde ese momento. La fecha
juliana se suele utilizar para calcular el tiempo que ha transcurrido desde eventos que
sucedieron en la antigüedad y es aún ampliamente usada para fenómenos astronómicos e
históricos lejanos. En la wikipedia (https://es.wikipedia.org/wiki/Fecha_juliana)
se puede encontrar la relación entre fecha juliana y tiempo Unix (contado a partir desde 1/1/1970),
siendo esta:
fecha_juliana = tiempo_unix + 2440587.5
Implementar una función que dada una fecha en texto (por ejemplo “2018-09-20”),
devuelva la fecha juliana equivalente.
Para realizar la suma, ten en cuenta que la fecha juliana almacena días, mientras que el tiempo_unix
en javascript contiene milisegundos, por lo que hay que transformarlo en días. Por cierto,
¿de dónde crees que ha salido el valor 2440587.5?
*/
function fechaJuliana(fechaGregoriana) {
    var fechaUsuario = new Date(fechaGregoriana); //guardamos la fecha que  nos da el usuario 
    var fechaUnix = new Date('1970-1-1'); // y ka correspondiente a la fecha UNIX
    var diasMs = 86400000;
    var diferenciaMs = Number(fechaUsuario) - Number(fechaUnix); //restamos ambas fechas 
    var diferenciaEnDias = diferenciaMs / diasMs; // y dividimos los milisegundos en la equivalencia a un día
    var fechaJuliana;
    fechaJuliana = diferenciaEnDias + 2440587.5; // finalmente le sumamos  2440587.5 para saber la fecha juliana
    return fechaJuliana;
}
/*
15. Cuando hablamos de ángulos, normalmente utilizamos los grados sexagesimales (se suelen representar como “deg”,
     una circunferencia completa son 360º deg). Sin embargo, en trigonometría es más común utilizar los radianes
     (“rad”, una circunferencia completa son 2π rad).
De esta forma, 360º equivalen a 2π. Las funciones trigonométricas de javascript, como la mayoría de lenguajes,
trabajan en radianes, sin embargo en muchas ocasiones nosotros vamos a querer trabajaren grados. Por ello, se pide:
a) Implementar una función llamada deg2rad(x) que transforme de grados a radianes, y su inversa rad2deg(x)
*/
function deg2rad(x) {
    return x * Math.PI / 180;
}
function rad2deg(x) {
    return x * 180 / Math.PI;
}
/*
b) Implementar una función sinDeg(x)que devuelva el seno del ángulo x y otra función cosDeg(x) que devuelva
el coseno del ángulo x (en ambos casos x está en grados).
*/
function sinDeg(x) {
    return Math.sin(x * Math.PI / 180);
}
function cosDeg(x) {
    return Math.cos(x * Math.PI / 180);
}
/*
c) El seno y el coseno están relacionados por la siguiente ecuación: sin2x + cos2x = 1.
Utilizar esta relación para implementar una función sinDegAlt(x) que obtenga el seno de un ángulo x (en grados)
usando para ello la función cosDeg(x) anteriormente implementada.
*/
function sinDegAlt(x) {
    return Math.sqrt(1 - Math.pow(cosDeg(x), 2)); // despejamos el seno √ (1- cos(x)^2)
}
/*
Implementar también la función inversa al apartado anterior: cosDegAlt(x) usando para ello sinDeg(x)
*/
function cosDegAlt(x) {
    return Math.sqrt(1 - Math.pow(sinDeg(x), 2));
}
