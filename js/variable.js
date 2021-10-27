console.log("Hola, este es mi documento de variable.js")

// ACA VOY ARMAR MI VARIABLE EN JS, LA IDEA ES AVERIGUAR LA EDAD DEL USUARIO

alert("Bienvenido profe!");

alert("En esta secuencia vamos descubrir tu edad con matematicas simples!");

// Aca utilizo const para generar una variable bloqueada que se llama añoActual, y utilizo Number para convertir el valor obtenido por Prompt en un numero.

const añoActual = prompt("Introducir el año actual, en formato AAAA por favor!");

// Utilizo un alert para mostrar la información que selecciono el usuario. 

alert("Perfecto, estamos en el año " + añoActual + " que rapido se paso el tiempo!");

// genero otra const para obtener otra variable bloqueada y utilizando number para convertir de string a numero, obtenido con prompt.

const añoNacimiento = prompt("Si no molesta preguntar, en que año naciste? mismo formato de AAAA por favor!");

// Una secuencia de alerts para generar un monologo divertido con el user.

alert("Ahhh si.. que buena epoca fue " + añoNacimiento);
alert("...");
alert("¿Por qué me estas mirando? tengo algo en la pantalla?");
alert("Ay Si! Perdón, pasa que tu navegador no me deja mucha memoria ram y se me olvidan cosas");

// Aca una variable const para realizar una simple operacion de restas.

const edad = añoActual + añoNacimiento

//Por ultimo un Alert insertando el valor de la operacion.

alert("Tu edad es " + edad + "!");
alert("Hmmm aca algo salio mal en los calculos, esa no puede ser tu edad. Vuelvo en 1 min a revisar que paso.");

const edadCorrecta = Number(añoActual) - Number(añoNacimiento);

alert("Ahi encontre el error, perdón por la demora!");
alert("Tu edad es " + edadCorrecta + " :D");