let contador = 0
do{
    let anyo=prompt("Introduce el año ")
    let esBisiesto = (anyo)=>{
        if(parseInt(anyo)%4===0 || parseInt(anyo)%400===0){
            esBisiesto=1
            return esBisiesto
        }
        return 0
        }
    if(esBisiesto(anyo)===1){
        console.log(`El año ${anyo} si es bisiesto`)
    }else{
        console.log(`El año ${anyo} no es bisiesto`)
    }
contador++
}while (contador <3)