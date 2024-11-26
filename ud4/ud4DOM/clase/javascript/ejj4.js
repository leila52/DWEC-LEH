let deporte=document.getElementById('deporte');
let serie=document.getElementById('serie');
let pelicula=document.getElementById('pelicula');
let generar=document.getElementById('generar');

//labels
let labelDeporte=document.getElementById('labelDeporte');
let labelSerie=document.getElementById('labelSerie');
let labelPelicula=document.getElementById('labelPeli');

generar.addEventListener('click',function(){
    if(deporte.value===""){
        labelDeporte.classList.add('rojo');
    }else{
        let infoDeporte=document.createElement("p");
        infoDeporte.innerHTML=`${deporte.value}`;
        labelDeporte.classList.add('color');
        infoDeporte.classList.add('resultado');
        labelDeporte.appendChild(infoDeporte);
    }
    
    if(serie.value===""){
        labelSerie.classList.add('rojo');
    }else{
        let infoSerie=document.createElement("p");
        infoSerie.innerHTML=`${serie.value}`;
        labelSerie.classList.add('color');
        infoSerie.classList.add('resultado');
        labelSerie.appendChild(infoSerie);
    }

    if(pelicula.value===""){
        labelPelicula.classList.add('rojo');
    }else{
        let infoPeli=document.createElement("p");
        infoPeli.innerHTML=`${pelicula.value}`;
        labelPelicula.classList.add('color');
        infoPeli.classList.add('resultado');
        labelPelicula.appendChild(infoPeli);

    }
    //vaciar input
    deporte.value="";
    serie.value="";
    pelicula.value="";
    // focous es para q el teclado o raton este en el ultimo
})