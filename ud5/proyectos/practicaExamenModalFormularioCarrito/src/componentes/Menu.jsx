import React, { useState } from "react";
import { buscarProducto, obtenerCantidadTotal, borrarTodo, AñadirSiHayMasDeUnProducto, borrarSiHayMasDeUnProducto } from "../heramientas/herramientas";
import "../estilos/Menu.css";
import Modal from "./Modal";
import Swal from 'sweetalert2';


const Menu = ({ total, setTotal, producto, setProducto, informacion }) => {
    //para mostrar el carrito
    const [carritoVisible, setCarritoVisible] = useState(false);


    //esto para modal para pedir al usuario cantidad
    const [modalVisible, setModalVisible] = useState(false);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [cantidad, setCantidad] = useState(1); // Cantidad por defecto 1



    const toggleCarrito = () => {
        setCarritoVisible(!carritoVisible);
    };

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

    // Función para actualizar la cantidad del modal
    const actualizarCantidad = () => {
        if (cantidad > 15) {
            Swal.fire({
                icon: 'error',
                title: 'Cantidad máxima alcanzada',
                text: 'La cantidad máxima permitida es 15.',
            });
            return;
        }

        const productosActualizados = producto.map((prod) =>
            prod.nombre === productoSeleccionado.nombre ? { ...prod, cantidad } : prod
        );

        setProducto(productosActualizados);
        const nuevoTotal = calcularTotal(productosActualizados, informacion);
        setTotal(nuevoTotal);

        cerrarModal();
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
        const productoEncontrado = producto.find(prod => prod.nombre === nombre);

        //busca la cantidad del producto
        if (productoEncontrado.cantidad >= 15) {
            Swal.fire({
                icon: 'error',
                title: 'Límite alcanzado',
                text: 'No puedes añadir más de 15 unidades de este producto.',
            });
            return; // Salir si ya tiene la cantidad máxima
        }
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
                                    {/* Botón para abrir el modal */}
                                    <button onClick={() => abrirModal(productito)}>Cambiar cantidad</button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No hay productos en el carrito.</p>
                    )}
                </div>
            )}
            {/* Modal */}
            <Modal isOpen={modalVisible} onClose={cerrarModal}>
                <div>
                    <h3>Modificar cantidad de {productoSeleccionado?.nombre}</h3>
                    <input
                        type="number"
                        value={cantidad}
                        onChange={(e) => setCantidad(Number(e.target.value))}
                        min="1"
                        max="15"
                    />
                    <div className="modal-actions">
                        <button onClick={actualizarCantidad}>Actualizar</button>
                        <button onClick={cerrarModal}>Cancelar</button>
                    </div>
                </div>
            </Modal>
        </div>

    );
};
export default Menu;