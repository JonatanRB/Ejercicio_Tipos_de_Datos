// Contador de Frutas con For


let frutas = ['Manzana', 'Mango', 'Freasa','Manzana','Mango','Manzana'];

let count = {};

for(let i = 0; i < frutas.length; i++){
    let fruta = frutas[i];
    if(count[fruta]){
        count[fruta]++;
    }else{
        count[fruta] = 1;
    }
}

console.log("Inventario de frutas:");
for (let fruta in count){
    console.log(`${fruta}: ${count[fruta]}`);
}

// Contador de Frutas con While
contador = 0;
let count2 = {};

while (contador < frutas.length){
    let fruta = frutas[contador];
    if(count2[fruta]){
        count2[fruta]++;
    }else{
        count2[fruta] = 1;
    }
    contador++;
}

console.log("\nInventario de frutas:");
for (let fruta in count2){
    console.log(`${fruta}: ${count2[fruta]}`);
}