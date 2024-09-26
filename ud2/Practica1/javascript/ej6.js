let contador = 0
do{
    let valores=prompt("Introduce las notas con , ")
    let valoresArray=valores.split(",")
    function boolean(valoresArray){
        for(let i=0;i<valoresArray.length;i++){
            let num=valoresArray[i]
            if(parseInt(valoresArray[i])===10){
                return true
            }
            return false
        }
    }
    if(boolean(valoresArray)===true){
        console.log(`La cadena ${valores} Si contienen 10`)  
    }
    else{
        console.log(`La cadena ${valores} No contienen 10`) 
    }
    contador++
}while (contador <3)

