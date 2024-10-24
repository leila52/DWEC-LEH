const CAMPOS = ["Deportes", "Series", "Peliculas"];
//elemento que seria parrafo
let elemento=null;


document.getElementById("generar").addEventListener("click", () => {
    quitarEstilos();
    for (const i in CAMPOS) {
        //coge el input
        let input=document.getElementById(`d${CAMPOS[i]}Favorito`);
        elemento.parentElement.previousElementSibling.classList.add("rojo")
        if(input.value !==""){
            elemento=crearElemento("p",input.value,document.getElementById(`id${CAMPOS[i]}`));
            input.value="";
            //para que el raton se quede ahi
            input.focus();
            elemento.classList.add("resultado");
            elemento.parentElement.previousElementSibling.classList.add("color")
        }

    }
})


function crearElemento(tipo, contenido, padre) {
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

function quitarEstilos(){
    let parrafos = document.querySelectorAll("p")
    
    parrafos.forEach(function(e){    

        e.classList.remove("color")
        e.classList.remove("resultado")
    })
}