import React, { useState } from "react";
import { buscarProducto, obtenerCantidadTotal,  AñadirSiHayMasDeUnProducto, borrarSiHayMasDeUnProducto } from "../herramientas/herramientas";
import "../estilos/Menu.css";
import Swal from 'sweetalert2';

const Menu = ({ total, setTotal, productoM, setProductoM, informacion }) => {
    //para mostrar el carrito
    const [carritoVisible, setCarritoVisible] = useState(false);


    //esto para modal para pedir al usuario cantidad
    const [modalVisible, setModalVisible] = useState(false);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [cantidad, setCantidad] = useState(1); // Cantidad por defecto 1

    const toggleCarrito = () => {
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
    const decrementarProducto = (nombre) => {
        const productosActualizados = borrarSiHayMasDeUnProducto(productoM, nombre);
        setProductoM(productosActualizados); // Actualiza el estado con la nueva lista de productos QUITÁNDOLO
        const nuevoTotal = calcularTotal(productosActualizados, informacion);
        console.log("Nuevo total después de eliminar:", nuevoTotal);
        setTotal(nuevoTotal);
    };

    // Función para INCREMENTAR 1 EN LA CANTIDAD
    const incrementarProducto = (nombre) => {
        const productoEncontrado = productoM.find(prod => prod.nombre === nombre);

        //busca la cantidad del producto
        if (productoEncontrado.cantidad >= 15) {
            Swal.fire({
                icon: 'error',
                title: 'Límite alcanzado',
                text: 'No puedes añadir más de 15 unidades de este producto.',
            });
            return; // Salir si ya tiene la cantidad máxima
        }
        const productosActualizados = AñadirSiHayMasDeUnProducto(productoM, nombre);
        setProductoM(productosActualizados); // Actualiza el estado con la nueva lista de productos QUITÁNDOLO 
        const nuevoTotal = calcularTotal(productosActualizados, informacion);
        console.log("Nuevo total después de eliminar:", nuevoTotal);
        setTotal(nuevoTotal);
    };

    return (
        <div>
            {/* Icono a la izquierda */}
            <img
                src="/imagenes/supermercado.png"
                alt="Supermercado"
                className="icono-supermercado"
            />
            {/* Texto a la derecha */}
            <span className="carrito-texto">{obtenerCantidadTotal(productoM)} : {total}Є</span>
            {/* Botón para mostrar/ocultar carrito */}
            <button className="toggle-carrito" onClick={toggleCarrito}>
                🛒
            </button>
            {/* Carrito de productos */}
            {carritoVisible && (
                <div className="carrito-productos">
                    <h4>Carrito</h4>
                    {productoM.length > 0 ? (
                        <ul>
                            {productoM.map((productito, index) => (
                                <li key={index}>
                                    {productito.nombre}x {productito.cantidad}
                                    {/* Botón para incrementar la cantidad */}
                                    <button onClick={() => incrementarProducto(productito.nombre, productito.precio)}>Añadir uno</button>
                                    {/* Botón para decrementar la cantidad */}
                                    <button onClick={() => decrementarProducto(productito.nombre, productito.precio)}>Restar Uno</button>
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