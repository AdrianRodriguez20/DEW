

$(document).ready(function () { //cargamos los eventos al principio 

    cargarJson(); //Cargamos el json al principio

});


//Función para cargar el json 
function cargarJson() {
    $.ajax({
        url: "http://qando.es/docs/films.php", // Llamo al archivo JSON con los datos 
        type: "get",
        dataType: "json",
        cache: false,
        contentType: false,
        processData: false

    })

        // Si todo funciona correctamente se ejecuta el  método 'done' con el que  imprimo los datos

        .done(function (data) {
            let datos = "<div class='container-fluid'><div class='row'>";
            data=data.sort(function (a, b) {
                if (a.name > b.name) {
                  return 1;
                }
                if (a.name < b.name) {
                  return -1;
                }
                // a must be equal to b
                return 0;
              });

            for (let i = 0; i < data.length; i++) {
                datos += "<div class='col-xl-2'> <img src=" +  data[i].poster + "><br><label>"+data[i].name+"</label></div>";
            }
            datos += "</div></div";
            $('#articlesList').html(datos);
        })

        // Este método es para manejar algún error al obtener los datos 
        .fail(function (data) {
            alert("Fallo en la conexión con el JSON")
        });

}
