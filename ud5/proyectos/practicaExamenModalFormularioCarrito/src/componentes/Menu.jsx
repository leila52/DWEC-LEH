import React, { useState } from "react";
import { buscarProducto, obtenerCantidadTotal, borrarTodo, AñadirSiHayMasDeUnProducto, borrarSiHayMasDeUnProducto } from "../heramientas/herramientas";
import "../estilos/Menu.css";
//import Modal from "./Modal";


const Menu = ({ total, setTotal, producto, setProducto, informacion }) => {
    //para mostrar el carrito
    const [carritoVisible, setCarritoVisible] = useState(false);

    /*
    //esto para modal para pedir al usuario cantidad
    const [modalVisible, setModalVisible] = useState(false);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [cantidad, setCantidad] = useState(1); // Cantidad por defecto 1
    */


    const toggleCarrito = () => {
        setCarritoVisible(!carritoVisible);
    };
/*
    //abrir modal
    const abrirModal = (productito) => {
        setProductoSeleccionado(productito);
        setCantidad(productito.cantidad); // Prellenar la cantidad actual
        setModalVisible(true);
    };


    // Cerrar modal
    const cerrarModal = () => {
        setModalVisible(false);
    };
    */
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
    const eliminarProducto = (nombreProducto) => {
        console.log(" eliminar: " + nombreProducto);
        const nuevosProductos = borrarTodo(producto, nombreProducto);

        console.log("Estado actualizacion :", nuevosProductos);
        setProducto(nuevosProductos);

        const nuevoTotal = calcularTotal(nuevosProductos, informacion);
        console.log("Nuevo total después de eliminar:", nuevoTotal);
        setTotal(nuevoTotal);
    };
    // Función para decrementar 1 EN LA CANTIDAD
    const decrementarProducto = (nombre) => {
        const productosActualizados = borrarSiHayMasDeUnProducto(producto, nombre);
        setProducto(productosActualizados); // Actualiza el estado con la nueva lista de productos QUITÁNDOLO
        const nuevoTotal = calcularTotal(productosActualizados, informacion);
        console.log("Nuevo total después de eliminar:", nuevoTotal);
        setTotal(nuevoTotal);
    };
    // Función para INCREMENTAR 1 EN LA CANTIDAD

    const incrementarProducto = (nombre) => {
        const productosActualizados = AñadirSiHayMasDeUnProducto(producto, nombre);
        setProducto(productosActualizados); // Actualiza el estado con la nueva lista de productos QUITÁNDOLO 
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
            <span className="carrito-texto">{obtenerCantidadTotal(producto)} : {total}Є</span>
            {/* Botón para mostrar/ocultar carrito */}
            <button className="toggle-carrito" onClick={toggleCarrito}>
                🛒
            </button>
            {/* Carrito de productos */}
            {carritoVisible && (
                <div className="carrito-productos">
                    <h4>Carrito</h4>
                    {producto.length > 0 ? (
                        <ul>
                            {producto.map((productito, index) => (
                                <li key={index}>
                                    {productito.nombre}x {productito.cantidad}
                                    {/* Botón para incrementar la cantidad */}
                                    <button onClick={() => incrementarProducto(productito.nombre, productito.precio)}>Añadir uno</button>
                                    {/* Botón para decrementar la cantidad */}
                                    <button onClick={() => decrementarProducto(productito.nombre, productito.precio)}>Restar Uno</button>

                                    {/* Botón para eliminar el producto */}
                                    <button
                                        className="eliminar-producto"
                                        onClick={() => eliminarProducto(productito.nombre)}>
                                        Eliminar todo
                                    </button>
                                    {/*IMPORTANTE:los parámetros estén en el mismo orden de como los pones en la función que importas*/}
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
};
export default Menu;