let valores=prompt("Introduce las notas con; ")
let valoresArray=valores.split(";")

for(let i=0;i<valoresArray.length;i++){
    if(valoresArray[i]>=0 && valoresArray[i]<3){
        console.log(`${valoresArray[i]} es muy deficiente`)
    }
    if(valoresArray[i]>=3 && valoresArray[i]<5){
        console.log(`${valoresArray[i]} es un insuficiente`)
    }
    if(valoresArray[i]>=5 && valoresArray[i]<6){
        console.log(`${valoresArray[i]} es un bien`)
    }
    if(valoresArray[i]>6 && valoresArray[i]<9){
        console.log(`${valoresArray[i]} es un notable`)
    }
    if(valoresArray[i]>=9 && valoresArray[i]< 11 ){
        console.log(`${valoresArray[i]} es un sobresaliente`)
    }
}