//console.log(process.argv);
const args = process.argv.slice(2);

let texto = args[0]; // es un array al fin y al cabo, tengo que acceder a su posición

console.log(texto.replaceAll(' ', ''))
