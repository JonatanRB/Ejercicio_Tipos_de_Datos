function agregarComentario() {
    let newComentario = document.getElementById("comentario").value.trim();

    if (newComentario === "") {
        alert("Debes escribir un comentario!!!");
        return;
    }

    let comentario = document.createElement("li");

    let now = new Date();
    let fechaHora = now.toLocaleDateString() + " " + now.toLocaleTimeString();

    let infoComentario = document.createElement("div");
    infoComentario.innerHTML = `</strong> User - ${fechaHora}`;
    infoComentario.style.fontSize = "13px";
    infoComentario.style.color = "#174747";

    let textoComentario = document.createElement("div");
    textoComentario.textContent = newComentario;
    textoComentario.style.marginTop = "5px";
    textoComentario.style.backgroundColor = "#424250";
    textoComentario.style.color = "alicedumbre";
    textoComentario.style.height = "150px"
    textoComentario.style.borderRadius = "8px";
    textoComentario.style.paddingLeft = "10px"
    textoComentario.style.paddingRight = "10px"
    textoComentario.style.paddingTop = "10px"


    let btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Eliminar";
    btnBorrar.style.marginLeft = "10px";
    btnBorrar.onclick = function () {
        comentario.remove();
    };

    comentario.appendChild(infoComentario);
    comentario.appendChild(textoComentario);
    comentario.appendChild(btnBorrar);
    
    document.getElementById("lista-comentarios").appendChild(comentario);

    document.getElementById("comentario").value = "";
}


