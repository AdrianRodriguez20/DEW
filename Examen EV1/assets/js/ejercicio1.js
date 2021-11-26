function cargarScript() {
    document.getElementById("igic").innerHTML = "0.00";
    document.getElementById("total").innerHTML = "0.00";
    class Producto { //Creamos la clase producto
        constructor(nombre, precio) { //y su debido constructor al que añadimos el nombre (nombre del articulo) y precio (precio del articulo )
            this.nombre = nombre;
            this.precio = precio;
        }
    }
    var array = [];
    function aniadir() { //funcion para añadir los productos
        for (let i = 0; i < document.getElementsByClassName('check').length; i++) {
            if (document.getElementsByClassName('check')[i].checked == true) {
                var objeto = document.getElementsByClassName('articleName')[i].innerHTML; //nombre del producto
                var precio = parseFloat(document.getElementsByClassName('price')[i].innerHTML); //valor del producto
                var producto1 = new Producto(objeto, precio); //creamos el producto
                array.push(producto1); //añadimos al array
            }
        }
    }
    function mostrar() { //funcion para mostrar los productos
        var cestaCompleta = ""; // String en el que se guardará la lista entera de productos
        for (let i = 0; i < array.length; i++) { //bucle for para recorrer el array de productos guardados 
            cestaCompleta += array[i].nombre + " " + array[i].precio + "<br>"; //concatenar los productos con su nombre y precio en un string
        }
        document.getElementById("lista").innerHTML = cestaCompleta; // mostrar en el html la lista de productos
    }
    function unselect() { //función para deseleccionar todos los checkbox
        document.querySelectorAll('[type=checkbox]').forEach((x) => x.checked = false);
    }
    function calcularIGICyTotal() { //funcion para calcular el igic y el precio total de la compra
        var totalCesta = 0; //variable para el resultado
        var totalIGIG = 0; //variable para el resultado
        for (let i = 0; i < array.length; i++) { //recorremos el array 
            totalIGIG += parseInt(array[i].precio) / 100 * 7; // guardamos en la variable sumando todo los igic de los productos
            totalCesta += parseInt(array[i].precio); // guardamos en la variable sumando todo los precios de los productos
        }
        document.getElementById("igic").innerHTML = totalIGIG.toFixed(2); // mostrar en el html el IGIC
        document.getElementById("total").innerHTML = totalCesta;  // mostrar en el html el precio total
    }
    document.getElementById("boton").addEventListener("click", aniadir, false);
    document.getElementById("boton").addEventListener("click", mostrar, false);
    document.getElementById("boton").addEventListener("click", calcularIGICyTotal, false);
    document.getElementById("boton").addEventListener("click", unselect, false);
}