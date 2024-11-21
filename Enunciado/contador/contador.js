let contador = parseInt(prompt("introduzca un valor"));

setInterval(() => {
    if(contador>=0){
        console.log(contador);
        contador--;
    }
    else{
        setTimeout(() => {
            alert("hasta otra colega ")
        }, 2000);
    }
    
}, 1000 );
