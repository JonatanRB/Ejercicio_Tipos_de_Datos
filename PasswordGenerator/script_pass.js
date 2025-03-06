document.addEventListener('DOMContentLoaded', () => {

    const generar = document.getElementById("generar");
    const longitud = document.getElementById("lengt");
    const valorLongitud = document.getElementById("valor-longitud");
    const cbtnMayus = document.getElementById("mayusculas");
    const cbtnMinus = document.getElementById("minusculas");
    const cbtnNumeros = document.getElementById("numeros");
    const cbtnSymbols = document.getElementById("simbolos");
    const texto = document.getElementById('texto');
    const copy = document.getElementById('copy');
    const textoSeguridad = document.getElementById("seguridad");


generar.addEventListener('click', (e) => {
    
    let string = '';

    if(cbtnMayus.checked){
        string += 'ABCDEFGHIJKLMNOPQRSTUVWXZY';
    }
    if(cbtnMinus.checked){
        string += 'abcdefghijklmnopqrstuvwxyz';
    }
    if(cbtnNumeros.checked){
        string += '0123456789';
    }
    if(cbtnSymbols.checked){
        string += '.,-_/~*#$%&!';
    }

    const len = parseInt(longitud.value);
    
    if(len <= 5){
        textoSeguridad.textContent = "Insegura";
        textoSeguridad.style.color = "#ea5d5d"
    }else if (len >= 5 && len <= 10) {
        textoSeguridad.textContent = "Media"
        textoSeguridad.style.color = "#f8fe83"
    } else {
        textoSeguridad.textContent = "Segura"
        textoSeguridad.style.color = "#5deab2"
    }

    let newPassword = '';
    for(let i = 0; i <= len; i++){
        let caracter = Math.floor(Math.random() * string.length + 1);
        newPassword += string.charAt(caracter);
    }
    texto.value = newPassword;
    evaluateStrength(newPassword);
});

copy.addEventListener("click", (e) => {
    texto.select();
    
});

longitud.addEventListener('input', (e) => {
    valorLongitud.textContent = longitud.value;
});

copy.addEventListener("click", async () => {
    await navigator.clipboard.writeText(texto.value);

    copy.innerHTML = "<box-icon name='check-circle' color='#5deadc' ></box-icon>";
    setTimeout(() => {
        copy.innerHTML = "<box-icon name='copy-alt' color='#5deadc' ></box-icon>";
    }, 1000);
});

})

