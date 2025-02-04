//Variables
let numeroSecreto = Math.floor(Math.random()*55)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = `Intento`;
let maximosIntentos = 5

console.log(numeroSecreto)

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 55 por favor:"));

    console.log(typeof(numeroUsuario));
    /*
    Este código realiza
    la comparación
    */
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        if(numeroUsuario > numeroSecreto) {
            alert ('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor')
        }
        //Aumentamos el contador cuando no acierta
        // intentos = intentos + 1;
        // intentos += 1<;
        intentos ++;
        palabraVeces = `Intentos`;
        if (intentos > maximosIntentos) {
            alert(`Llegaste al numero máximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}