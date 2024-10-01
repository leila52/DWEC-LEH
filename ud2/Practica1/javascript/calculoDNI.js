const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L',
    'C', 'K', 'E'];


let numero=0;
let dniArrays=[];
while(numero >0 || numero < 99999999){
    numero = parseInt(prompt("introduce el numero de dni"));
    if(numero >0 && numero <99999999){
        let letra="";
        let posicion = numero % 23;
        letra=letras[posicion];
        dniArrays.push(`${numero}${letra}`)
        console.log(`Tu dni es: ${numero}${letra}`) 
        break;
     }
     else
        alert("error vuelve a introducir numero");
}