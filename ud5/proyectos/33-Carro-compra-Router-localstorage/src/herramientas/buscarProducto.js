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

//*********************************************************************************/
// Reducir la cantidad de un producto, en el array informacion facilitado
//*********************************************************************************/
export function reducirCantidad(informacion, nombre) {  
  
  
}

export function calcularUnidades(productos){

  let unidades = 0 ;

  productos.forEach(producto => {

    unidades+=producto.cantidad
    
  });

  return unidades

}



