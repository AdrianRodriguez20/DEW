interface Mueble {
    nombre: string;
    accion: string;
    habitacion: string;
}

class Persona {
    nombre: string;
    estado: string;
    interactua: string;
    habitacion: string;

    constructor(nombre: string) {
        this.nombre = nombre;
        this.estado = "";
        this.interactua = "";
        this.habitacion = "";
    }
    time(): string {
        var momentoActual: Date = new Date()
        var hora = momentoActual.getHours();
        var minuto = momentoActual.getMinutes();
        var segundo = momentoActual.getSeconds();
        var horaImprimible = hora + " : " + minuto + " : " + segundo;
        return horaImprimible;
    }

    toString(): string {
        return this.nombre + " is  " + this.estado +" the  " + this.interactua + " in the " + this.habitacion + " from " + this.time();
    }

}



let tv: Mueble = { nombre: "tv", accion: "watching", habitacion: "Living Room" };
let playStation: Mueble = { nombre: "PS5", accion: "playing", habitacion: "Living Room" };
let computer: Mueble = { nombre: "computer games", accion: "playing", habitacion: "Living Room" };
var objetosLivingRoom: Mueble[] = new Array(tv, playStation, computer);

let clothes: Mueble = { nombre: "clothes", accion: "putting", habitacion: "Bedroom" };
let despertador: Mueble = { nombre: "alarm", accion: "programming", habitacion: "Bedroom" };
let xbox: Mueble = { nombre: "xbox", accion: "playing", habitacion: "Bedroom" };
var objetosBedroom: Mueble[] = new Array(clothes, despertador,xbox);

let cepillo: Mueble = { nombre: "mirror", accion: "cleaning", habitacion: "Bathroom" };
let toothbrush: Mueble = { nombre: "toothbrush", accion: "washing", habitacion: "Bathroom" };
let towel: Mueble = { nombre: "towel", accion: "drying", habitacion: "Bathroom" };
var objetosBathroom: Mueble[] = new Array(toothbrush, cepillo, towel);

let radio: Mueble = { nombre: "radio", accion: "listening", habitacion: "Kitchen" };
let water: Mueble = { nombre: "water", accion: "drinking", habitacion: "Kitchen" };
let book: Mueble = { nombre: "book", accion: "reading", habitacion: "Kitchen" };
var objetosKitchen: Mueble[] = new Array(radio, water, book);
/*Creamos un mapa para guardar las habitaciones con sus array de muebles*/
var habitaciones = new Map();
habitaciones.set("Living Room", objetosLivingRoom);
habitaciones.set("Bedroom", objetosBedroom);
habitaciones.set("Bathroom", objetosBathroom);
habitaciones.set("Kitchen", objetosKitchen)

var historial = new Map();
let vecino1: Persona = new Persona("Carlos");
let vecino2: Persona = new Persona("Gonzalo");
let vecino3: Persona = new Persona("Luisa");
let vecino4: Persona = new Persona("Fernando");
let vecino5: Persona = new Persona("Amancio");
let vecino6: Persona = new Persona("Carolina");
/*Guardamos en otro mapa los vecinos*/
var arrayVecinos = new Map();
arrayVecinos.set("Carlos", vecino1);
arrayVecinos.set("Gonzalo", vecino2);
arrayVecinos.set("Luisa", vecino3);
arrayVecinos.set("Fernando", vecino4);
arrayVecinos.set("Amancio", vecino5);
arrayVecinos.set("Carolina", vecino6);

function escribir(id: any):void {
    //cogemos los valores selecionados en el html
    const output = document.getElementById('historial');
    if (output) output.innerHTML = " "
    var nombre: string = (<HTMLInputElement>document.getElementById("nombres")).value;
    var habitacion: string = id;
    var numAleatorio: number = numRandom();
    //actualizamos la lista eliminando lo que hacía antes por la nueva acción para que pase a último
    if (historial.has(nombre)) {
        historial.delete(nombre);
    }
    // creamos la frase
    arrayVecinos.get(nombre).interactua = habitaciones.get(habitacion)[numAleatorio].nombre;
    arrayVecinos.get(nombre).estado = habitaciones.get(habitacion)[numAleatorio].accion;
    arrayVecinos.get(nombre).habitacion = habitaciones.get(habitacion)[numAleatorio].habitacion;
    historial.set(nombre, arrayVecinos.get(nombre).toString());
//imprimimos las las frases en el html
    for (let value of historial.values()) {
        if (output) output.innerHTML += "<div class='caja'>" + value.toString(); +"</div>"

    }

}
/*función para coger un número rándom , para elegir lo que hace en la habitación*/

function numRandom(valorMin:number = 0, valorMax:number = 2): number {
    var numAleatorio: number;
    numAleatorio = Math.floor(Math.random() * (valorMax - valorMin + 1)) + (valorMin);
    return numAleatorio;
}

/*cogemos cada una de las id al clickar*/

window.onload = () => {
    document.getElementById("Living Room")?.addEventListener('click', function () {
        let id = document.getElementById("Living Room")!.id;
        escribir(id);
    });
    document.getElementById("Bedroom")?.addEventListener('click', function () {
        let id = document.getElementById("Bedroom")!.id;
        escribir(id);
    });
    document.getElementById("Kitchen")?.addEventListener('click', function () {
        let id = document.getElementById("Kitchen")!.id;
        escribir(id);
    });
    document.getElementById("Bathroom")?.addEventListener('click', function () {
        let id = document.getElementById("Bathroom")!.id;
        escribir(id);
    });
}

