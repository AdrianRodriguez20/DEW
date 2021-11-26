"use strict";
/*
ACTIVIDAD 1
Usando un bucle, calcula el resultado de 15 elevado a la 6.
No podrás utilizar el operador aritmético de elevar a una potencia.
*/
var base = 15;
var resultado = 1;
for (var i = 0; i < 6; i++) {
    resultado *= base; // con cada iteración 1*=15 , 15*=15 , 225*=15 , 3375*=15 ,.... 
}
;
/*
ACTIVIDAD 2
Usando un bucle, calcula la suma de los 10 primeros números naturales,
es decir, la suma de 1 + 2 + 3 ... + 10, e imprimir el resultado por
la consola. Para ello deberás recorrer el bucle y almacenar el valor
acumulado en cada iteración en una variable.
*/
var result = 0;
for (var i = 0; i < 11; i++) {
    result += i;
}
;
/*
ACTIVIDAD 3
Anida dos bucles for y muestra por la consola el resultado de los dos
índices en cada iteración. Realiza 10 iteraciones en cada bucle.
*/
for (var i = 1; i < 11; i++) {
    for (var j = 1; j < 11; j++) {
        console.log(i + "-" + j);
    }
    ;
}
;
/*
ACTIVIDAD 4
En este reto deberás mostrar el número posterior a un número introducido
por el usuario. Deberás solicitar al usuario que introduzca 3 números,
y para cada uno de ellos imprimir el número posterior.
*/
var arrayNumeros = new Array(3);
for (var i = 0; i < 3; i++) {
    arrayNumeros[i] = Number(prompt("Introduce el número: " + i));
}
;
for (var i = 0; i < 3; i++) {
    var suma = arrayNumeros[i] + 1;
    document.write(String(suma));
    document.write("<br/>");
}
/*
ACTIVIDAD 5
En este reto deberás sumar números e imprimirlos por la consola. Para ello,
deberás solicitar al usuario que introduzca 2 números e imprimir el resultado
por la consola. Este proceso deberás repetirlo 5 veces.
*/
for (var i = 0; i < 5; i++) {
    var arrayNumeros = new Array(2);
    for (var j = 0; j < 2; j++) {
        arrayNumeros[j] = Number(prompt("Introduce el número: " + j));
    }
    for (var j = 0; j < 2; j++) {
        console.log(arrayNumeros[j]);
        document.write("<br/>");
    }
    ;
}
;
/*
ACTIVIDAD 6
En este reto deberás sumar el valor de 5 números naturales. Para ello, deberás
solicitar al usuario que introduzca un número entero, calcular y sumar los 5
números siguientes e imprimir el resultado por la consola, y volver a repetir
este proceso 5 veces más.
*/
function actividad6() {
    var numUsuario;
    numUsuario = prompt("Introduce un número entero: ");
    var resultado = 0;
    for (var i = 1; i < 6; i++) {
        resultado += Number(numUsuario) + i;
    }
}
/*
ACTIVIDAD 7
Hacer un juego para que el usuario averigüe la capital de un país previamente
definida. Tiene tres intentos y debe mostrase en pantalla si ha acertado o no,
incluyendo en este caso el número de intentos que le quedan.
*/
var palabraGanadora = "PARIS"; //establecemos la capital
var palabraUsuario = "";
var intentos = 3;
do {
    intentos--; //contador para cada vez que falle , se decrementen los intentos
    palabraUsuario = String(prompt("Introduce la capital de Francia: "));
    if (palabraUsuario.toUpperCase() == palabraGanadora) { // la palabra del usuario la pasamos a mayusculas para que no haya ningún error , y comprobamos 
        console.log("Correcto");
        intentos = 0;
    }
    else {
        console.log("Incorrecto, te quedan " + intentos);
    }
    ;
} while (intentos > 0);
