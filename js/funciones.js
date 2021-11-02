/* Funciones */

/* Sintaxis 1 */
// function saludar() {

// }

// saludar();

/* EJ Calculadora */

function sumar (x, y) {
    const resultado = x + y
    console.log(`El resultado de ${x} + ${y} es ${resultado}`);
    return resultado;
}
function restar (x, y) {
    const resultado = x - y
    console.log(`El resultado de ${x} - ${y} es ${resultado}`);
    return resultado;
}
function multiplicar (x, y) {
    const resultado = x * y
    console.log(`El resultado de ${x} * ${y} es ${resultado}`);
    return resultado;
}
function dividir (x, y) {
    const resultado = x / y
    console.log(`El resultado de ${x} / ${y} es ${resultado}`);
    return resultado;
}

const operacion = Number(prompt(`Que operacion queres realizar?
1 - Sumar
2 - Restar
3 - Multiplicar
4 - Dividir`));

const x = Number(prompt("Ingresa el primer numero"));
const y = Number(prompt("Ingresa el segundo numero"));

switch (operacion) {
    case 1:
        const sumar = sumar(x,y);
        break;
    case 2:
        restar(x,y);
        break;
    case 3:
        multiplicar(x,y);
        break;
    case 4:
        dividir(x,y);
        break;
    default:
        break;
}


  