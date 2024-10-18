
insertar.addEventListener("click",function(){
    let aleatorio=Math.floor(Math.random() *256) ;
    let lista=document.createElement("li");
    lista.innerHTML=`nuevo elemento  ${aleatorio}`;
    document.body.insertBefore(lista,insertar);

    lista.addEventListener("click",function(){
        this.remove();
    })
})

