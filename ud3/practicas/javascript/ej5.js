let socios= [];

for(let i=0;i<4;i++){
    let nombre =prompt("introduce el nombre del socio :");
    socios.push(nombre);
}
console.log("nombres de los socios: ");
console.log(socios.join(", "));

console.log(`numero de socios  ${socios.length}`);

//mostrar los socios albaceticamente
let sociosEnOrden = socios.sort();
console.log("los nombre ordenados: ");
console.log(sociosEnOrden.join(", "));

//mostrarlo en orden inverso
let sociosInversa= socios.reverse();
console.log("los nombre invertidos: ");
console.log(sociosInversa.join(", "));