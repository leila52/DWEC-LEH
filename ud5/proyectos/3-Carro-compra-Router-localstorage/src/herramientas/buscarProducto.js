//*********************************************************************************/
// Buscar un producto, en el array informacion facilitado
//*********************************************************************************/
export function buscarProducto(informacion, nombre) {
  return informacion.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase()) || null;
}


//*********************************************************************************/
// Incrementar la cantidad de un producto, en el array informacion facilitado
//*********************************************************************************/
export function incrementarCantidad(informacion , nombre) {  
  
  return informacion.map(producto => {
    if (producto.nombre.toLowerCase() === nombre.toLowerCase()) {
      return { ...producto, cantidad: producto.cantidad + 1 }; 
    }
    return { ...producto }; 
  });
}
export function incrementarCantidadIntroducida(informacion, nombre, cantidad){
  return informacion.map(producto => {
    if (producto.nombre.toLowerCase() === nombre.toLowerCase()) {
      if(producto.cantidad+cantidad <=10){
        return { ...producto, cantidad: producto.cantidad + cantidad }; 
      }
      return alert("no puedes ya que teine que ser menor o igual que 10");
      
    }
    return { ...producto }; 
  });
}

export function calcularUnidades(productos){

  let unidades = 0 ;

  productos.forEach(producto => {

    unidades+=producto.cantidad
    
  });

  return unidades

}



