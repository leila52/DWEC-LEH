

let cuerpoAutores = document.getElementById("idAutores");
let cuerpoAutoress = document.getElementById("campoAutores");
let inputAutores = document.getElementById("idautores");

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



fetch("autores.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error, status = ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {

            //array con nombres no repetidos
            let setArray=new Set();
            data.autores.forEach((e) => setArray.add(e.Autor));
            haceroption();

            function haceroption(){
                setArray.forEach(function(e){ 
                    crearElemento("option",e,inputAutores);
                })
            
            }
            inputAutores.addEventListener("click", autore2s);
            //introducir titulos y fecha en la tabla de cada autor
            function autore2s(e){
                cuerpoAutoress.innerHTML="";
                //console.log("funciona");
                //console.log(inputAutores.value);
                data.autores.forEach(function(e){  
                    
                    if(inputAutores.value===e.Autor) {
                        let creado = crearElemento("tr",``,cuerpoAutoress)
                        crearElemento("td",`${e.Titulo}`,creado)
                        crearElemento("td",`${e.Fecha}`,creado)
                    }
                    
                })
                
            }
        })
        .catch((error) => {
            alert(error.message);
          });
