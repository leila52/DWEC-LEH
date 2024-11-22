let datalist = document.getElementById("productos")
let productoInput = document.getElementById("productoInput")
let lista = document.getElementById("productoList")
let total = document.getElementById("idImporte")
let numElementos = document.getElementById("idElementos")
let label = document.getElementsByTagName("label")[0]
label.setAttribute("for", "productoInput")
let mapProductos = new Map()
let arrayProductosSelect = []
let preciosSeleccionados = []


fetch("productos.json")
    .then((respuesta) => {
        if(!respuesta.ok){
            throw new Error("error: " + respuesta.status)
        }
        return respuesta.json()
    })
    .then((productos) => {
        productos.forEach(element => {
            let alimento = crearElemento(datalist, "option", "")
            alimento.setAttribute("value", element.producto)
            mapProductos.set(element.producto.toLowerCase(), element.precio)
        });


        document.body.addEventListener("keydown", (event) => {
            if(event.key === "Enter"){
                let productoIntroducido = productoInput.value.toLowerCase()
                if(mapProductos.has(productoIntroducido) && !arrayProductosSelect.includes(productoIntroducido)){
                    arrayProductosSelect.push(productoIntroducido)
                    preciosSeleccionados.push(mapProductos.get(productoIntroducido))

                    introducirEnLaLista(productoIntroducido)

                    setCosteTotal()
                    
                    numElementos.innerHTML = arrayProductosSelect.length
                    
                }else if(!mapProductos.has(productoIntroducido)){
                    alert(`Error: ${productoInput.value} no aparece en la lista.`)
                }else{
                    alert(`Error: ${productoInput.value} ya se ha introducido.`)
                }
            }
        })

    })
    .catch((error) => {
        crearElemento(document.body, "p", "Error: " + error.message)
    })





    function crearElemento(padre, tipo, contenido){
        let elemento = document.createElement(tipo)
        elemento.innerHTML = contenido
        padre.appendChild(elemento)
        return elemento
    }

    function introducirEnLaLista(productoIntroducido){
         let itemsLista = lista.children

        for(let i = 0; i < itemsLista.length; i++){
            itemsLista[i].classList = "producto-nomal"
        }

        let prodPrimeraLetraMayus = productoIntroducido.charAt(0).toUpperCase() +  productoIntroducido.substring(1, productoIntroducido.length)
        let elementoAñadir = `${prodPrimeraLetraMayus} - ${mapProductos.get(productoIntroducido)}€`
        let itemLista = crearElemento(lista, "li", elementoAñadir)
        itemLista.classList ="nuevo-producto-rojo"
        itemLista.style.textAlign = "center"

        itemLista.addEventListener("dblclick", () => {
            itemLista.remove()
            let pos = preciosSeleccionados.indexOf(mapProductos.get(productoIntroducido))
            preciosSeleccionados.splice(pos, 1)
            setCosteTotal()
            arrayProductosSelect = arrayProductosSelect.filter((elemento) => elemento !== productoIntroducido)
            numElementos.innerHTML = arrayProductosSelect.length
        })
    }

    function setCosteTotal(){
        let costeTotal = 0
        preciosSeleccionados.forEach(elemento => {
            costeTotal += parseFloat(elemento)
        })

        total.innerHTML = costeTotal + "€"
    }