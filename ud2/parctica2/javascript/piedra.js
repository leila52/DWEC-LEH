const PIEDRA = 'piedra';
const PAPEL = 'papel';
const TIJERA = 'tijera';
let ganar = 0;
let perder = 0;
let empate = 0;
let nombre="";
let infoJugador=new Map([["nombre",""],["ganar",0],["perder",0],["empatar",0]]);


const CONDICIONGANAR = [`${PIEDRA}-${TIJERA}`, `${TIJERA}-${PAPEL}`, `${PAPEL}-${PIEDRA}`];

const opciones = [PIEDRA, PAPEL, TIJERA];

function obtenerEleccionComputadora() {
    let opcion = Math.floor(Math.random() * 3);
    return opciones[opcion];
}

function menu() {
    console.log("juego piedra papel o tijera");
    console.log("0.piedra");
    console.log("1.papel");
    console.log("2.tijera");
    
    let opcion = parseInt(prompt("selecciona piedra(0), papel(1) o tijera(2)"));
    return opcion;
}

function determinarGanador(jugador, computadora) {
    if (jugador === computadora) {
        empate++;
        return "es un empate";
    }
    if (CONDICIONGANAR.find(elemento => elemento === `${jugador}-${computadora}`)) {
        ganar++;
        return "ganaste oleee";
    }
    perder++;
    return "la maquina gana";
}

function jugar() {
    let eleccionJugador = -1;
    let eleccionMaquina = -1;
    

    do {
        eleccionJugador = menu();
    } while (eleccionJugador > 2 || eleccionJugador < 0);

    eleccionMaquina = obtenerEleccionComputadora();
    console.log(`Has seleccionado ${opciones[eleccionJugador]}`);
    console.log(`La máquina ha seleccionado ${eleccionMaquina}`);
    console.log(determinarGanador(opciones[eleccionJugador], eleccionMaquina));
    
}

infoJugador.set('nombre',prompt("introduce el nombre"));

do{
    jugar();
}while(confirm("desea continuar?"));

//let idA=setInterval(jugar,10000);

infoJugador.set('ganar',ganar);
infoJugador.set('perder',perder);
infoJugador.set('empate',empate);
console.log(`-----adios de la partida------`);
console.log(`Su nombre ${infoJugador.get("nombre")}`);
console.log(`Partidas ganadas ${infoJugador.get("ganar")}`);
console.log(`Partidas perdidas ${infoJugador.get("perder")}`);
console.log(`Partidas empatadas ${infoJugador.get("empate")}`);


