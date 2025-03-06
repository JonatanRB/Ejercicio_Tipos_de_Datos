class Libro {
    constructor(titulo, autor, año, estado) {
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
        this.estado = estado; 
        this.capitulos = []; 
        
    }

    describirLibro() {
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.año}, estado : ${this.estado}.`);
    }

    agregarCapitulo(capitulo) {
        this.capitulos.push(capitulo);
        console.log(`Capitulo "${capitulo}" agregado.`);
    }

    eliminarCapitulo(capitulo) {
        const index = this.capitulos.indexOf(capitulo);
        if (index !== -1) {
            this.capitulos.splice(index, 1);
            console.log(`Capitulo "${capitulo}" eliminado.`);
        } else {
            console.log(`El capitulo "${capitulo}" no existe.`);
        }
    }

    listarCapitulos() {
        console.log(`Capitulos del libro "${this.titulo}":`, this.capitulos.length > 0 ? this.capitulos.join(', ') : "No hay capitulos.");
    }
}

const libro1 = new Libro("Alas de Hierro", "Rebecca Yarros", 2024, "disponible");
libro1.describirLibro();

libro1.agregarCapitulo("Capítulo 1");
libro1.agregarCapitulo("Capítulo 2");

libro1.eliminarCapitulo("Capítulo 2");
libro1.listarCapitulos();
