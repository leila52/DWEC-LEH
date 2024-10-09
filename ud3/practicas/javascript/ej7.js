let nombres= [];
let edadess= [];
let media=0;
let edadTotal=0;

for(let i=0;i<2;i++){
    let nombre =prompt("introduce el nombre :");
    nombres.push(nombre);
    let edad =prompt("introduce la edad:");
    edadess.push(parseInt(edad));
    edadTotal= edadTotal + parseInt(edad);
}
for(let i=0;i<2;i++){
    console.log(`el nombres : ${nombres[i]} y su edad : ${edadess[i]}`)
}
media=parseInt(edadTotal/edadess.length);
console.log(`la media de las edades son: ${media}`);
 
let opccionBorrarContenido=prompt("¿Deseas borrar un socio por nomnombre o contenido");

if(opccionBorrarContenido ==='nombre'){
    let nombreABorrar=prompt("introduce el nombre del socio que quieres borrar");
    let indice=nombres.indexOf(nombreABorrar);
    if(indice !== -1){
        nombres.splice(indice,1);
        edadess.slice(indice,1);
        console.log("se ha borrado");
        for(let i=0;i<2;i++){
            console.log(`el nombres : ${nombres[i]} y su edad : ${edadess[i]}`)
        }
    }else{
        console.log("error");
    }
}


