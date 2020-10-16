/*1. Realizar una función que indicando un texto y un carácter (ambos obligatorios, 
comprobar que el segundo parámetro es realmente un único carácter), nos diga
 cuántas veces aparece el carácter en el texto.
 */

function numCaracteres ( texto = isRequired(), caracter  = isRequired()){
  var vecesCaracter=0 ;
 
    var array= texto.split(''); //con un split separamos todas las letras y las guardamos en un array
 
      for (let i = 0; i < array.length; i++) {  //recorremos el bucle buscando coincidencias
         if (array[i].toLowerCase()==caracter.toLowerCase()){ // tanto las letras del array y el cáracter a buscar los pasamos a mnúsculas para que no existan errores a la hora de contar
             vecesCaracter++; // incrementamos las veces que aparece el caracter con cada iteración
         }
          
      }
     
    return vecesCaracter;
  }

 /*
 Escribir una función que acepte al menos un argumento (el primer argumento debe ser obligatorio, 
mostrar un mensaje de error si no se indica, luego se pueden indicar tantos argumentos como desee 
el usuario) y que devuelva la suma y la media de todos los elementos. Comprobar que todos los argumentos
sean números e ignorar los que no lo sean, mostrando un aviso (por ejemplo: ¡AVISO! El argumento número 
 3 "Hola" no es un número, lo ignoramos").
 */

function SumaYmedia ( num1 = isRequired()){
    
}
