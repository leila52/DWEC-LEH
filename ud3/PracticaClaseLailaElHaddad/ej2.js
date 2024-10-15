const alumnos = [ "Juan", "María", "Pedro", "Ana", "Sofía", "Luis", "Miguel", "Fernando", "Valeria" ];
let alumnosNoDuplicados = new Set();

let num=function(){
    let aleatorio=Math.floor(Math.random() *9) ;
    //comprobar
    alumnosNoDuplicados.add(alumnos[aleatorio]); 
}
let idB=setInterval(num,2000);
let alerta =function(){
    clearInterval(idB);
    //muestra los nombres que se han añadido al set a los 10 seg
    console.log(alumnosNoDuplicados);
}
let idA=setTimeout(alerta,10000);
let array= new Map;
for(let i=0; i<alumnosNoDuplicados.size;i++){
    array.set(alumnosNoDuplicados[i]);
    console.log(array);
}


//filter y map 