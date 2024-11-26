let cajita = document.getElementById("idCaja");
let cuerpo = document.body;
//inicimaos las posiciones
let x=0;
let y=0;
cuerpo.addEventListener('keydown', moverCuadrado);
function mostrartecla(e){
    console.log("codigo de tecla pulsada",e.code);
}

function moverCuadrado(e){
    console.log(e)
    //Ariba
    if(e.key =="ArrowUp" || e.key == 8){
        console.log("ariba");
        y=y-10;
    }
    //abajo
    if(e.key =="ArrowDown" || e.key == 2){
        console.log("abajo");
        y=y+10;
    }
    //izquierda
    if(e.key =="ArrowLeft" || e.key == 4){
        console.log("izquierda");
        x=x-10;
    }
    //derecha
    if(e.key =="ArrowRight" || e.key == 6){
        console.log("derecha");
        x=x+10;
    }

    cajita.setAttribute("style", `left: ${x}px;top: ${y}px;`);
    
}