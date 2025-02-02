let numeroSecreto = 0;
let intentos = 0;
let listasNumerosSorteados = [];
let numeroMaximo = 10

console.log(numeroSecreto);
//Esta función esta bien, sin diferencia
function asignarTextoElemto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
        
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemto('p', `Acertaste el número secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`)
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemto("p", `El numero secreto es menor`);
        } else {
            asignarTextoElemto("p", "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return; 
}
// Función limpiar caja esta bien
function limpiarCaja (){
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;  

    console.log(numeroGenerado);
    console.log(listasNumerosSorteados);
    //Si ya sorteamos todo los numeros 
    if (listasNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemto('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        // Si ya sorteamos todos los núemeros 
        if (listasNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
        } else {
            listasNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }  
}

function condicionesIniciales (){
    asignarTextoElemto("h1","Juego del número secreto");
    asignarTextoElemto("p",`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiarCaja()
    limpiarCaja();
    // Indicar mensaje de intervalo de números
    // Generar nuevamente el número aleatorio
    // Reiniciar el numero de intentos
    condicionesIniciales ();
    // Deshabilitar el botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute('disabled', 'true');    

}

condicionesIniciales();