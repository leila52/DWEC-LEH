function crearElemento(tipo, contenido) {
    // Crear el elemento del tipo especificado
    let hijo = document.createElement(tipo)
    // Indicamos el contenido
    hijo.innerHTML = contenido
    return hijo
}
function enOrden(nuevoElemento,compra){
    let elementos=compra.getElementsByTagName("li");
    for(let i=0;i<elementos.length;i++){
        if(nuevoElemento.innerHTML.toLowerCase() < elementos[i].innerHTML.toLowerCase() ){
            compra.insertBefore(nuevoElemento,elementos[i]);
            return;
        }
        
    }
    //si no encontramos 
    compra.appendChild(nuevoElemento);
}
document.getElementById("insertar").addEventListener("click",function(){
    let input=document.getElementById("producto");
    let compra=document.getElementById("compra");
    //si no esta vacio
    if(input.value!==""){
        let elemento=crearElemento("li",input.value);
        enOrden(elemento,compra);
        input.value="";
    }

})