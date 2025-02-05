// Ejercicios: Tipos de Datos enJavaScript

console.log(typeof(42));
console.log(typeof('Veinticionco'));
console.log(typeof(-666));
console.log(typeof(true));
console.log(typeof(0));
console.log(typeof(null));
console.log(typeof(undefined));
console.log(typeof(false));

// este valor no se puede ejecutar
// console.log(typeof(" " ")); 

// Ejercicios experimentales

console.log(typeof('a'));
console.log(typeof(3.1416));
console.log(typeof("Soy un texto"));
console.log(typeof(5 + 4.3211));
console.log(typeof(3 *'a'));


// Este es un comentario en JavaScript

// Console.log es una funcion que se utiliza para imprimir en consola
console.log("Hola mundo");

// Declaracion de variables y asignacion de valores
var nombre = "Jonatan"; // String
var edad = 20; // Number
var sueldo = 1.534 // Number
var casado = false; // Boolean
var vacunas = true; // Boolean
var hijos = null; // Null
var dato; // Undefined

// typeof se utiliza para saber el tipo de dato de una variable
console.log(typeof(nombre));
console.log(typeof(edad));
console.log(typeof(sueldo));
console.log(typeof(casado));
console.log(typeof(vacunas));
console.log(typeof(hijos));
console.log(typeof(dato));

// La semantica es importante, significadoi de las palabras
var nombre = "Farancia";
var pais = 20;

// Nan (Not a Number) es un valor especial en matetamita no es un numero
console.log(10 * "Hola Mundo");

/* Si ponemos typeof de null dira que es objeto, pero en realidad es ausencia intencional de valor. 
Esto es debido a un error en JS que no se ha corregido por compatibilidad con versiones anteriores. */