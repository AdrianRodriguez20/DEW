$("#igic").html("0.00"); //Cargamos los valores por defecto del igic y el total , de manera estética 
$("#total").html("0.00");

$(document).ready(function () { //cargamos los eventos al principio 

    cargarJson(); //Cargamos el json al principio
    $("#obtenerDatos").click(cargarJson);
    $("#boton").click(aniadirCesta);
    $("#boton").click(mostrar);
    $("#boton").click(calculo);

});

class Producto { //Creamos la clase producto
    constructor(nombre, precio) { //y su debido constructor al que añadimos el nombre (nombre del articulo) y precio (precio del articulo )
        this.nombre = nombre;
        this.precio = precio;
    }
}
//Función para cargar el json 
function cargarJson() {
    $('#preloader').fadeIn(1);
    $('body').css({ 'overflow': 'visible' });
    $('#preloader').fadeOut(4000);
    $.ajax({
        url: "assets/json/productos.json", // Llamo al archivo JSON con los datos 
        type: "get",
        dataType: "json",
        cache: false,
        contentType: false,
        processData: false

    })

        // Si todo funciona correctamente se ejecuta el  método 'done' con el que  imprimo los datos

        .done(function (data) {
            let datos = "<ul class='list-group'>";
            for (let i = 0; i < data.length; i++) {
                datos += "<div><input class='check'  type='checkbox' name='producto' /> <span class='articleName'>" + data[i].producto + "</span>   <span class='price'>" + data[i].precio + "</span>€</div>";
            }
            datos += "</ul>"
            $('#articlesList').html(datos);
        })

        // Este método es para manejar algún error al obtener los datos 
        .fail(function (data) {
            alert("Fallo en la conexión con el JSON")
        });

}

var array = [];
function aniadirCesta() {//funcion para añadir los productos

    $("input:checkbox:checked").each(function () {
        var objeto = $(this).next().html(); //nombre del producto
        var precio = parseInt($(this).next().next().html()); //valor del producto
        var producto1 = new Producto(objeto, precio); //creamos el producto
        array.push(producto1); //añadimos al array
    });
    $('input:checkbox:checked').prop("checked", false);
}

function calculo() { //funcion para calcular el igic y el precio total de la compra
    var totalCesta = 0; //variable para el resultado
    var totalIGIG = 0; //variable para el resultado
    for (let i = 0; i < array.length; i++) { //recorremos el array 
        totalIGIG += parseFloat(array[i].precio) * (7 / 100); // guardamos en la variable sumando todo los igic de los productos
        totalCesta += parseInt(array[i].precio); // guardamos en la variable sumando todo los precios de los productos
    }
    $("#igic").html(totalIGIG.toFixed(2)); // mostrar en el html el IGIC
    $("#total").html(totalCesta);  // mostrar en el html el precio total
};


function mostrar() {//funcion para mostrar los productos
    var cestaCompleta = ""; // String en el que se guardará la lista entera de productos
    for (let i = 0; i < array.length; i++) { //bucle for para recorrer el array de productos guardados 
        cestaCompleta += array[i].nombre + " " + ((array[i].precio) - (array[i].precio / 100 * 7)).toFixed(2) + "€" + "<br>"; //concatenar los productos con su nombre y precio en un string
    }
    $("#lista").html(cestaCompleta); // mostrar en el html la lista de productos
}