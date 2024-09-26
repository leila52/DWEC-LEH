// ejemplo 2*1=2 y 2*2 =4

let contador = 0
do{
    let valores=prompt("Introduce el numero")
    let esPrimo = (valores) => {
        if(valores*1===valores && valores %valores ===0){
        return true
        }
        return false
    }
    if(esPrimo===true){
        console.log(`el numero ${valores}  es ${esPrimo}`)
    }else{
        console.log(`el numero ${valores}  es ${esPrimo}`)
    }
contador++
}while (contador <2) 