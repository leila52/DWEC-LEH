// ejemplo 2*1=2 y 2*2 =4

let contador = 0
do{
    let valores=parseInt(prompt("Introduce el numero"))
    let esPrimo = (valores) => {
        if(valores <=1){
            return false; 
        }
        for(let i=2;i<valores;i++){
            if(valores % i === 0){
                return false;
            }
        }
        return true;
    }
    if(esPrimo(valores)===true){
        console.log(`el numero ${valores}  es ${esPrimo(valores)}`)
    }else{
        console.log(`el numero ${valores}  es ${esPrimo(valores)}`)
    }
contador++
}while (contador <2) 