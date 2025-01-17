 export function buscarProducto(nombre , informacion){
    return informacion.find(producto =>(( producto.nombre.toLowerCase() === nombre.toLowerCase()) || null))
  }
export function añadir(informacion,nombre){
    return informacion.map(producto => {
      if(producto.nombre===nombre){
        return {"nombre": producto.nombre,"cantidad": producto.cantidad+=1}
      }
      return producto;

  });
}