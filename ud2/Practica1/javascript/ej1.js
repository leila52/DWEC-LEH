
let nombre= prompt('introduce su nombre')

let apellido = prompt('introduce su apellido')
let valores=prompt("indica tres valores con comas")
let valoresArray=valores.split(",")

console.log(`nombre completo ${nombre} ${apellido}`)

let suma=0
for(let i=0;i<3;i++){
    suma+=parseInt(valoresArray[i])
}
console.log(`la suma es: ${suma}`) 

/*let multiplicacion=0
for(let i=0;i<3;i++){
    multiplicacion*=parseInt(valoresArray[i])
}
    */
console.log(`la multiplicacion es: ${parseInt(valoresArray[0])*parseInt(valoresArray[1])*parseInt(valoresArray[2])} `) 

console.log(`la division es: ${parseInt(valoresArray[0])/parseInt(valoresArray[2])}`)