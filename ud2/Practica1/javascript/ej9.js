let contador = 0
do{
    let valores=prompt("los lados")
    let valoresArray=valores.split(",")
    let a=parseFloat(valoresArray[0])
    let b=parseFloat(valoresArray[1])
    let perimetroRectangulo = (a,b) => {
        //se utiliza el toFied para especificar numero de decimale
        let total= parseFloat((a+b)*2).toFixed(2)
        return total
    }

    console.log(`los lados ${valores} tiene de perimetro ${perimetroRectangulo(a,b)}`)
contador++
}while (contador <2) 