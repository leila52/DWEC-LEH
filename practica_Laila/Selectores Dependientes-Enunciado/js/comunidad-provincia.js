let provincias = new Map([
    ["Andalucia",["Cádiz","Córdoba","Granada","Sevilla","Huelva","Jaen","Málaga"]],    
    ["Madrid",["Madrid Capital","Vallecas"]],
    ["Galicia",["Lugo","Orense","Pontevedra"]]
]);

//los id del formulario
let selectAutonomia = document.getElementById("id_autonomia");
let selectProvincias = document.getElementById("id_provincia");
let enviar =document.getElementById("id_submit");

//funcion para crear elementos
function crearElemento(tipo, contenido, padre) {
    // Crear el elemento del tipo especificado
    let hijo = document.createElement(tipo)
    // Indicamos el contenido
    hijo.innerHTML = contenido
    //añadir el nodo al documento
    padre.appendChild(hijo)
    

    return hijo
    
}

//mostrar mensaje
crearElemento("option","selecciona una comunidad",selectProvincias);


//hacemos el set ya que no se pueden repetir la comunidad autonoma
let setArray=new Set();
provincias.forEach((provincia,comunidad) => setArray.add(comunidad));
haceroption();

//hacemos option de las comunidades autonomas
function haceroption(){
    setArray.forEach(function(e){ 
        crearElemento("option",e,selectAutonomia);

    })
    
}
//añadimos el disabled
selectProvincias.setAttribute("disabled","");


//para comprobar si ha pulsado una comunidad autonoma y asi cargar el select  de provincias
selectAutonomia.addEventListener("click", provincias1);


//para crear el option de provincias habra que comprobar cual es el que eligio el usuarii
function provincias1(e){
    //quitamos el disaled
    selectProvincias.removeAttribute("disabled");
    selectProvincias.innerHTML="";
    provincias.forEach(function(provincia,comunidad){  
        if(selectAutonomia.value===comunidad) {
            provincia.forEach((e) => {
                crearElemento("option",e, selectProvincias);
            });
        }
    })
}

//intento de validar
enviar.addEventListener("click", validacion);

function validacion(){
    provincias.forEach(function(provincia,comunidad){  
    if((selectAutonomia.value=== comunidad) && (selectProvincias.value=== provincia) ){
        console.log("correcto");
    }

    })  
}
