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
