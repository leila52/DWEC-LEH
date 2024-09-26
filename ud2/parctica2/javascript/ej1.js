//funcion normal
function suma(a,b){
    //console.log(arguments)
    let total=a+b
    return total
}
//funcion anonima
let sumaAnonima = function  (a,b){
    return a+b;
}
//funcion flecha
let sumaFlecha = (a,b) => {
    let total=a+b
    return total
}

let sumaFlecha2 = (a,b) => a+b
