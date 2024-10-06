let socios= [];

for(let i=0;i<4;i++){
    let nombre =prompt("introduce el nombre del socio :");
    socios.push(nombre);
}
console.log("nombres de los socios: ");
console.log(socios.join(", "));

console.log(`numero de socios  ${socios.length}`);

//mostrarlo en orden inverso
console.log("los nombre invertidos: ");
console.log(socios.reverse().join(", "));

//mostrar los socios albaceticamente

console.log("los nombre ordenados: ");
console.log(socios.sort().join(", "));


