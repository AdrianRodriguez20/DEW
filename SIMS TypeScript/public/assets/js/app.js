"use strict";
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
        this.estado = "";
        this.interactua = "";
        this.habitacion = "";
    }
    time() {
        var momentoActual = new Date();
        var hora = momentoActual.getHours();
        var minuto = momentoActual.getMinutes();
        var segundo = momentoActual.getSeconds();
        var horaImprimible = hora + " : " + minuto + " : " + segundo;
        return horaImprimible;
    }
    toString() {
        return this.nombre + " is  " + this.estado + " the  " + this.interactua + " in the " + this.habitacion + " from " + this.time();
    }
}
let tv = { nombre: "tv", accion: "watching", habitacion: "Living Room" };
let playStation = { nombre: "PS5", accion: "playing", habitacion: "Living Room" };
let computer = { nombre: "computer games", accion: "playing", habitacion: "Living Room" };
var objetosLivingRoom = new Array(tv, playStation, computer);
let clothes = { nombre: "clothes", accion: "putting", habitacion: "Bedroom" };
let despertador = { nombre: "alarm", accion: "programming", habitacion: "Bedroom" };
let xbox = { nombre: "xbox", accion: "playing", habitacion: "Bedroom" };
var objetosBedroom = new Array(clothes, despertador, xbox);
let cepillo = { nombre: "mirror", accion: "cleaning", habitacion: "Bathroom" };
let toothbrush = { nombre: "toothbrush", accion: "washing", habitacion: "Bathroom" };
let towel = { nombre: "towel", accion: "drying", habitacion: "Bathroom" };
var objetosBathroom = new Array(toothbrush, cepillo, towel);
let radio = { nombre: "radio", accion: "listening", habitacion: "Kitchen" };
let water = { nombre: "water", accion: "drinking", habitacion: "Kitchen" };
let book = { nombre: "book", accion: "reading", habitacion: "Kitchen" };
var objetosKitchen = new Array(radio, water, book);
var habitaciones = new Map();
habitaciones.set("Living Room", objetosLivingRoom);
habitaciones.set("Bedroom", objetosBedroom);
habitaciones.set("Bathroom", objetosBathroom);
habitaciones.set("Kitchen", objetosKitchen);
var historial = new Map();
let vecino1 = new Persona("Carlos");
let vecino2 = new Persona("Gonzalo");
let vecino3 = new Persona("Luisa");
let vecino4 = new Persona("Fernando");
let vecino5 = new Persona("Amancio");
let vecino6 = new Persona("Carolina");
var arrayVecinos = new Map();
arrayVecinos.set("Carlos", vecino1);
arrayVecinos.set("Gonzalo", vecino2);
arrayVecinos.set("Luisa", vecino3);
arrayVecinos.set("Fernando", vecino4);
arrayVecinos.set("Amancio", vecino5);
arrayVecinos.set("Carolina", vecino6);
function escribir(id) {
    const output = document.getElementById('historial');
    if (output)
        output.innerHTML = " ";
    var nombre = document.getElementById("nombres").value;
    var habitacion = id;
    var numAleatorio = numRandom();
    if (historial.has(nombre)) {
        historial.delete(nombre);
    }
    arrayVecinos.get(nombre).interactua = habitaciones.get(habitacion)[numAleatorio].nombre;
    arrayVecinos.get(nombre).estado = habitaciones.get(habitacion)[numAleatorio].accion;
    arrayVecinos.get(nombre).habitacion = habitaciones.get(habitacion)[numAleatorio].habitacion;
    historial.set(nombre, arrayVecinos.get(nombre).toString());
    for (let value of historial.values()) {
        if (output)
            output.innerHTML += "<div class='caja'>" + value.toString();
        +"</div>";
    }
}
function numRandom(valorMin = 0, valorMax = 2) {
    var numAleatorio;
    numAleatorio = Math.floor(Math.random() * (valorMax - valorMin + 1)) + (valorMin);
    return numAleatorio;
}
window.onload = () => {
    var _a, _b, _c, _d;
    (_a = document.getElementById("Living Room")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        let id = document.getElementById("Living Room").id;
        escribir(id);
    });
    (_b = document.getElementById("Bedroom")) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
        let id = document.getElementById("Bedroom").id;
        escribir(id);
    });
    (_c = document.getElementById("Kitchen")) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
        let id = document.getElementById("Kitchen").id;
        escribir(id);
    });
    (_d = document.getElementById("Bathroom")) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () {
        let id = document.getElementById("Bathroom").id;
        escribir(id);
    });
};
