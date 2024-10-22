let deporte=document.getElementById('deporte');
let serie=document.getElementById('serie');
let pelicula=document.getElementById('pelicula');
let divInfo=document.getElementById('divInformacion');

let generar=document.getElementById('generar');
let campo=document.getElementById('divCheckbox');



generar.addEventListener('click',function(){
    let infoDeporte=document.createElement("p");
    infoDeporte.innerHTML=`el deporte favorito es: ${deporte.value}`;
    divInfo.appendChild(infoDeporte);
    infoDeporte.setAttribute('class','pet');
})