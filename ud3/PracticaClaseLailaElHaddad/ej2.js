const alumnos = [ "Juan", "María", "Pedro", "Ana", "Sofía", "Luis", "Miguel", "Fernando", "Valeria" ];

let alumnosNoDuplicados = new Set();
let nameCount=new Map();

let num=function(){
    let aleatorio=Math.floor(Math.random() *9) ;
    //comprobar
    alumnosNoDuplicados.add(alumnos[aleatorio]); 
}
let idB=setInterval(num,2000);



let alerta =function(){
    clearInterval(idB);
    if(nameCount.has(nombre)){
        nameCount.set()
    }
    //muestra los nombres que se han añadido al set a los 10 seg
    console.log(alumnosNoDuplicados);
}

let idA=setTimeout(alerta,10000);





//filter y map 
//para meter el set en un array normal

const nameArray=[... alumnosNoDuplicados];
Array.from(alumnosNoDuplicados);