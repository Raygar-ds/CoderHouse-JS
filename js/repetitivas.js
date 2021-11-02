
//                                                        _...--.
//                                        _____......----'     .'
//                                  _..-''                   .'
//                                .'                       ./
//                        _.--._.'                       .' |
//                     .-'                           .-.'  /
//                   .'   _.-.                     .  \   '
//                 .'  .'   .'    _    .-.        / `./  :
//               .'  .'   .'  .--' `.  |  \  |`. |     .'
//            _.'  .'   .' `.'       `-'   \ / |.'   .'
//         _.'  .-'   .'     `-.            `      .'
//       .'   .'    .'          `-.._ _ _ _ .-.    :
//      /    /o _.-'     ______    .--'   .'   \   |
//    .'-.__..-'        | 82  |   /..    .`    / .'
//  .'   . '            ------    /.'/.'     /  |
// `---'                                  _.'   '
//                                      /.'    .'
//                                       /.'/.'

//INTRUSO ALERT! QUACK!!!

/* Aca inicia mi trabajo de CICLOS */

/* crear un numero random y hacer que el usuario adivine, pero van haber alertas dando pistas   */

const numeroMagico = Math.floor(Math.random() * 21);
console.log(numeroMagico);
let userNumber = prompt(`La maquina eligio un numero entre 0 y 20
Que numero creen que eligio?`);

for (i = 0; i < 5; i++) {

    if (userNumber == numeroMagico) {
        alert(`Muy bien! El numero magico era ${numeroMagico}!`);

        alert(`No fue tan dificil no?
        vamos a subir de nivel.`)

        const numeroGanso = 82
        console.log("pstt, mira el codigo ;)")
        let userGanso = prompt(`El ganso cuida de un numero, que numero es?`);

        for (i = 0; i < 1; i++) {
            if (userGanso == numeroGanso) {
            alert(`Muy bien! El ganso cuidaba ${numeroGanso}!`);
            break;
            } else {
                alert("El Ganso te pico :( Sera la proxima!");
                break;
            }

        }
        break;
    } else {
        if (userNumber > numeroMagico) {
            alert("Tu numero es mayor al Numero Magico");
        } else if (userNumber < numeroMagico) {
            alert("Tu numero es menor al Numero Magico");
        }
        //alert(`Te quedan ${4 - i} intentos.`)
        userNumber = prompt(`Te quedan ${4 - i} intentos. Volve a intentar!`);
    }
}

// alert(`No fue tan dificil no?
// vamos a subir de nivel.`)

// const numeroGanso = 52
// let intentos = 1;
// let userGanso = prompt(`El ganso cuida de un numero, que numero es?`);
// console.log("pstt, mira el codigo ;)")

// for (i = 0; i < 1; i++) {
//     if (userGanso == numeroGanso) {
//         alert(`Muy bien! El ganso cuidaba ${numeroGanso}!`);
//         break;
//     } else {
//         alert("Es no era el numero y el ganso te pico :( sera la proxima!");
//         break;
//     }
// }