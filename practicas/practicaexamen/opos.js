autores=[
    {"Autor": "Carmen Laforet", "Titulo": "Nada", "Fecha": "1945"},
    {"Autor": "Juan Rulfo", "Titulo": "Pedro Páramo", "Fecha": "2014"},
    {"Autor": "Juan Rulfo", "Titulo": "El Llano en Llamas", "Fecha": "2013"},
    {"Autor": "Rosa Montero", "Titulo": "Cuentos verdaderos", "Fecha": "2024"},
    {"Autor": "Pablo Neruda", "Titulo": "Veinte poemas de amor y una canción desesperada", "Fecha": "2013"},
    {"Autor": "Almudena Grandes", "Titulo": "La madre de Frankenstein", "Fecha": "2020"},
    {"Autor": "Miguel de Cervantes Saavedra", "Titulo": "Don Quijote de la Mancha", "Fecha": "1605"},
    {"Autor": "Jorge Luis Borges", "Titulo": "Ficciones", "Fecha": "2014"},
    {"Autor": "Rosa Chacel", "Titulo": "Memorias de Leticia Valle", "Fecha": "1945"},
    {"Autor": "Pablo Neruda", "Titulo": "Antología poética", "Fecha": "2014"},
    {"Autor": "Rosa Chacel", "Titulo": "Saturnal", "Fecha": "1972"},
    {"Autor": "Carmen Laforet", "Titulo": "La Isla de los Demonios", "Fecha": "1952"},
    {"Autor": "Jorge Luis Borges", "Titulo": "El sur", "Fecha": "1953"},
    {"Autor": "Pablo Neruda", "Titulo": "Confieso que he vivido", "Fecha": "2010"}
];

let selectorAutores=document.getElementById("idautores")
let tabla=document.getElementById("campoAutores");


function crearElemento(tipo,contenido,padre){
    let hijo=document.createElement(tipo);
    hijo.innerHTML=contenido;
    padre.appendChild(hijo);
    hijo.addEventListener("click",function(){
        this.remove();
    });
    return hijo;
}

let setArray=new Set();
autores.forEach(element=> 
    setArray.add(element.Autor)
);
haceropciones();

function haceropciones(){
    setArray.forEach(function(e){
        crearElemento("option",e,selectorAutores);
    })
    
}
selectorAutores.addEventListener("change",hacertabla)
function hacertabla(){
    tabla.innerHTML="";
    let autor=selectorAutores.value;
    autores.forEach(function(e){
        if(e.Autor=== autor){
           let principio=crearElemento("tr","",tabla);
           crearElemento("th",e.Titulo,principio);
           crearElemento("th",e.Fecha,principio);
        }
    })
}


