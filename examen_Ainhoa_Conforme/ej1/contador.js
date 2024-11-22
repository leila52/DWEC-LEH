let num = parseInt(prompt("Introduce el valor inicial de la cuenta regresiva(un número entero positivo):"))

console.log("Cuenta regresiva comenzando desde: "+ num)

let id = setInterval(() => {
    console.log(num--)
    if(num === -1){
        clearInterval(id)
        setTimeout(() => {
            console.log("Cuenta terminada")
            alert("Hasta otro día :(")
        }, 2000)
    }
}, 1000)

