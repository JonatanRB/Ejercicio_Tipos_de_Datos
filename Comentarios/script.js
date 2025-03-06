function agregarComentario() {
    let newComentario = document.getElementById("comentario").value.trim();
    if (newComentario === "") {
        alert("Debes escribir un comentario!!!");
        return;
    }

    let comentario = document.createElement("li");

    let now = new Date();
    let fechaHora = now.toLocaleDateString() + " " + now.toLocaleTimeString();

    comentario.textContent = `${fechaHora} ${newComentario}`;

    let btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Borrar";
    btnBorrar.onclick = function () {
        comentario.remove();
    };

    comentario.appendChild(btnBorrar);
    document.getElementById("lista-comentarios").appendChild(comentario);
    document.getElementById("comentario").value = "";
}




