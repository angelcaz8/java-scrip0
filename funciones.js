let librosLeidos = ["EL PERFUME","don quijote" ];// Array para almacenar los libros

// Función para agregar libros
function agregarLibro(titulo) {
 librosLeidos.push(titulo);
}

// Función para mostrar libros (usando for clásico)
function mostrarLibrosLeidos() {
     for (let i = 0; i < librosLeidos.length; i++) {
 console.log(librosLeidos[i]);
 }
}
mostrarLibrosLeidos();
