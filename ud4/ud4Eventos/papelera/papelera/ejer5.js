let papelera = document.getElementById("papelera");
let bola = document.getElementById("bola");

// Función que habilita el drop
function habilitar(ev) {
  ev.preventDefault();
}

// Función que se llama al iniciar el arrastre
function arrastrar(ev) {
  ev.dataTransfer.setData("Informacion", ev.target.id);
}

// Función que se llama cuando se suelta un elemento sobre la papelera
function soltar(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("Informacion");
  // Si el elemento soltado es la bola
  if (data === "bola") {
    papelera.src = "papeleraLLena.jpg";
    bola.style.display = "none";
  }
}

// Asignación de eventos a los elementos específicos
bola.addEventListener("dragstart", arrastrar);
papelera.addEventListener("dragover", habilitar);
papelera.addEventListener("drop", soltar);
papelera.addEventListener("dblclick", deshacer);

// Función para deshacer la acción de tirar la bola
function deshacer() {
  papelera.src = "papeleraVacia.jpg";
  bola.style.display = "block";
}
