let contador = 0
while (contador <3){
    let salario =prompt("indica el salario")
    let años = prompt("indica los años")
    let salida=0
    if(salario < 500 && años >=10){
        salida=salario*3
        console.log(`con este sueldo ${salario} y con estos ${años} tiene este salario: ${salida}`)
        contador++
    }
    if(salario < 500 && años <10){
        salida=salario*2
        console.log(`con este sueldo ${salario} y con estos ${años} tiene este salario: ${salida}`)
        contador++
    }
    if(salario >=500 ){
        salida=salario
        console.log(`con este sueldo ${salario} y con estos ${años} tiene este salario: ${salida}`)
        contador++
    }
}