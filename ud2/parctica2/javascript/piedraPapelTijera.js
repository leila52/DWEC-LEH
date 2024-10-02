function eleccionMaquinaFun() {
    return Math.floor(Math.random() * 3) +1;
}
function menu(){
    console.log("juego piedra papel o tijera");
    console.log("1.piedra");
    console.log("2.papel");
    console.log("3.tijera");
    console.log("0.salirrr");
    let opcion = parseInt(prompt("elegir opccion"));
    return opcion;
}

let ganar=0;
let perder=0;
let empate=0;
let jugando =true;

while(jugando=== true){
    let eleccionPersona = menu();

    if(eleccionPersona === 0){
        jugando=false;
        console.log("adiossss pescado");
        break;
    }
    if(eleccionPersona <1 || eleccionPersona >3){
        console.log("error,introduce de nuevo ");

    }

    let eleccionMaquina=eleccionMaquinaFun();
     console.log(`eleccion de jugado ${eleccionPersona}`)
}
