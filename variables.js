// var es una forma antigua de decir variables, let es la forma moderna de declarar variables.

var nombre = "ana";
var nombre = "Fernanda";
var nombre = "Victoe";

console.log(nombre);

// Let no permite redireccionar variables, lo que significa que no puedes declarar la misma variable dos veces.

// let tiene un scope de bloque, lo que significa que solo vive en el bloque donde fue declarado.

let apellido = "Guitierrez";
let apellido2 = "Lopez";

// let permite cambiar el valor 
// Reasignacion de valor
apellido1 = "Perez;"
console.log(apellido1);

// const es una constante, no se puede reasignar el valor
const Pi = 3.1416;
Pi = 4; // Esto no se puede hacer.