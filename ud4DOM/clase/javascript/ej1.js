const parrafo1={
    titulo: "primer bloque de parafos",
    hijos:[ "este es el primer parrafo","este el segundo parafo","este el tercero"]
}
const parrafo2={
    titulo: "segundo bloque de parafos",
    hijos:[ "este es el primer parrafo","este el segundo parafo","este el tercero"]
}



let h1=document.createElement("h1");
h1.innerHTML=parrafo1.titulo;
document.body.appendChild(h1);
for(let i=0;i<3;i++){
    let p=document.createElement("p");
    p.innerHTML=parrafo1.hijos[i];
    document.body.appendChild(p);
}


let h2=document.createElement("h1");
h2.innerHTML=parrafo2.titulo;
document.body.appendChild(h2);
for(let i=0;i<3;i++){
    let pe=document.createElement("p");
    pe.innerHTML=parrafo2.hijos[i];
    document.body.appendChild(pe);
}

