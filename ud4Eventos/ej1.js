let cuerpoPagina = document.body;

//Primer manejador
//cuerpoPagina.addEventListener("click", acciones);
//Segundo manejador
//cuerpoPagina.onclick = acciones;
//IMPORTANTE SOLO VAMOS A USAR EL addEventListener
function cambiaColor() {
  let rojo = Math.floor(Math.random() * 256);
  let verde = Math.floor(Math.random() * 256);
  let azul = Math.floor(Math.random() * 256);
  cuerpoPagina.setAttribute(
    "style",
    `background-color: rgb(${rojo}, ${verde}, ${azul})`
  );
}
//para poder resetearlo si pulsas en el body 
function resetearColor() {
  cuerpoPagina.setAttribute("style", `background-color: white)`);
}

function acciones(evento) {
  // target.id palabra reservada que devuelve el boton
  console.log(evento.target.id);
  if (evento.target.id === "idcuerpo") {
    resetearColor();
  } else {
    cambiaColor();
  }
}
