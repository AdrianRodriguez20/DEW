class Producto{ //Creamos la clase producto
    constructor(nombre, precio){ //y su debido constructor al que añadimos el nombre (nombre del articulo) y precio (precio del articulo )
        this.nombre=nombre;
        this.precio=precio;
    }
}
var array =[];

function aniadir(id) { //funcion para añadir los productos
    var objeto = document.getElementById(id).name;  //cogemos  el nombre del producto
    var precio = document.getElementById(id).value; //cogemos  el valor del producto
    var producto1= new Producto(objeto,precio); //creamos el producto
    array.push(producto1); //añadimos al array
}
function mostrar(){ //funcion para mostrar los productos
    var cestaCompleta=""; // String en el que se guardará la lista entera de productos
    for (let i = 0; i < array.length; i++) { //bucle for para recorrer el array de productos guardados 
     cestaCompleta+= array[i].nombre +" "+ array[i].precio +"<br>"; //concatenar los productos con su nombre y precio en un string
    }
    document.getElementById("lista").innerHTML = cestaCompleta; // mostrar en el html la lista de productos
}
function unselect(){ //función para deseleccionar todos los checkbox
    document.querySelectorAll('[type=checkbox]').forEach((x) => x.checked=false);
}
function calcularIGIC(){ //funcion para calcular el igic
    var totalIGIG=0; //variable para el resultado
    for (let i = 0; i < array.length; i++) { //recorremos el array 
        totalIGIG+=parseInt(array[i].precio)/100*7 ; // guardamos en la variable sumando todo los igic de los productos
    }
    document.getElementById("igic").innerHTML = totalIGIG; // mostrar en el html el IGIC
}
function calcularTotal(){ //funcion para calcular el precio total de la compra
    var totalCesta=0; //variable para el resultado
    for (let i = 0; i < array.length; i++) { //recorremos el array 
        totalCesta+=parseInt(array[i].precio) ; // guardamos en la variable sumando todo los precios de los productos
    }
    document.getElementById("total").innerHTML = totalCesta;  // mostrar en el html el precio total
}


