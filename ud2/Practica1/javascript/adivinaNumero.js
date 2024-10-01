function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

let numAlazar = getRandomInt(10)
let numArray = []
let valor =0;

do {

    valor = parseInt(prompt("introduce el numero"))

    if (valor < numAlazar) {
        alert(`El numero ${valor} es mayor`);
        numArray.push(valor);
    }
    if (valor > numAlazar) {
        alert(`El numero ${valor} es menor`);
        numArray.push(valor);
    }
    if(valor === numAlazar){
        console.log(`Has acertado con el numero ${valor}`);
        console.log(`---Intentos----`);
        console.log(`${numArray.length} intentos `);
        console.log(` numeros : ${numArray}`)
    }

} while (valor !== numAlazar && !isNaN(valor));

    


