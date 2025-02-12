// CICLO WHILE

// Programa para mostrar los 5 multiplos de un numero dado por el usuario
let numero = 30;
let count = 1;

console.log("Numeros pares de 5");
while (count < numero) {
    // Codigo a iterar
    if(count % 5 === 0){
        console.log(count);
    }
    count++; // Incremento del contador
} 

// contador = contador + 1;  incremento
// contador = contador - 1;  decremento

// CICLO FOR

console.log("\nNumeros impares de 2");
for(let index = 0; index <= numero; index++){
    if(index % 2 !== 0){
        console.log(index);
    }
}

// Imprimir los numeros del 1 al 10
let inicio = 0;

console.log("\nWhile");
while(inicio <= 10){
    console.log(inicio)
    inicio++;
}

console.log("\nFor");
for(let i = 0; i <= inicio; i++){
    console.log(inicio);
}