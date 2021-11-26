function cargarScript() {
    document.getElementById("type").addEventListener("click", ocultar, false); 
    /* función ocultar o mosotrar el input para el nombre */
    function ocultar() {
        if (document.getElementById("type").value == 0) {
            document.getElementById("name").hidden = true;
        }
        if (document.getElementById("type").value == 1) {
            document.getElementById("name").hidden = false;
        }
    }
    document.getElementById("enviar").addEventListener("click", guardarPokemon, false);
    document.getElementById("enviar").addEventListener("click", guardarHuevo, false);
    var listaPokemon = new Map();
    var listaCompleta = new Array();
    //función para guardar pokemon
    function guardarPokemon() {
        if (document.getElementById("type").value == 1) { //verificamos que se trata de un pokemon
            var patt = new RegExp(/^@/); //aplicamos la expresión regular para saber si empieza por @
            var validar = patt.test(document.getElementById("name").value); //validamos el input cumple con la expresión
            if (validar == true) { //si es verdadero
                var name = document.getElementById("name").value; //recogemos el nombre y demás valores
                var type = document.getElementById("type").value;
                var race = document.getElementById("race").value;
                var pokemon = new Pokemon(type, race, name); //creamos el pokemon
                if (listaPokemon.has(name) == false) { //si la lista de pokemon no contiene este pokemon (esto es para que no se repita el nombre)
                    listaPokemon.set(name, pokemon) //añadimos a la lista de pokemon
                    listaCompleta.push(pokemon); // y a la lista completa donde se encuentran pokemons y huevos
                    var myJSON = JSON.stringify(listaCompleta) //parseamos el array de objects a json
                    document.getElementById("resultContainer").innerHTML = myJSON // y lo pegamos en el textarea
                    guardarEnPrincial(); //finalmente lo añadimos al select con la función
                };
            } else {
                alert("El nombre debe de empazar con @ ") //en caso de que no cumpla con la expresión regular avisamos al usuario
            }
        }

    }
    function guardarHuevo() { //función para guardar huevos
        if (document.getElementById("type").value == 0) { //verificamos que se trata de un huevo
            var type = document.getElementById("type").value; //recogemos el type y demás valores
            var race = document.getElementById("race").value;
            var huevo = new Creature(type, race); // creamos el huevo
            listaCompleta.push(huevo); // lo añadimos la lista  donde se encuentran pokemons y huevos
            var myJSON = JSON.stringify(listaCompleta);  //parseamos el array de objects a json
            document.getElementById("resultContainer").innerHTML = myJSON;  // y lo pegamos en el textarea

        }
    }


    function guardarEnPrincial() {
        var nodo = document.createElement("option"); // creamos el elemento option y lo guardamos como un nodo
        for (var [clave] of listaPokemon) { //recorremos la lista de Pokemon
            if (clave != document.getElementById("establecerPrincipal").appendChild(nodo)) { // si no se encuentra la clave añadimos un nodo
                nodo.innerHTML = clave;
                document.getElementById("establecerPrincipal").appendChild(nodo);
            }

        }
    }
    document.getElementById("botonEstablecerComoPrincipal").addEventListener("click", aniadirPrincipal, false);
    //funcion para añadir el pokemon en primera posición
    function aniadirPrincipal() {
        for (let i = 0; i < listaCompleta.length; i++) { //recorremos la lista completa
            if (document.getElementById("establecerPrincipal").value == listaCompleta[i].name) { //cuando el elemento seleccionado coincida con el nombre de uno en la lista
                listaCompleta.splice(0, 0, listaCompleta[i]); //este se copia a la primera posicion
                listaCompleta.splice(i + 1, 1); //y se borra en la posión anterior (sumamos uno porque al añadirse la i ya no corresponde con la posición actual)
                var myJSON = JSON.stringify(listaCompleta); //parseamos el array de objects a json
                document.getElementById("resultContainer").innerHTML = myJSON; // y lo pegamos en el textarea

            }
        }


    }
}