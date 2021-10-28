
/* ACA ARRANCA MI TRABAJO DE CONDICIONALES */

alert("Bienvenido a Coder practice House de Diego!");

const edadUser = Number(prompt("Para poder avanzar necesitamos verificar tu edad, solo aquellas personas mayores a 18 puede proseguir! Coloque su edad:"));
var usuario = "";
if (edadUser >= 18) {
    alert("Bienvenido!")
} else if (edadUser < 18) {
    alert("Las autoridades no permiten niños a este sector, volve en los proximos " + (18 - edadUser) + " años!")
} else {
    alert("Bienvenido!");
}
if (edadUser >= 18){
    var usuario = prompt("Para poder avanzar debes iniciar sesion. eres usuario Recurrente o Nuevo?");
    console.log(usuario);
    if (usuario == "Nuevo") {
        let userLogin = prompt("Ingrese un usuario:");
        let userPass = prompt("ingrese una password:");

        console.log(userLogin + userPass);

        let User1 = prompt("Ingrese su usuario");
        let Pass1 = prompt("Ingrese su password");

        if (User1 == userLogin && Pass1 == userPass) {
            alert("Bienvenido " + userLogin + "!");

        } else {
            alert("Datos incorrectos");

        }
    } else if (usuario == "Recurrente") {

        const adminUser = "admin";
        const adminPass = "admin";

        console.log(adminPass + adminUser);
        
        let User2 = prompt("Ingrese usuario");
        let Pass2 = prompt("Ingrese password");

        if(User2 == adminUser && Pass2 == adminPass) {
            alert("Bienvenido Administrador!");
        } else {
            alert("Datos incorrectos");
        }
    } else {
        alert("Porfavor refresque y seleccione Nuevo o Recurrente!")
    }
} else{
    alert("Adios");
}