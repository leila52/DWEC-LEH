const autores = [
    new Set([{ autor: "Juan Rulfo", titulo: "Pedro Páramo", año: "2014" }]),
    new Set([{ autor: "Juan Rulfo", titulo: "El Llano en Llamas", año: "2013" }]),
    new Set([{ autor: "Rosa Montero", titulo: "Cuentos verdaderos", año: "2024" }]),
    new Set([{ autor: "Pablo Neruda", titulo: "Veinte poemas de amor y una canción desesperada", año: "2013" }]),
    new Set([{ autor: "Almudena Grandes", titulo: "La madre de Frankenstein", año: "2020" }]),
    new Set([{ autor: "Miguel de Cervantes Saavedra", titulo: "Don Quijote de la Mancha", año: "1605" }]),
    new Set([{ autor: "Jorge Luis Borges", titulo: "Ficciones", año: "2014" }]),
    new Set([{ autor: "Rosa Chacel", titulo: "Memorias de Leticia Valle", año: "1945" }]),
    new Set([{ autor: "Pablo Neruda", titulo: "Antología poética", año: "2014" }]),
    new Set([{ autor: "Rosa Chacel", titulo: "Saturnal", año: "1972" }]),
    new Set([{ autor: "Carmen Laforet", titulo: "La Isla de los Demonios", año: "1952" }]),
    new Set([{ autor: "Jorge Luis Borges", titulo: "El sur", año: "1953" }]),
    new Set([{ autor: "Pablo Neruda", titulo: "Confieso que he vivido", año: "2010" }])
];

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

//array con nombres no repetidos
let setArray=new Set();
autores.forEach((e)=>{
    e.forEach((autor)=>{
        setArray.add(autor.autor);
    });
} );
haceroption();

function haceroption(){
    setArray.forEach(function(e){ 
        crearElemento("option",e,inputAutores);
    })

}


inputAutores.addEventListener("change", autore2s);
//introducir titulos y fecha en la tabla de cada autor
function autore2s(e){

    
    cuerpoAutoress.innerHTML="";
    //console.log("funciona");
    //console.log(inputAutores.value);
    autores.forEach(function(e){  
        e.forEach((autor)=>{
            if(inputAutores.value===autor.autor) {
                let creado = crearElemento("tr",``,cuerpoAutoress)
                crearElemento("td",`${autor.titulo}`,creado);
                crearElemento("td",`${autor.año}`,creado);
            }
            
        });
        
        
        
    })
    
}
