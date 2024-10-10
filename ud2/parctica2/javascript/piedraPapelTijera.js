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
        
    }else{
        let eleccionMaquina=eleccionMaquinaFun();
        if(eleccionPersona=== 1){
            console.log("eleccion tuya: piedra")
        }
        if(eleccionPersona=== 2){
            console.log("eleccion tuya: papel")
        }
        if(eleccionPersona=== 3){
            console.log("eleccion tuya: tijera")
        }
        if(eleccionMaquina=== 1){
            console.log("eleccion de maquina: piedra")
        }
        if(eleccionMaquina=== 2){
            console.log("eleccion de maquina: papel")
        }
        if(eleccionMaquina=== 3){
            console.log("eleccion de maquina: tijera")
        }

        //empate 
        if(eleccionMaquina===eleccionPersona){
            console.log("habeis empatado noooo");
            empate++;
        }
        if((eleccionPersona===1 && eleccionMaquina===3) ||(eleccionPersona===2 && eleccionMaquina===1)|| (eleccionPersona===3 && eleccionMaquina===2)){
            console.log("has ganado");
            ganar++;
        }else{
            console.log("has perdido joooo");
            perder++;
        }
        console.log(`marcador son: has ganado ${ganar}, has perdido  ${perder}  y habeis empatado ${empate}`)
    }

    
}
