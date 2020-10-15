/*
ACTIVIDAD 1
Usando un bucle, calcula el resultado de 15 elevado a la 6.
No podrás utilizar el operador aritmético de elevar a una potencia. 
*/
var base = 15;
var resultado = 1;
for (var i = 0; i < 6; i++) {
    resultado *= base;
};
/*
ACTIVIDAD 2
Usando un bucle, calcula la suma de los 10 primeros números naturales, 
es decir, la suma de 1 + 2 + 3 ... + 10, e imprimir el resultado por 
la consola. Para ello deberás recorrer el bucle y almacenar el valor 
acumulado en cada iteración en una variable.
*/
var resultado = 0;
for (var i = 0; i < 11; i++) {
    resultado += i;
};
/*
ACTIVIDAD 3
Anida dos bucles for y muestra por la consola el resultado de los dos
índices en cada iteración. Realiza 10 iteraciones en cada bucle.
*/
for (var i = 1; i < 11; i++) {
    for (var j = 1; j < 11; j++) {
        console.log(i + "-" + j);
    };

};
/*
ACTIVIDAD 4
En este reto deberás mostrar el número posterior a un número introducido
por el usuario. Deberás solicitar al usuario que introduzca 3 números, 
y para cada uno de ellos imprimir el número posterior.
*/
var arrayNumeros = new Array(3);
for (var i = 0; i < 3; i++) {
    arrayNumeros[i] = prompt("Introduce el número: " + i);
};

for (i = 0; i < 3; i++) {
    document.write(parseInt(arrayNumeros[i]) + 1);
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
        arrayNumeros[j] = prompt("Introduce el número: " + j);

    }
    for (j = 0; j < 2; j++) {
        console.log(arrayNumeros[j]);
        document.write("<br/>");
    };
};


/*
ACTIVIDAD 6
En este reto deberás sumar el valor de 5 números naturales. Para ello, deberás
solicitar al usuario que introduzca un número entero, calcular y sumar los 5
números siguientes e imprimir el resultado por la consola, y volver a repetir
este proceso 5 veces más.
*/


/*
ACTIVIDAD 7
Hacer un juego para que el usuario averigüe la capital de un país previamente
definida. Tiene tres intentos y debe mostrase en pantalla si ha acertado o no,
incluyendo en este caso el número de intentos que le quedan.
*/
var palabraGanadora = "FRANCIA";
var palabraUsuario = "";
var intentos = 3;

do {
    intentos--;
    palabraUsuario = prompt("Introduce el país: ");
    if (palabraUsuario.toUpperCase() == palabraGanadora) {
        console.log("Correcto");
        intentos = 0;
    } else {
        console.log("Incorrecto, te quedan " + intentos);
    };
} while (intentos > 0);