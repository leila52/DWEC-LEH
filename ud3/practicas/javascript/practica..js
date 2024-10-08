let contador=0;
let alerta =function(){
    console.log(`hola  ${contador}`);
    contador++;
}
let idA=setInterval(alerta,2000);
console.log(`el identificador del setInterval es ${idA}`)

/*let contador=0;
let alerta =function(){
    console.log("hola han pasado 7 segundo");
}
let idA=setTimeout(alerta,7000); */

/* arraysssss */
let edades=[12,34,45,56,7,8];
for(let i=0; i<edades.length;i++){
    console.log(edades[i]);
}

edades.forEach(function(elemento) {
    console.log(elemento)
})

edades.every((elemento)=>elemento >18);

edades.some((elemento)=>elemento >18);

edades.find((elemento)=>elemento === 34);
//te devuelve el posicion

edades.findIndex((elemento)=>elemento === 34);

let edadesSuma= edades.map(elemento => elemento+1);



//set elementos no repetidos
let ganadores = ['Márquez', 'Rossi', 'Márquez', 'Lorenzo', 'Rossi', 'Márquez', 'Márquez'];

let ganadoresNoDuplicado = new Set(ganadores);
//let ganadoresNoDuplicados = new Set(ganadores);
let ganadoresNoDuplicados = Array.from(new Set(ganadores));// ['Márquez, 'Rossi','Lorenzo']

ganadoresNoDuplicado.add("leiluss");
ganadoresNoDuplicado.has("Rossi");
ganadoresNoDuplicado.delete(1);
ganadoresNoDuplicado.clear();


//map
let persona = new Map([
    ['nombre', 'Agustin'],
    ['apellido', 'Aguilera'],
    ['edad', 99]
   ]);

persona.get("edad");
persona.set("nombre","leilaaa");