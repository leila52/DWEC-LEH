 export function buscarProducto(nombre , informacion){
    return informacion.find(producto => producto.nombre === nombre)
  }