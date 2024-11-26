let cuerpo = document.getElementById("idCuerpo");
let campoX = document.getElementById("idX");
let campoY = document.getElementById("idY");

//declaramos el evento desde el codigo con addEventListener(evento,funcion)
//Se produce cuando el puntero del ratón se encuentra dentro de un elemento. Es
//importante señalar que este evento se producirá continuamente una vez tras otra mientras el puntero
//del ratón permanezca dentro del elemento. El manejador de este evento es onmousemove

cuerpo.addEventListener("mousemove", obtenerCoordenadas);

function obtenerCoordenadas(e) {
  //console.log(evento.clientX + " " + evento.clientY);
  campoX.firstElementChild.innerHTML = e.clientX;
  campoY.firstElementChild.innerHTML = e.clientY;
}
