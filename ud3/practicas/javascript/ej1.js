let alerta =function(){
     let ventana =window.open("www.google.es");
     ventana.document.write("hola te estoy observando")
}

let idA=setTimeout(alerta,7000);