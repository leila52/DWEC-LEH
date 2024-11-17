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

    //añade valor
    hijo.value=contenido;
    
    //añadir el nodo al documento
    padre.appendChild(hijo);
    
    return hijo;
    
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

function validacion(event){
    //no permite enviar
    event.preventDefault();
    let comunidadcorrecta=false;
    let provinciacorrecta=false;

    provincias.forEach(function(provincia,comunidad){  
    if(selectAutonomia.value=== comunidad){
        comunidadcorrecta=true;
        if(provincia.includes(selectProvincias.value)){
            provinciacorrecta=true;
        }
    }
    });  

    //poner esto siempre siempre
    if(event.target.id==="id_submit"){
        if (!comunidadcorrecta) {
            Swal.fire({
                text: "introduca la comunidad",
                title: "introduca la comunidad",
                width: 600,
                padding: "3em",
                color: "#718add",
                background: "#fff url(/images/trees.png)",
                backdrop: `
                    rgba(0,0,123,0.4)
                    url("/images/nyan-cat.gif")
                    left top
                    no-repeat
                `
                });
        } else if (!provinciacorrecta) {
            Swal.fire({
                text: "introduca la provincia",
                title: "introduca la provincia",
                width: 600,
                padding: "3em",
                color: "#718add",
                background: "#fff url(/images/trees.png)",
                backdrop: `
                    rgba(0,0,123,0.4)
                    url("/images/nyan-cat.gif")
                    left top
                    no-repeat
                `
                });
        } else {
            Swal.fire({
                text: "correcto",
                title: "correcto.",
                width: 600,
                padding: "3em",
                color: "blue",
                background: "#fff url(/images/trees.png)",
                backdrop: `
                    rgba(0,0,123,0.4)
                    url("/images/nyan-cat.gif")
                    left top
                    no-repeat
                `
                });
            document.getElementById("id_form").submit();
        }
    }
}
