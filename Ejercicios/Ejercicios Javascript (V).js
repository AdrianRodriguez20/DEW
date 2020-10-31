/*
Crea un script donde se realicen las siguientes acciones:

a) Pedir al usuario un nombre de titular, apellidos de titular 
y saldo de la cuenta.

b) Crear un nuevo objeto cuentaBancaria que se inicializará con 
los datos facilitados por el usuario. 

c) Mostrar un mensaje informando de que se ha creado la nueva cuenta
 bancaria y de los datos asociados a la cuenta bancaria creada.
*/

//pedimos los datos al usuario
var nombre = prompt("Introduzca su nombe:");
var apellido = prompt("Introduzca sus apellidos");
var saldo = prompt("Introduzca su saldo");

//lo guardamos en el objeto cuenta bancaria
var cuentaBancaria = { titular: nombre, apell: apellido, sald: saldo }
//si alguno de los campos está vacío alertamos al usuario de un error 
if (cuentaBancaria.titular == "" || cuentaBancaria.apelli == "" || cuentaBancaria.sald == "") {
    console.log("error");
} else { // si está todo correcto , mostramos todos los datos.
    console.log("Se ha creado la cuenta correctamente");
    console.log("Nombre: " + cuentaBancaria.titular);
    console.log("Apellidos: " + cuentaBancaria.apell);
    console.log("Saldo: " + cuentaBancaria.sald);
}

/*
ACTIVIDAD 2

1.Vamos a crear una pequeña base de datos de viajeros para una agencia de viajes: 

2.Crea una estructura para guardar los datos de personas (nombre, apellidos, edad) ✔
 
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
class Persona { //creamos la clase Persona y su debido constructor con el nombre, apellido y edad.
    constructor(nommbre, apellido, edad) {
        this.nombre = nommbre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

class Viajero extends Persona { //Después creamos la clase viajero que extiende de la clase persona
    constructor(nombre, apellido, edad, paisesVisitados, tarjetaDePuntos) { //creamos el constructor 
        super(nombre, apellido, edad); //heredamos el nombre , apellido y edad de la clase persona
        this.paisesVisitados = paisesVisitados; //añadimos nuevos parámetros
        this.tarjetaDePuntos = tarjetaDePuntos;

    }
 
}
Viajero.prototype.toString = function viajeroToString() { //creamos el método toString para el prototipo de viajero.
    var retorno = "Nombre: " + this.nombre + ", Apellido: " + this.apellido + ", Edad: " + this.edad + ", Tarjeta de puntos: " + this.tarjetaDePuntos +", Paises Visitado: [ " + this.paisesVisitados.join()+"]";
    return retorno;
  }

  function ArraypaisesVisitados() { // función para saber los paises visitados 
    var numPaisesVisitados = prompt("Cuantos paises has visitado: ");  //preguntamos cuantos paises ha visitado y lo guardamos en una variable
    var paisesVisit = new Array(parseInt(numPaisesVisitados)); // a partir la variable anterior creamos un array con esa dimensión
    for (let i = 0; i < paisesVisit.length; i++) {  //con un bucle hasta el núnero de paises que ha dicho vamos preguntando cada uno de ellos
        var pais = prompt("Que paises has visitado: ").toUpperCase() ;
        if (paisesVisit.includes(pais) == true) { // si el país coincide se lo hacemos saber al usuario,
            console.log("Ya has introducido este pais")
            i--; //para no dejar espacios vacios retroceddemos en la i
        } else {
            paisesVisit[i] = pais; // si no está repetido añadimos el país al array de paises 
        }
    }

    return paisesVisit; //devolvemos el array de paises que ha visitado
}

 
var listaClientes = new Map(); // creamos un HashMap de lista de clientes
 var salir=false;
do{
   
    console.log("--------------Menú------------") // mostramos un menú al usuario
    console.log("1º Añadir viajero");
    console.log("2º Eliminar viajero");
    console.log("3º Lista viajeros");
    console.log("4º Añadir pais a un viajero");
    console.log("5º Eliminar pais a un viajero");
    console.log("6º Salir");
    console.log("------------------------------")
   
    var opcion =prompt("Opción: "); //leemos la opción

switch (parseInt(opcion)) {
    case 1: //registro usuario
        var dni = prompt("dni:").toUpperCase(); //pedimos el dni 
        if (listaClientes.has(dni)) { //si este ya se encuentra en la lista de usuarios
            console.log("Usuario ya registrado") // informamos que ya se encuentra registrado 
        } else { //si no pedimos todos los datos 
            var nombre = prompt("Introduzca su nombe:").toUpperCase();
            var apellido = prompt("Introduzca sus apellidos").toUpperCase();
            var edad = prompt("Introduzca su edad").toUpperCase();
            var tarjetaDePuntos = prompt("¿Tiene tarjeta de puntos?")
            var paisesVisitados = ArraypaisesVisitados();
            var viajero = new Viajero(nombre, apellido, edad, paisesVisitados, tarjetaDePuntos); // guardamos el objeto 
            listaClientes.set(dni,viajero) // añadimos el nuevo cliente a la lista 
        }
        break;
    case 2: //Eliminar viajero 
        var dni =prompt("dni:").toUpperCase();  //pedimos el dni
        if (listaClientes.has(dni)) {//si a se encuentra en la lista de usuarios lo eliminamos
            console.log("Cliente eliminado correctamente");
            listaClientes.delete(dni);
        } else { // de no ser así le decimos que ese cliente no existe
            console.log("Este cliente no existe");
        }
        break;
    case 3://lista viajeros
        for (var [clave, valor] of listaClientes) { 
            console.log(clave + " = " + valor.toString());
          }
        break;
    case 4: // Añadir pais a un viajero
        var dni =prompt("dni:").toUpperCase(); //pedimos el dni
        if (listaClientes.has(dni)) {  //si a se encuentra en la lista de usuarios 
            var nuevoPais =prompt("Qué país quiere añadir?").toUpperCase(); //pedimos el nuevo pais
            if(viajero.paisesVisitados.includes(nuevoPais)==true){ //si contiene ese país que deseamos añadir 
            console.log("Pais ya añadido"); // informamos que ya se encuentra
             }else{ 
                for (var [clave, valor] of listaClientes) { 
                   if (clave==dni){
                   valor.paisesVisitados.push(nuevoPais); 
                  }
                }
            ; // si no , aañadimos ese nuevo país 
            }
        }else{
            console.log("Este cliente no existe");
        }
     
        break;
    case 5: //Eliminar pais a un viajero
        var dni =prompt("dni:").toUpperCase();//pedimos el dni
        if (listaClientes.has(dni)) { //si a se encuentra en la lista de usuarios 
            var borrarPais =prompt("Qué país quiere borrar?").toUpperCase();  //pedimos el país que desea borrar 

            for (var [clave, valor] of listaClientes) { 
                if (clave==dni){
                valor.paisesVisitados.splice(viajero.paisesVisitados.indexOf(borrarPais), 1); //borramos el pais
               }
             }
         

        }else{ // de no ser así le decimos que ese cliente no existe
            console.log("Este cliente no existe"); 
        }
        break;
    case 6: //salir
        salir =true;
        break;
    default: // si se equivoca empieza de nuevo el bucle 
        console.log("numero erroneo")
        break;
}
}while(salir!=true );
/*
ACTIVIDAD 3

Analiza el siguiente código y comenta las sentencias.
*/
const tropicalBasket = { //se crea el objeto tropicalBasket
    bananas: 3,
    papayas: 0,
    oranges: 7,
    watermelons: 4

};

