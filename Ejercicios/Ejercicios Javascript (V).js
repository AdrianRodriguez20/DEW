/*
Crea un script donde se realicen las siguientes acciones:

a) Pedir al usuario un nombre de titular, apellidos de titular 
y saldo de la cuenta.

b) Crear un nuevo objeto cuentaBancaria que se inicializará con 
los datos facilitados por el usuario. 

c) Mostrar un mensaje informando de que se ha creado la nueva cuenta
 bancaria y de los datos asociados a la cuenta bancaria creada.
*/


var nombre = prompt("Introduzca su nombe:");
var apellido = prompt("Introduzca sus apellidos");
var saldo = prompt("Introduzca su saldo");


var cuentaBancaria = { titular: nombre, apell: apellido, sald: saldo }

if (cuentaBancaria.titular == "" || cuentaBancaria.apelli == "" || cuentaBancaria.sald == "") {
    console.log("error");
} else {
    console.log("Se ha creado la cuenta correctamente");
    console.log("Nombre: " + cuentaBancaria.titular);
    console.log("Apellidos: " + cuentaBancaria.apell);
    console.log("Saldo: " + cuentaBancaria.sald);
}

/*
ACTIVIDAD 2

1.Vamos a crear una pequeña base de datos de viajeros para una agencia de viajes:

2.Crea una estructura para guardar los datos de personas (nombre, apellidos, edad)
 
3.A partir de la estructura anterior, vamos a añadir los datos de los viajeros: una lista de países visitados (los países NO se pueden repetir) y si tiene o no tarjeta de puntos en nuestra agencia 
 
4.Ahora crea otra estructura para guardar los datos de los viajeros, los identificaremos por un código de cliente de nuestra agencia
   
    1.Crea las siguientes funciones/métodos para gestionar nuestra base de datos:
      Crear un nuevo viajero (debe comprobar si el código de cliente ya existe. Si es así, muestra un mensaje y no lo inserta)
    2.Eliminar un viajero (identificado por su código de cliente)
    3.Mostrar todos los viajeros (sus datos personales, qué países ha visitado y si tiene tarjeta)
    4.Añadir un país a un viajero (identificado por su código de cliente)
    5.Eliminar un país a un viajero (identificado por su código de cliente)
 
5.Haz algunas pruebas para comprobar que todo funciona bien, realizando llamadas a las funciones/métodos antes creados.
*/