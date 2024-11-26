const parrafo1={
    titulo: "primer bloque de parafos",
    hijos:[ "este es el primer parrafo ","este el segundo parafo ","este el tercero"]
}
const parrafo2={
    titulo: "segundo bloque de parafos",
    hijos:[ "este es el primer parrafo ","este el segundo parafo ","este el tercero"]
}




crearElemento("h1",parrafo1.titulo,document.body)

for(let i=0;i<3;i++){
    crearElemento("p",parrafo1.hijos[i],document.body)
}


/*
let h2=document.createElement("h1");
h2.innerHTML=parrafo2.titulo;
document.body.appendChild(h2);
*/

crearElemento("h1",parrafo2.titulo,document.body)

for(let i=0;i<3;i++){
    crearElemento("p",parrafo2.hijos[i],document.body)
}


function crearElemento(tipo,contenido,padre){
    let hijo=document.createElement(tipo);
    hijo.innerHTML=contenido
    padre.appendChild(hijo);
    /*
    hijo.addEventListener("click",function(){
        console.log(this.innerHTML);
    })
       */ 
    hijo.addEventListener("click",function(){
        this.remove();
    })
    }
