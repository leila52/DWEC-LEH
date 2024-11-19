let alerta;
let idB;
let numero=60;
let num=function(){
        numero--;
        console.log(`00:·${numero}`);
        if(numero <=0){
            clearInterval(idB);
            console.log("ha acabo del tiempo")
        }
        
    }
idB=setInterval(num,1000);