const smallBasket = { //se crea el objeto smallBasket
    strawberries: 8,
    grapes: 12 };

const getFruitsDescription = (basket) => { // se crea una función flecha que recibe un objeto

    const fruitsListed = Object.keys(basket); // en fruitsListed se guarda un array de las propiedades names de un objeto.

    const fruitsAvailable = fruitsListed.filter((fruit) => {return basket[fruit] > 0; //  se guarda en la variable
    }); // fruitsAvailable un array que a partir de fruitsListed que cumpla con la función flecha , en este caso que la cantidad de fruit (elemento de la fruitsListed)
        // sea mayor que 0.

    return 'This basket has: ' + fruitsAvailable.join(', ');  // devuelve una cadena con las frutas disponibles concatenadas con por comas.

};

console.log(getFruitsDescription(tropicalBasket)); //se muestran ambas listas
console.log(getFruitsDescription(smallBasket));


/*
ACTIVIDAD 4
Analiza el siguiente código y comenta las sentencias.
*/
const animal = {};

Object.defineProperty(animal, 'isHuman', { //se define una propiedad del objeto animal , en este caso isHuman .

    value: false, //el valor es falso , animal no es isHuman

    enumerable: false //no se puede numerar
 });

const dinosaur = Object.create(animal); //se crea el dinosaurio a partir del objeto animal

Object.defineProperty(dinosaur, 'isExtinct', { //se define una propiedad del objeto dinosaurio , en este caso isExtinct

    value: true, //el valor es true , por lo que dinosaurio es isExtinct

    enumerable: false //no se puede numerar
});

const tRex = Object.create(dinosaur); //se crea el objeto tRex a partir del objeto dinosaurio.

Object.defineProperty(tRex, 'legs', { //se define una propiedad del objeto  tRex , en este caso legs

    value: 4, //el valor es 4 , por lo que tRex tiene 4 legs.

    enumerable: false //no se puede numerar
});

function getAllPropertiesOf(something) {  

    let properties = []; //se crea un array para guardar las propiedades del objeto.

    let proto = something; // proto , recibe el valor de something 

    while (proto !== Object.prototype) { //mientras que el objeto que recibimos sea distinto del prototipo 

        properties = properties.concat(Object.getOwnPropertyNames(proto)); //guardamos en properties ,de manera concatenada los valores en forma de array del objeto proto .

        proto = Object.getPrototypeOf(proto);  //se guarda el valor del prototipo en en proto
       }

    return properties; //devuelve un array con todas las propiedades del 
 }

console.log(getAllPropertiesOf(tRex)); // se muestran todas las propiedades del tRex.

/*
ACTIVIDAD 5
 
Realiza la actividad 1 utilizando clases.
*/
class CuentaBancaria { //creamos la clase cuenta bancaria 
    constructor(nombre, apellido, saldo) { //así como su constructor 
        this.nombre = nombre;
        this.apellido = apellido;
        this.saldo = saldo;

    }
    mostrarDatos() { // y una función para mostrar los datos 
        console.log("Nombre: " + this.nombre);
        console.log("Apellidos: " + this.apellido);
        console.log("Saldo: " + this.saldo);
    }
}


var nombre = prompt("Introduzca su nombe:");
var apellido = prompt("Introduzca sus apellidos");
var saldo = prompt("Introduzca su saldo");

if (nombre == "" || apellido == "" || saldo == "") { //si alguno de los campos está vacío alertamos al usuario de un error 
    console.log("No ha introducido todos campos ");
} else {
    const usuario = new CuentaBancaria(nombre, apellido, saldo); //si está todo correcto creamos el usuario 
    usuario.mostrarDatos(); //mostramos los datos 
    console.log("Se ha creado la cuenta correctamente"); //avisamos de que todo ha salido bien

}
