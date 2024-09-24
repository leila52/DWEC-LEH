let valores=prompt("indica tres valores con comas")
let valoresArray=valores.split(",")

for(let i=0;i<3;i++){
    if(valoresArray[i]>10){
        console.log(`el numero ${valoresArray[i]} es mayor a 10`)
    }
}

