class Libro {
    constructor(titulo, autor, año, estado = 'disponible') {
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
        this.estado = estado;
    }

    describirLibro() {
        return `Libro titulado "${this.titulo}", escrito por ${this.autor}, en el año ${this.año}, el estado es: ${this.estado}.`;
    }
}

const miLibro = new Libro('1984', 'George Orwell', 1949);
console.log(miLibro.describirLibro()); 

