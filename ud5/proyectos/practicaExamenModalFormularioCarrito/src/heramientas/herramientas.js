export function buscarProducto(nombre , informacion){
    console.log(informacion,nombre) 
      return informacion.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase()) || null
    }
  export function añadir(informacion,nombre){
      console.log("estoy buscando"+nombre)
      return informacion.map(producto => {
        if (producto.nombre === nombre) {   
            return {  "nombre": producto.nombre, cantidad: producto.cantidad + 1 }; // Copia segura
        }   
        return producto;
      })  
  }
  //funciones que almacena todos los productos añadidos
  export function obtenerCantidadTotal(informacion){
    let total=0
    informacion.forEach(producto=> {total += producto.cantidad});
    return total
  }
  export function AñadirSiHayMasDeUnProducto(informacion,nombre){
    console.log("estoy buscando"+nombre)
    return informacion.map(producto => {
      if (producto.nombre === nombre) {
        return {
          ...producto,
          cantidad: producto.cantidad + 1
        };
      }
      return producto;
    })
    // filtramos con cantidad mayor a 0
    .filter(producto => producto.cantidad > 0);
  }
  
  export function borrarSiHayMasDeUnProducto(informacion,nombre){
    console.log("estoy buscando"+nombre)
    return informacion.map(producto => {
      if (producto.nombre === nombre) {
        return {
          ...producto,
          cantidad: producto.cantidad - 1
        };
      }
      return producto;
    })
    // filtramos con cantidad mayor a 0
    .filter(producto => producto.cantidad > 0);
  }
  
  //borrar todo
  export function borrarTodo(informacion, nombre) {
    console.log("Productos antes de eliminar:", informacion);
    console.log("Eliminando completamente: " + nombre);
    const productosFiltrados = informacion.filter(
      (producto) => producto.nombre.toLowerCase() !== nombre.toLowerCase()
    );
    console.log("Productos después de eliminar:", productosFiltrados);
    return productosFiltrados;
  }