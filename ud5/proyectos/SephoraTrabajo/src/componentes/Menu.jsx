import React, { useState } from "react";
import { buscarProducto, obtenerCantidadTotal,  AñadirSiHayMasDeUnProducto, borrarSiHayMasDeUnProducto } from "../herramientas/herramientas";
import "../estilos/Menu.css";
import Swal from 'sweetalert2';

const Menu = ({ total, setTotal, productoM, setProductoM, informacion }) => {
    //para mostrar el carrito
    const [carritoVisible, setCarritoVisible] = useState(false);

    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [cantidad, setCantidad] = useState(1); // Cantidad por defecto 1

    const toggleCarrito = () => {
        console.log("Contenido del carrito:", productoM); // Ver qué hay en la lista
        setCarritoVisible(!carritoVisible);
    };
    

    //calculamos el total
    const calcularTotal = (productos, informacion) => {
        return productos.reduce((total, productito) => {
            // Busca el producto en la información completa
            const productoDetalle = buscarProducto(productito.nombre, informacion);
            if (productoDetalle) {
                // Si encuentra el producto, suma el precio total basado en la cantidad
                return total + productito.cantidad * productoDetalle.precio;
            }
            return total;
        }, 0);

    }


    // Función para decrementar 1 EN LA CANTIDAD
    const decrementarProducto = (nombre,tono) => {
        console.log(`Intentando restar 1 al producto: ${nombre}, Tono: ${tono}`);
        const productosActualizados = borrarSiHayMasDeUnProducto(productoM, nombre,tono);
        setProductoM(productosActualizados); // Actualiza el estado con la nueva lista de productos QUITÁNDOLO
        const nuevoTotal = calcularTotal(productosActualizados, informacion);
        console.log("Nuevo total después de eliminar:", nuevoTotal);
        setTotal(nuevoTotal);
    };

    // Función para INCREMENTAR 1 EN LA CANTIDAD
    const incrementarProducto = (nombre, tono) => {
        const productoEncontrado = productoM.find(prod => prod.nombre === nombre && prod.tono === tono);
    
        if (!productoEncontrado) return;
    
        if (productoEncontrado.cantidad >= 15) {
            Swal.fire({
                icon: 'error',
                title: 'Límite alcanzado',
                text: 'No puedes añadir más de 15 unidades de este producto.',
            });
            return;
        }
    
        const productosActualizados =AñadirSiHayMasDeUnProducto(productoM, nombre, tono);
    
        setProductoM(productosActualizados);
        setTotal(calcularTotal(productosActualizados, informacion));
    };
    return (
        <div>
            {/* Texto a la derecha */}
            <div className="carrito-container">
                <span className="carrito-texto">{obtenerCantidadTotal(productoM)} : {total}Є</span>
                {/* Botón para mostrar/ocultar carrito */}
                <button className="toggle-carrito" onClick={toggleCarrito}>
                    🛒
                </button>
            </div>
            
            {/* Carrito de productos */}
            {carritoVisible && (
                <div className="carrito-productos">
                    <h4>Carrito</h4>
                    {productoM.length > 0 ? (
                        <ul>
                            {productoM.map((productito, index) => (
                                <li key={index}>
                                    <span>Producto: {productito.nombre} </span>
                                    <span>Cantidad:{productito.cantidad}</span>
                                    <span>Tono: {productito.tono.nombre} </span>
                                    {/* Botón para incrementar la cantidad */}
                                    <button onClick={() => incrementarProducto(productito.nombre, productito.tono)}>Añadir uno</button>
                                    {/* Botón para decrementar la cantidad */}
                                    <button onClick={() => decrementarProducto(productito.nombre, productito.tono)}>Restar Uno</button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No hay productos en el carrito.</p>
                    )}
                </div>
            )}

    </div>

);
}
export default Menu;