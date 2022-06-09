
/**
    Variables y Operaciones
1.-Es un espacio de memoria que almacena un tipo de dato
2.-Al declarar una variable solo le otorgas el nombre al espacio de memoria, en cambio cuando lo inicializas le estas agregando algun dato al espacio
    de memoria, podemos aplicar los dos metodos en una sola linea de texto
3.-Al sumar numeros estas aplicando las propiedades de adicion para crear un nuevo numero, al concaquetar strings lo que esta sucediendo es una 
     union de dos cadenas de texto para formar una nueva
4.-El operado + me permite sumar o cancatenar

Datos tipo strign{
    nombre, apellido, usuarioPlatzi,correoElectronico, 
}
Datos tipo numerico{
    edad, dinero, deudas,
}
Datos tipo funcion{
    mayordeEdad
}
*/
//-------------------------------------------------------------------------------------------------
var usuarioPlatzi={
    nombre: "Christian ",
    apellida:"Ramos",
    usuarioPlatzi:"chrisburg22",
    correoElectronico:"chrisburg22@platzi.com",
    edad:22,
    dineroAhorrado:5000,
    deudas:3697,
    mayordeEdad: function(){
        if(edad > 18){
            console.log("Es mayor de edad");
        }
        else{
            console.log("Es menor de edad");
        }
    }
};

var nombreCompleto = usuarioPlatzi.nombre + usuarioPlatzi.apellida;
var dineroReal = usuarioPlatzi.dineroAhorrado - usuarioPlatzi.deudas;

function imprimirInfo(){
    console.log(nombreCompleto);
    console.log("El dinero despues de pagar deudas es de " + dineroReal);
}
//-------------------------------------------------------------------------------------------------
/**
 * FUNCIONES
   1.-Una funcion es un bloque de codigo al cual se le puede asignar un nombre o ser anonimo
   2.-Cuando necesitamos de una misma operacion varias veces en un codigo
   3.-El parametro es en si el nombre del espacio de memoria mientas que el argumento es el tipo  de dato guardato en el espacio de memoria
 */
//-------------------------------------------------------------------------------------------------
var persona={
        name: "Christian Alejandro ",
        lastname:"Ramos Peres",
        nickname: "Chrisburg"
    }
  var  nombreCompleto= persona.name + persona.lastname;

function meGustaQueMeDigan(){
    console.log("Mi nombre es " + nombreCompleto + " , pero prefiero que me digan " + persona.nickname ) ;
}; 
//-------------------------------------------------------------------------------------------------
/**
 * CONDICIONALES
 * 1.-Una condicional nos sirve para poder decidir si se va a llvar acabo una accion o no.
 * 2.-Existen el if, esle,else ig y el switch.
 * 3.-Si de echo es algo muy comun en las funciones
 */

//-------------------------------------------------------------------------------------------------
const tipoDeSuspripcion= "basic";

if(tipoDeSuspripcion === "free"){
    console.log("Solo puedes tomar los cursos gratis");
}
else if( tipoDeSuspripcion === "basic"){
    console.log("Puedes tomar casi todos los cursos de platxi durante un mes");
}
else if(tipoDeSuspripcion === "expert"){
    console.log("Puedes tomas todos los cursos de pkatzi durante un año");
}
else if(tipoDeSuspripcion ==="expertPlus"){
    console.log("Tu y alguien mas puede tomar los cursos durante un año");
}
else{
    console.log("No tienes ningun tipo de cuetna");
}
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
if(tipoDeSuspripcion === "free"){
    console.log("Solo puedes tomar los cursos gratis");
}
 if( tipoDeSuspripcion === "basic"){
    console.log("Puedes tomar casi todos los cursos de platxi durante un mes");
}
if(tipoDeSuspripcion === "expert"){
    console.log("Puedes tomas todos los cursos de pkatzi durante un año");
}
if(tipoDeSuspripcion ==="expertPlus"){
    console.log("Tu y alguien mas puede tomar los cursos durante un año");
}
//-------------------------------------------------------------------------------------------------
/**
 * CICLOS
 * 1.-Un ciclo es un codigo que se va a repetir sierta cantidad de veces.
 * 2.-Existe el for, for/in, for/of, while, do/while
 * 3.-Un ciclo infinito es un bucle en donde se esta corriendo las mismas lineas de codigo una y otra vez.
 * 4.-Si podemos mezclarlas
 */

var i = 0;
while(i < 5){
    console.log("El valor de i es: " + i);
    i++;
}
i = 10;
while(i >= 2){
    console.log("El valor de i es: " + i);
    i--;
}