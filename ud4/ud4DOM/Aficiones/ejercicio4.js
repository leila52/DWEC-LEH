let elemento = null
const CAMPOS = ["Deportes", "Series", "Peliculas"]

document.getElementById("aceptar").addEventListener("click", () => {

    quitarEstilos();

    for (const i in CAMPOS) {

        let input = document.getElementById(`id${CAMPOS[i]}Favorito`)
        if (input.value !== "") {
            elemento = crearElemento("p", input.value, document.getElementById(`id${CAMPOS[i]}`))
            input.value = ""
            input.focus()
            elemento.classList.add("azul")
            elemento.parentElement.previousElementSibling.classList.add("verde")
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
        e.classList.remove("verde")
        e.classList.remove("azul")
    })
}