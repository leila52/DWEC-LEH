let deporte=document.getElementById('deporte');
let serie=document.getElementById('serie');
let pelicula=document.getElementById('pelicula');
let divInfo=document.getElementById('divInformacion');

let generar=document.getElementById('generar');
let campo=document.getElementById('divCheckbox');


generar.addEventListener('click',function(){
    divInfo.innerHTML=""
    let infoDeporte=document.createElement("p");
    infoDeporte.innerHTML=`el deporte favorito es: ${deporte.value}`;
    let infoSerie=document.createElement("p");
    infoSerie.innerHTML=`el serie favorito es: ${serie.value}`;
    let infoPeli=document.createElement("p");
    infoPeli.innerHTML=`el pelicula favorito es: ${pelicula.value}`;
    divInfo.appendChild(infoDeporte);
    divInfo.appendChild(infoSerie);
    divInfo.appendChild(infoPeli);
    
})