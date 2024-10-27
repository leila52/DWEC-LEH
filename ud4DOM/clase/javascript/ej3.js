let input=document.getElementById('numeroCheckbox');
let generar=document.getElementById('generar');
let campo=document.getElementById('divCheckbox');


generar.addEventListener('click',function(){
    
    //Limpiamos
    campo.innerHTML=""

    //Insertamos nuevos
    for(let i=0;i<input.value;i++){
        let aleatorio=Math.floor(Math.random() *256) ;
        let letra = crearElemento("label", `nuevo elemento ${aleatorio}<br>`, campo);
        let cajita = crearElemento("input", "", campo);
        
        cajita.setAttribute('type','checkbox');
        letra.setAttribute('for',`a${aleatorio}`);
        cajita.setAttribute('id',`a${aleatorio}`);
        
        
        campo.appendChild(cajita);
        campo.appendChild(letra);
        //para borrar con doble clik
        cajita.addEventListener("dblclick",function(){
            cajita.remove();
            letra.remove();
            
        })
        letra.addEventListener("dblclick",function(){
            cajita.remove();
            letra.remove();
            
        })

    }
    
});
function crearElemento(tipo, contenido, padre) {
    let hijo = document.createElement(tipo);
    hijo.innerHTML = contenido;
    padre.appendChild(hijo); 
    return hijo;
}
