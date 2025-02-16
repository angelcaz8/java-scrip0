
let nota = 45; 

// Verificar si la nota es válida
if (nota >= 0 && nota <= 100) {
    // Evaluar la nota y generar el mensaje correspondiente
    if (nota >= 90) {
        console.log(`Tu nota es ${nota}: Excelente `);
    } else if (nota >= 75) {
        console.log(`Tu nota es ${nota}: Bien `);
    } else if (nota >= 60) {
        console.log(`Tu nota es ${nota}: Suficiente `);
    } else {
        console.log(`Tu nota es ${nota}: estudiante no aprueba`);
    }
}
