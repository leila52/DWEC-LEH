let nombres= [];
let edadess= [];
let media=0;
let edadTotal=0;

for(let i=0;i<2;i++){
    let nombre =prompt("introduce el nombre :");
    nombres.push(nombre);
    let edad =prompt("introduce la edad:");
    edadess.push(edad);
    edadTotal= edadTotal + parseInt(edad);
}
for(let i=0;i<2;i++){
    console.log(`el nombres : ${nombres[i]} y su edad : ${edadess[i]}`)
}
media=parseInt(edadTotal/edadess.length);
console.log(`la media de las edades son: ${media}`);
 
let contenido =prompt("borrar  :");
//reduce

edadess.find((elemento)=>elemento === contenido);


