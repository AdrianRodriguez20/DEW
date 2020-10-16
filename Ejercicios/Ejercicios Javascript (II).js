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

aSTR = prompt("Introduce el valor de la variable a: ");
bSTR = prompt("Introduce el valor de la variable b: ");
cSTR = prompt("Introduce el valor de la variable c: ");

var a = parseInt(aSTR);
var b = parseInt(bSTR);
var c = parseInt(cSTR);

if (a < 0 || b < 0 || c < 0) {
    console.log("Al menos una de las 3 variables es negativa");
} else {
    console.log("Ninguna variable es negativa");
};

if ((a == 0) && (b == 0) && (c == 0)) {
    console.log("Las tres variables son iguales a 0");
} else {
    console.log("Las tres variables no son iguales a 0");
};

if ((a + b + c > 10) && (a !== b || b !== c)) {
    console.log("Las suma de las 3 variables es mayor que 10 Y las tres variables son diferentes");
} else {
    console.log("Las suma de las 3 variables es menor que 10 o las tres variables no son diferentes");
};

/*
2. Diseñar una función que acepta un argumento x y que muestre los siguientes mensajes:

a) ‘Este es muy fácil... ¡prueba otro!’, si x es 0
b) ‘El número es par’, si x es 2, 4 ó 6
c) ‘El número es impar’, si x es 1, 3 ó 5
d) ‘¡¡Sólo sé contar de 0 a 6!!’, para los demás casos

*/
function mifuncion(x) {
    let resultado;
    if (x == 0) {
        resultado = "‘Este es muy fácil... ¡prueba otro!’, si x es 0";
    } else if ((x % 2 == 0) && ((x > 0) && (x < 6))) {
        resultado = "‘El número es par’, si x es 2, 4 ó 6";
    } else if ((x % 2 !== 0) && ((x > 0) && (x < 6))) {
        resultado = "‘El número es impar’, si x es 1, 3 ó 5";
    } else {
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
for (let i = 0, j = 20; (j > 0) && (i < 9); i++, j = j - 3) {
    console.log(i, j);
};

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

a) Cambia el bucle while usando continue y break para que si hay una raíz cuadrada de un número negativo 
directamente pase a la siguiente iteración. En el caso de haber una división por cero, el bucle debe 
detenerse inmediatamente.
b) Prueba a realizar el apartado anterior sin usar ni continue ni break. ¿Es más sencillo?
c) Cambia el bucle while original para que se ejecute sin tener que asignar un valor inicial a la variable result.
*/
let result = 1, arg1, arg2, res1, res2;
while (result > 0) {
    arg1 = Math.random() - 0.5;

    res1 = Math.sqrt(arg1);
    if (res1 < 0) {
        continue;
    }                                                        /* continuar*/
    arg2 = Math.random();
    res2 = res1 / (arg1 + arg2);
    result = res1 + res2;
    if (res2 < 0) {
        break;
    }
    console.log(result);
}
/*
5. La letra del NIF se calcula dividiendo la parte numérica (8 primeras cifras) por 23. 
A partir del resto de esta división se asigna una letra según su posición en la siguiente 
cadena: `'TRWAGMYFPDXBNJZSQVHLCKE'`.
Por ejemplo, el DNI 64253469 da como resto 2 al dividir por 23 (tercera posición, ya que 
empieza por 0), por lo que le corresponde la letra `W`.
Implementar una función que calcule la letra a partir del número del NIF.
*/
function letraDNI(numDNI) {
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
6. Para convertir grados Farenheit (`F`) a Celsius (`C`) se usa la siguiente expresión:
 `C = (F − 32) * 5/9`. Implementar una función que realice esta conversión
  (comprueba que 32ºF son 0ºC y que 75.2ºF son 24ºC).
*/
function conversorTemperatura(gradosFarenheit) {
    let resultadoCelsius;
    resultadoCelsius = (parseFloat(gradosFarenheit) - 32) * (5 / 9);
    resultadoCelsius = parseFloat(gradosFarenheit) - 32
    return resultadoCelsius;
}

/*
7. En el ejercicio anterior, añadir un argumento opcional booleano de forma que si está a 
`False` (valor por defecto) devuelve sólo el resultado numérico (p.ej: `24`), mientras 
que si se indica `True` le añade la unidad `ºC` (p.ej `24ºC`).
*/
function conversorTemperatura(gradosFarenheit, simbolo) {
    let resultadoCelsius;
    var simbolo;
    resultadoCelsius = (parseFloat(gradosFarenheit) - 32) * (5 / 9);
    resultadoCelsius = parseFloat(gradosFarenheit) - 32
    if (simbolo == true) {
        resultadoCelsius = resultadoCelsius + "ºC";
    }
    return resultadoCelsius;
}
/*
8.Genera una lista que contenga el cuadrado de los números pares y el cubo de los impares entre 1 y 100 (inclusive).
*/
for (let i = 1; i < 101; i++) {
    if (i % 2 == 0) {
        console.log(i * i);
    }

}
for (let i = 1; i < 101; i++) {
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

}
/*
10. Muestra la fecha y hora actuales en formato: “DD/MM/YYYY hh:mm:ss TimeZone”.
*/
momentoActual = new Date()
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

fecha = new Date("02/04/2015");
console.log(fecha);
fechaDos = new Date("2015-04-02");
console.log(fechaDos);
fechaTres = new Date("April 02, 2015");
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
   fechaParse = Date.parse(fechaNacimiento);
   fechaActual = new Date()

var dia = fechaActual.getDate();
var mes = fechaActual.getMonth();
var anio =fechaActual.getFullYear();

var fechaFormat = anio+"-"+mes+"-"+dia;

   fechaActualParse = Date.parse(FechaFormat);
    switch (unidad) {
        case "d":
            resultado  ;
            break;
        case "h":
            resultado;
            break;
        case "m":
            resultado;
            break;
        case "s":
            resultado;
            break;
        default:
            console.log("Error , fecha mal introducida.");
            break;
    }

}
/*
13. Implementar una función hdec2hms(x) que transforme una hora en formato decimal a su equivalente 
en formato hh:mm:ss (en texto). Por ejemplo, 8.25 = “8:15:00” y 10.12 = “10:07:12”.Implementar 
también la función inversa hms2hdec(h,m,s).
*/
function hdec2hms(x) {

    var arrayHora= x.split(".");
    var hora=arrayHora[0];
    var  minuto= parseInt(parseInt(arrayHora[1])*0.6);
    var segundo= parseInt(((parseInt(arrayHora[1])*0.6)-(minuto))*100);
   

    

    var horaImprimible = hora + " : " + minuto + " : " + segundo;

    return horaImprimible;
}