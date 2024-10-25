function crearElemento(tipo, contenido,padre) {
    // Crear el elemento del tipo especificado
    let hijo = document.createElement(tipo)
    // Indicamos el contenido
    hijo.innerHTML = contenido
     //añadir el nodo al documento
     padre.appendChild(hijo)
     hijo.addEventListener("click", function () {
        this.remove()
    })
     return hijo
}

function enOrden(compra){
    let conjunto=compra.querySelectorAll("li");
    let valorArray=[];
    conjunto.forEach((li) => valorArray.push(li.innerHTML));
    valorArray.sort();
    compra.innerHTML="";
    valorArray.forEach((e) => crearElemento("li",e,compra));
}
//comprobar pcuando no introduce nada que no muestra Nan Y SI TIENE TAMAÑO 2
function precioTotal(compra){
    let total=0;
    let conjunto=compra.querySelectorAll("li");
    let precioArray=[];
    conjunto.forEach((li) =>{
        let partes=li.innerHTML.split(",");
        let precio=parseFloat(partes[1]);
        total=suma(precio,total);
    });
    crearElemento("p",`Precio total: ${total}`,compra)
}

function suma(precio,total){
    if(total===0){
        total=precio;
    }else{
        total=total+precio;
    }
    return total;
}

document.getElementById("insertar").addEventListener("click",function(){
    let input=document.getElementById("producto");
    let compra=document.getElementById("compra");
    //si no esta vacio
    if(input.value!==""){
        let elemento=crearElemento("li",input.value,compra);
        input.value="";
        enOrden(compra);
        precioTotal(compra);
        
    }
    
})
//introduzca el precio y en otro campo muestre el precio total