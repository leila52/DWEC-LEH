let images = {
    "1": {
        "title": "bible gritando",
        "description": "Es la mascota de barbie es unica.",
        "img": "https://i.pinimg.com/474x/fa/ad/cc/faadcc17799cf7caa76a3856ff1ed47a.jpg"
    },
    "2": {
        "title": "mono",
        "description": "Un mono bebiendo pepsi",
        "img": "https://i.pinimg.com/236x/37/4e/0e/374e0e8d770807e8759079a480f58ebc.jpg"
    },
    "3": {
        "title": "bob sponge",
        "description": "Bob esponja llorando xk no le va js al igual a mi",
        "img": "https://i.pinimg.com/236x/a3/c0/66/a3c06669055f92f81b954a6322fca49c.jpg"
    },
    "4": {
        "title": "mono durmiendo",
        "description": "Charyn Canyon, Kazakhstan.",
        "img": "https://i.pinimg.com/236x/dc/d4/c1/dcd4c124d9b8e0d73b78d504e7ec3006.jpg"
    },
    "5": {
        "title": "Jerry",
        "description": "simplemente jerry",
        "img": "https://i.pinimg.com/236x/26/15/cd/2615cdc57f6364755b2adc41053ddae2.jpg"
    },
    "6": {
        "title": "Vancouver Graffiti",
        "description": "Graffiti in Vancouver. Canada.",
        "img": "https://i.pinimg.com/474x/be/ea/8f/beea8f63afc50e582dc8586cedc1f854.jpg"
    },
    "7": {
        "title": "Kinkakuji",
        "description": "Kinkakuji, Kyoto. Japan.",
        "img": "https://i.pinimg.com/236x/3b/a9/84/3ba984e5f022165410f6c183d394d3e7.jpg"
    }
};
//para que muestre de primeras la imagen 6
document.body.onload(cambiarImagenes(6));

let imagenes=document.getElementById("main");

let fotos=document.querySelectorAll("thumbnails img");

fotos.forEach(e=>(e.addEventListener("onload",cambiarImagenes(e.img))));

/*
thumbnails.addEventListener("onload",cambiar);

function cambiar(e){
    let id_imagen=document.getElementById("img1")
    images.forEach(function(e){  
        if(e[0]===thumb1) {
            cambiarImagenes(e);
        }
    })
    
        
}
*/

imagenes.addEventListener("onload",cambiarImagenes);

function cambiarImagenes(id) {
    document.getElementById("image").src = images[id].img;
    document.getElementById("image-title").innerHTML = images[id].title;
    document.getElementById("description").innerHTML = images[id].description;
    document.getElementById("source").href = "http://www.flickr.com/photos/teosaurio/" + id;
}
