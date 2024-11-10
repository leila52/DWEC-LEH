let papelera = document.getElementById("div1")
let bola= document.getElementById("bola")


function habilitar(ev) {//permitir eventos
    ev.preventDefault();
  }
  
  function arrastrar(ev) {
    ev.dataTransfer.setData("información", ev.target.id);
  }
  
  function soltar(ev) {
    ev.preventDefault();
    
    var data = ev.dataTransfer.getData("información");
    ev.target.appendChild(document.getElementById(data));
    if (data == bola){//si el elemento es la bola
        ev.target.appendChild(bolaElement);
        papelera.src="papeleraLLena.jpg"
        bola.setAttribute("style", "display:none")
    }
}


papelera.addEventListener("dblclick", quitar)

function quitar(){//volver a su estado anterior
    papelera.src= "papeleraVacia.jpg"
    bola.setAttribute("style", "display:block")
}
papelera.ondragover = habilitar;
papelera.ondrop = soltar;