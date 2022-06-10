const args = process.argv.slice(2);

/**
 * En args tendremos un array con todas las notas de los alumnos. Recorrer el array y calcula la media de las notas y muéstrala por consola
 */

let sumaInicial = 0;

// foreach
args.forEach(element => {
    sumaInicial += Number(element);
});

console.log(sumaInicial/args.length);
 
// console.log de la media
