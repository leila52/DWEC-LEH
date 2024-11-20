
function crearelemento(tipo,contenido,padre){
    let hijo=document.createElement(tipo);
    hijo.innerHTML=contenido;
    padre.appendChild(hijo);
    hijo.addEventListener("click",function(){
        this.remove();
        precioTotal(lista);
        productos.remove(contenido);
    });
    return hijo;
}

let lista=document.getElementById("lista");
let enviar=document.getElementById("comprar");
let articulo=document.getElementById("articulo");

enviar.addEventListener("click",añadircarrito);

function añadircarrito(){
    if(articulo.value!= "" && !productos.has(articulo.value)){
        let contenido=articulo.value;
        //array.push(articulo.value);
        let producto=crearelemento("li",contenido,lista);
        articulo.value="";
        enOrden(lista);
        precioTotal(lista);
    }
    
}

function enOrden(producto){
    let conjunto=lista.querySelectorAll("li");
    let valores=[];
    conjunto.forEach((li) => {
        valores.push(li.innerHTML);
    });
    valores.sort();
    lista.innerHTML="";
    valores.forEach((e)=> crearelemento("li",e,lista));

}
let productos=new Set();
let preciosArray=[];

function precioTotal(producto){
    let precio= producto.querySelector("p");
    if(precio)precio.remove();
    
    let total=0;
    let articulos=producto.querySelectorAll("li");
    
    articulos.forEach((li)=>{
        let partes=li.innerHTML.split(",");
        productos.add(partes[0]);
        let precio=parseFloat(partes[1]);
        if(!isNaN(precio)){
            total=suma(precio,total);
        }
    });
    crearelemento("p",`Precio total ${total} €`,producto);

}
function suma(precio,total){
    if(total===0){
        total=precio;
    }else{
        total=total+precio;
    }
    return total;
}
