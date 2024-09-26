let valor=prompt("indica cuantos valores quieres")
let dibujo=""
for(let i=0;i<valor;i++){
    for(let j=0;j<=i;j++){
        dibujo+="*"
    }
    //se concadena el salto de linea
    dibujo+="\n"
}
console.log(dibujo)