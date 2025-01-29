export function buscarProducto(nombre, info) {
    return (
        info.find(
            (libro) => libro.nombre.toLowerCase() === nombre.toLowerCase()
        ) || null
    );
}
export function incrementarCantidad(informacion, nombre) {
    console.log("Estoy buscando " + nombre);
    return informacion.map((producto) => {
        if (producto.nombre === nombre) {
            console.log("Encontrado", {
                nombre: producto.nombre,
                cantidad: producto.cantidad + 1,
            });
            return {
                nombre: producto.nombre,
                cantidad: producto.cantidad + 1, // Incrementa la cantidad correctamente
            };
        } else {
            console.log("No encontrado: " + producto.nombre);
        }

        return producto;
    });
}
export function obtenerCantidadTotal(informacion) {
    let total = 0;
    informacion.forEach((element) => {
        total += element.cantidad;
    });
    return total;
}
export function obtenerPrecioTotal(informacion, productosJson) {
    let total = 0;

    // Iterar sobre los productos en productosJson
    productosJson.forEach((producto) => {
        // Buscar el precio correspondiente en la lista 'informacion' por nombre
        const productoInfo = informacion.find(
            (item) => item.nombre === producto.nombre
        );
        // Si el producto se encuentra en 'informacion', calcular el total
        if (productoInfo) {
            total += productoInfo.precio * producto.cantidad;
        }
    });

    return total;
}
