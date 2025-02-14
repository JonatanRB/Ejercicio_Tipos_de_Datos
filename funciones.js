
// Palabra revervada function + nombre de la funcion + parametros
function sumar(num1, num2){  
    let total = num1 + num2;
    return total
}

let resultado = sumar(10,20); // Return nos permite guardar el resultado en una variable
console.log(resultado);

console.log(sumar(10,5));

sumar(3,2); // Se ejecuta pero no se imprime

function saludar (nombre){
    console.log("Hola, Bienvenido " + nombre); // Concatenar
}

saludar("Carolina");
saludar("Monzerrat");

function restar(a,b){
    let total = a - b;
    console.log(total); // Consol log solo se imprime en consola
}

restar(13,2);

function casita(){ // No recive parametros(Datos de entrada)
    let nombre = "Jonatan";
    let apellido = "Rea";
    console.log("Esta es una casa");
}

casita();

// console.log(nombre); // No se puede acceder por que esta dentro de la funcion, es decir tenemos un scope dentro del bloque

let nombre = "Vanessa"; // Variable global
let edad = 23;
let ciudad = "Ciudad de Mexico";

console.log("Ella se llama " + nombre + " Tiene " + edad + " Vive en " + ciudad);

console.log(`Ella se llama ${nombre} tiene ${edad} años y vive en ${ciudad}`);
// Ctrl + Alt + }
// Actualizacion de ES6 (2015)


// Pedir datos al usuario
/* let usr = prompt("¿Cual es tu nombre?"); // Se guardan en string
let gatos = prompt("¿Cuantos gatos tienes?");
let perros = prompt("¿Cuantos perros tienes?");

// Vemos los datos en consola
console.log(`${usr} tienes ${gatos} gatos y ${perros} perros`);

// Vemos los datos en pop up
alert(`${usr} tienes ${gatos} gatos y ${perros} perros`);

// Vemos los datos en la pagina
document.write(`${usr} tienes ${gatos} gatos y ${perros} perros`);

let totalMascotas = parseInt(gatos) + parseInt(perros);
let totalMascotasN = Number(gatos) + Number(perros);

alert(`En total tiene ${totalMascotas}`); */

// EJERCICIO: Crea uia funcion para guardar libros
let librosLeidos = [];

function agregarLibro (titulo){
    librosLeidos.push(titulo);
}

agregarLibro("El señor de los anillos");
agregarLibro("La Iliada");
agregarLibro("Alas de sangre");
agregarLibro("Cartas a los muertos");
agregarLibro("Buscando a Alaska");

function mostrarLibrosLeidos (){
    for(let i = 0; i < librosLeidos.length; i++){
        console.log(librosLeidos[i]);
    }
}

mostrarLibrosLeidos();