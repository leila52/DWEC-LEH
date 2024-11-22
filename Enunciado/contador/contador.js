let contador = parseInt(prompt("introduzca un valor"));

let cuentsa= setInterval(() => {
    if(contador>=0){
        console.log(contador);
        contador--;
    }
    else{
        //limpiamos
        
        setTimeout(() => {
            alert("hasta otra colega ")
        }, 2000);
        clearInterval(cuenta);
    }
    
}, 1000 );
