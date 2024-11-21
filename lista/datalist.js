
//funcion para crear elementos
function crearElemento(tipo,contenido,padre){
    let hijo=document.createElement(tipo);
    hijo.innerHTML=contenido
    hijo.value=contenido;
    padre.appendChild(hijo);
    return hijo;
}


/*
no sabia como meterlo ya que json no tiene nombre lo intentando con array con data y nada

fetch("productos.json")
.then((response)=>{
    if(!response.ok){
        throw new Error(`error : ${response.status}`);
    }
    return response.json();
})

.then((data)=>{
    console.log(data);
    .forEach((e)=>{
        crearElemento("option",data["producto"],productoInput);
    })
})

.catch((error)=>{
    alert(error.message);
})



*/
let elementos= [
    {
        "producto": "Manzana",
        "descripcion": "Fruta fresca y crujiente",
        "precio": 0.50
    },
    {
        "producto": "Pan",
        "descripcion": "Pan integral horneado",
        "precio": 1.20
    },
    {
        "producto": "Leche",
        "descripcion": "Leche de vaca pasteurizada",
        "precio": 0.80
    },
    {
        "producto": "Arroz",
        "descripcion": "Arroz blanco de grano largo",
        "precio": 1.00
    },
    {
        "producto": "Azúcar",
        "descripcion": "Azúcar refinado blanco",
        "precio": 0.70
    },
    {
        "producto": "Aceite de oliva",
        "descripcion": "Aceite de oliva virgen extra",
        "precio": 4.50
    },
    {
        "producto": "Café",
        "descripcion": "Café molido natural",
        "precio": 3.20
    },
    {
        "producto": "Té verde",
        "descripcion": "Hojas de té verde orgánico",
        "precio": 2.50
    },
    {
        "producto": "Huevos",
        "descripcion": "Docena de huevos frescos",
        "precio": 2.10
    },
    {
        "producto": "Queso",
        "descripcion": "Queso manchego curado",
        "precio": 6.00
    },
    {
        "producto": "Yogur",
        "descripcion": "Pack de 4 yogures naturales",
        "precio": 2.40
    },
    {
        "producto": "Plátano",
        "descripcion": "Plátanos de Canarias",
        "precio": 1.30
    },
    {
        "producto": "Tomate",
        "descripcion": "Tomates maduros para ensalada",
        "precio": 2.00
    },
    {
        "producto": "Zanahoria",
        "descripcion": "Zanahorias frescas por kilo",
        "precio": 1.10
    },
    {
        "producto": "Pollo",
        "descripcion": "Pechuga de pollo fresca",
        "precio": 5.50
    }
  ]
  let productoInput=document.getElementById("productos");


function haceropcion(){
    elementos.forEach((e)=>{
        crearElemento("option",e["producto"],productoInput);
    })
}
 
haceropcion();

let listaCompra=document.getElementById("productoList");

let eleccionUsuario=document.getElementById("productoInput");


eleccionUsuario.addEventListener("keydown",function() {
    let lista=new Array;
    let noEstaEnElementos;
    let noestaEnLista;
    //no se porque no me lo borra :(
    eleccionUsuario.innerHTML=" ";
    elementos.forEach((e)=>{
        
    
    if(e["producto"]===eleccionUsuario.value  ){
        noEstaEnElementos=true;
        noestaEnLista=true;
        let precio=e["precio"];
        let producto=e["producto"];
        lista.push(producto);
        let a=crearElemento("li",`${producto} -€ ${precio}`,listaCompra);
        a.addEventListener("dblclick",function(){
            this.remove();
            Resumen();
            precioTotal();

        })
        Resumen(lista);
        precioTotal();
        
    }
    /*
    
    if(!elementos.includes(eleccionUsuario.value)){
        noEstaEnElementos=false;
    }
    if(lista.includes(eleccionUsuario.value)){
        noestaEnLista=false;
    }

    if(noestaEnLista===false){
        alert("ya la has añadido");
        eleccionUsuario.innerHTML="";
    }if(noEstaEnElementos===false){
        alert("no esta en elementos");
        eleccionUsuario.innerHTML="";
    }*/
    })
    
});

let idElementos=document.getElementById("idElementos")
let idImporte=document.getElementById("idImporte");

 function Resumen(){
    let lista=document.querySelectorAll("li");
    //para editar el resumen
    idElementos.innerHTML=` ${lista.length}`;
}

function precioTotal(){
    let lista=document.querySelectorAll("li");
    let total=0;
    lista.forEach((e)=>{
        let partes=e.innerHTML.split("-€");
        let precio=parseFloat(partes[1]);
        total=total+precio;

    })
    //para editar el de importe
    idImporte.innerHTML=` ${total}`;
}


    
   
   
