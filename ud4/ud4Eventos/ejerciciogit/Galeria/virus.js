var images = {
  imagen1: {
    title: "Lakes close to Ljubljana",
    description: "Incredible water in Ljubljana, Slovenia.",
    img: "http://farm3.staticflickr.com/2807/8755627802_727863f09e_b.jpg",
  },
  imagen2: {
    title: "Balloons in Cappadocia",
    description: "Balloon flight in Cappadocia, Turkey.",
    img: "http://farm6.staticflickr.com/5458/8899898917_fee4ba1613_b.jpg",
  },
  imagen3: {
    title: "Lucía in the Steppe",
    description:
      "My motorcycle in the side of the road at some point between the Russian border and Atyrau, Kazakhstan.",
    img: "http://farm6.staticflickr.com/5459/9045535798_f3d21b27a1_b.jpg",
  },
  imagen4: {
    title: "Charyn Canyon",
    description: "Charyn Canyon, Kazakhstan.",
    img: "http://farm3.staticflickr.com/2847/9281765203_d6af908f9f_b.jpg",
  },
  imagen5: {
    title: "Uran Togoo",
    description: "Road to Uran Togoo, Mongolia.",
    img: "http://farm8.staticflickr.com/7301/9476752141_969cc26a71_b.jpg",
  },
  imagen6: {
    title: "Vancouver Graffiti",
    description: "Graffiti in Vancouver. Canada.",
    img: "http://farm8.staticflickr.com/7379/10139131563_3ddd73c6d4_b.jpg",
  },
  imagen7: {
    title: "Kinkakuji",
    description: "Kinkakuji, Kyoto. Japan.",
    img: "http://farm8.staticflickr.com/7365/10138806215_e25e389de3_b.jpg",
  },
};
//cargar foto en el cuerpo
document.body.addEventListener("load", loadImage("imagen2"));

//para no repetirlo por cada id de la foto añadido
for (let i = 1; i <= 5; i++) {
  let img = document.getElementById(`foto${i}`);
  //no confundir con load, es al pulsar, llamar a la función
  img.addEventListener("click", function () {
    loadImage(`imagen${i}`);
  });
}
function loadImage(identificador) {
  document.getElementById("image").src = images[identificador].img;
  document.getElementById("image-title").innerHTML =
    images[identificador].title;
  document.getElementById("description").innerHTML =
    images[identificador].description;
}
