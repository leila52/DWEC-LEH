const autores = [
    new Set([ "Juan Rulfo",  "Pedro Páramo",  "2014" ]),
    new Set([ "Juan Rulfo",  "El Llano en Llamas",  "2013" ]),
    new Set([ "Rosa Montero",  "Cuentos verdaderos",  "2024" ]),
    new Set([ "Pablo Neruda",  "Veinte poemas de amor y una canción desesperada",  "2013" ]),
    new Set([ "Almudena Grandes",  "La madre de Frankenstein",  "2020" ]),
    new Set([ "Miguel de Cervantes Saavedra",  "Don Quijote de la Mancha",  "1605" ]),
    new Set([ "Jorge Luis Borges",  "Ficciones",  "2014" ]),
    new Set([ "Rosa Chacel",  "Memorias de Leticia Valle",  "1945" ]),
    new Set([ "Pablo Neruda",  "Antología poética",  "2014" ]),
    new Set([ "Rosa Chacel",  "Saturnal",  "1972" ]),
    new Set([ "Carmen Laforet",  "La Isla de los Demonios",  "1952" ]),
    new Set([ "Jorge Luis Borges",  "El sur",  "1953" ]),
    new Set([ "Pablo Neruda",  "Confieso que he vivido",  "2010" ])
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
    let indice=0;
    e.forEach(elemento=>{
        if(indice==0){
            setArray.add(elemento);
        }indice++
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
        let indice=0;
        let encontrado=false;
        let creado ;
        e.forEach(elemento=>{
            if(indice==0 && elemento === inputAutores.value  ){
                encontrado=true;
               creado= crearElemento("tr",``,cuerpoAutoress);
            }
            if(encontrado === true && indice!==0){
                crearElemento("td",`${elemento}`,creado);
            }
            indice++
        });
    })          
}
