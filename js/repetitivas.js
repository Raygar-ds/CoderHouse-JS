/* Ciclo FOR */

/* const numero = Number(prompt("Que tabla querés saber"));

for ( let i = 0; i <= 10; i += 1 ) {
    //console.log('7x' + i + ' = ' + 7*i);
    console.log(`${numero}x${i} = ${numero * i}`);
} */

/* const magicNumber = 57;

for (let i = 0; i < 3; i++ ) {

    const numeroUser = Number(prompt("Ingresa un Numero entre 0 y 100"));

    if (numeroUser > 100 || numeroUser < 0) {
        alert("El numero ingresa no esta entre 0 y 100!");
        i--;
        continue;
    }

    if (numeroUser == magicNumber){
        alert("Felicitaciones, encontraste el número mágico");
        break; // Cortamos la ejecución del ciclo
    }else {
        alert("Incorrecto, intenta otra vez");
    }
} */

/* for (let i = 0; i < 10; i++) {
    if ( i % 2 == 0) {
        continue; // Cortamos la iteración actual
    }
    console.log(`Numero ${i}`);
} */

/* Ciclo WHILE */

/* const magicNumber = 57;
let userNumber = Number(prompt("ingresa un numero entre 0 y 100"));

while ( userNumber !== magicNumber ) {

    if ( userNumber < 0 || userNumber > 100){
        alert("El numero ingresa no esta entre 0 y 100!");
        userNumber = Number(prompt("Ingresa un numero entre 0 y 100"));
        continue;
    }
        alert("El numero ingresado es incorrecto")
        userNumber = Number(prompt("Ingresa un numero entre 0 y 100"));
}

alert ("Felicitaciones, encontraste el número magico")
 */
/* Ciclo DO WHILE */

/* const magicNumber = Math.floor(Math.random() * 100);
console.log(magicNumber)
let userNumber;
let intentos = 5;

do {
    userNumber = Number(prompt("ingresa un numero entre 0 y 100 o una letra cualquiera para slair del juego"));
    if ()
    
    if ( userNumber < 0 || userNumber > 100){
        alert("El numero ingresa no esta entre 0 y 100!");
        continue;
    }
    if (userNumber < magicNumber) {
        alert("El numero ingresado es menor que el Magic Number");
        intentos--;
    } else if (userNumber > magicNumber) {
        alert("El numero ingresado es mayor que el Magic Number");
        intentos--;
    } else {
        alert("Felicitaciones, encontraste el número mágico");
    }

} while (userNumber !== magicNumber && intentos > 0)
 */