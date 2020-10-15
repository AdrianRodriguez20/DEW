/*1. Realizar una función que indicando un texto y un carácter (ambos obligatorios, 
comprobar que el segundo parámetro es realmente un único carácter), nos diga
 cuántas veces aparece el carácter en el texto.
 */

function toCharArray(texto){ //esta función convierte un texto en un array 
    charArray =[]; 
    for(var i=0;i<texto.length;i++){
         charArray.push(texto[i]);
    }

    return charArray;
}

 function numCaracteres ( texto = isRequired(), caracter  = isRequired()){
 var vecesCaracter=0 ;

   var array= toCharArray(texto); // guardamos la funcion en un array, así guardamos cada caracter por separado

     for (let i = 0; i < array.length; i++) {  //recorremos el bucle buscando coincidencias 
        if (array[i]==caracter){
            vecesCaracter++;
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

function SumaYmedia ( num1 = isRequired(),...){
    
}