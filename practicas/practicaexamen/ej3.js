let crear=document.getElementById("crear");
let numeros=document.getElementById("numero");
let campo=document.getElementById("campo");

function crearElemento(tipo, contenido, padre){
    let hijo = document.createElement(tipo);
    hijo.innerHTML=contenido;
    padre.appendChild(hijo);
     return hijo;
    }

crear.addEventListener("click",function(){
    campo.innerHTML="";
    for(let i=0;i<numeros.value;i++){
        let aleatorio= Math.floor(Math.random()*100);
        let contenido= `checkbox ${aleatorio}`;
        
        let titulo= crearElemento("label",contenido,campo);
        let ellemento= crearElemento("input",contenido,campo);

        ellemento.setAttribute("type","checkbox");
        ellemento.setAttribute("id",`${contenido}`);
        titulo.setAttribute("for",`${contenido}`);

        ellemento.addEventListener("dblclick",function(){
            ellemento.remove();
            titulo.remove();
        })
        titulo.addEventListener("dblclick",function(){
            ellemento.remove();
            titulo.remove();
        })
    }
});