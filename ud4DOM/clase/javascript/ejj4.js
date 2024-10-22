let deporte=document.getElementById('deporte');
let serie=document.getElementById('serie');
let pelicula=document.getElementById('pelicula');
let divInfo=document.getElementById('divInformacion');

let generar=document.getElementById('generar');

//labels
let labelDeporte=document.querySelector('label[for="deporte"]');
let labelSerie=document.querySelector('label[for="serie"]');
let labelPelicula=document.querySelector('label[for="pelicula"]');

generar.addEventListener('click',function(){

    //cambiamos color añadiendo class
    labelSerie.classList.add('color');
    labelPelicula.classList.add('color');

    //para comprobar si esta vacio y salga en rojo
    if(deporte.value===""){
        labelDeporte.style.color = 'red';
    }else{
        labelDeporte.classList.add('color');
        let infoDeporte=document.createElement("p");
        infoDeporte.innerHTML=` ${deporte.value}`;
        infoDeporte.classList.add('resultado');
        labelDeporte.appendChild(infoDeporte)
        
    }
    //borrar input
    deporte.remove();


    let infoSerie=document.createElement("p");
    infoSerie.innerHTML=` ${serie.value}`;
    infoSerie.classList.add('resultado');
    labelSerie.appendChild(infoSerie);
    serie.remove();

    let infoPeli=document.createElement("p");
    infoPeli.innerHTML=`${pelicula.value}`;
    infoPeli.classList.add('resultado');
    divInfo.appendChild(infoPeli);
    pelicula.remove();
    
})