
insertar.addEventListener("click",function(){
    let aleatorio=Math.floor(Math.random() *256) ;

    crearElemento("li",aleatorio,document.body);
    
    lista.addEventListener("click",function(){
        this.remove();
    })
})


function crearElemento(tipo,contenido,padre){
    let hijo=document.createElement(tipo);
    hijo.innerHTML=contenido
    padre.insertBefore(hijo,insertar);
    hijo.addEventListener("click",function(){
        this.remove();
    })
    }
