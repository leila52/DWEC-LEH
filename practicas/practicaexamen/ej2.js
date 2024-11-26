let campo=document.getElementById("elemento");
let boton = document.getElementById("crear");


function crearElemento(tipo,contenido,padre){
    let hijo= document.createElement(tipo);
    hijo.innerHTML=contenido;
    padre.appendChild(hijo);

    hijo.addEventListener("click",function(){
        this.remove();
    });
    return hijo;
}



boton.addEventListener("click",crearlistaAleatoria);
function crearlistaAleatoria(){
    let aleatorio=Math.floor(Math.random()*255);
    let contenido=` nuevo elemento ${aleatorio}`
    crearElemento("li",contenido,campo);
}