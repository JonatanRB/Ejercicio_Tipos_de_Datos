// Tipo de mascota gato, perro, hamster

// Condicionales (Jaula grande, mediana o grande).

let tipoDeMascota = "Perro";

if (tipoDeMascota === "Perro"){
    console.log("Si tienes un perro, necesitas la jaula grande")
} else if (tipoDeMascota === "Gato"){
    console.log("Si tienes un gato, necesitas la jaula mediana");
}else { // else es el bloque falso. Se ejecuta si no se cumple alguna de las condiciones anteriores
    console.log("Si tienes un hamster, necesitas una jaula pequeña");
}

// Semaforo

let Semaforo = "verde";

if (Semaforo === "verde"){
    console.log("Siga");
}else if (Semaforo === "amarrillo"){
    console.log("Detente");
}else {
    console.log("Alto")
}

// Para poder obtener una beca 

let creditos = 10; // Minimo 10 creditos
let promedio = 8.3; // Minimo 8.5

if (creditos >= 10 && promedio >= 8.5){
    console.log("Tienes derecho a una beca");
}else if (creditos < 10 && promedio >= 8.3){
    console.log("Te hacen falta creditos");
}else if (creditos >= 10 && promedio < 8.5){
    console.log("Tu promedio debe subir");
}else{
    console.log("No tienes derecho a una beca")
}

//  Problema Clase 2: Evaluador de Notas con Mensajes Personalizados

let nota = 75;

if (nota >= 90){
    console.log("Exelente");
}else if (nota >= 75 && nota <= 89){
    console.log("Bien");
}else if (nota >= 60 && nota <= 74){
    console.log("Suficiente"); 
}else{
    console.log("No aprueba!!!")
}