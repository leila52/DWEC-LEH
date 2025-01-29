import '../estilos/menu.css'
import React, { useState } from "react";

import { decrementarCantidad, obtenerCantidadTotal, obtenerPrecioTotal, incrementarCantidad} from '../herramientas/buscarproducto';
const Menu= ({productos, productosJson, setproductosJson}) =>{
  const [carritoVisible, setCarritoVisible] = useState(false);

  const toggleCarrito = () => {
    setCarritoVisible(!carritoVisible);
  };
  // Función para eliminar un producto de la lista de productosJson
  const eliminarProducto = (nombre) => {
    const nuevaLista = productosJson.filter(
      (producto) => producto.nombre !== nombre
    );
    setproductosJson(nuevaLista); // Actualiza el estado con la lista sin el producto eliminado
  };

// Función para decrementar 1 EN LA CANTIDAD
  const decrementarProducto = (nombre) => {
    const productosActualizados = decrementarCantidad(productosJson, nombre);
    setproductosJson(productosActualizados); // Actualiza el estado con la nueva lista de productos QUITÁNDOLO
  };
 // Función para INCREMENTAR 1 EN LA CANTIDAD
  const incrementarProducto = (nombre) => {
    const productosActualizados = incrementarCantidad(productosJson, nombre);
    setproductosJson(productosActualizados); // Actualiza 
  };
  return (
    <>
     <div className="menu-superior">
      {/* Icono a la izquierda */}
      <img
        src="/imagenes/supermercado.png"
        alt="Supermercado"
        className="icono-supermercado"
      />
      {/*links para moverse entre routes */}
      <a href="/">INICIO</a>
      <a href="/detalle-carrito">DETALLES</a>


      {/* Texto a la derecha */}
      <span className="carrito-texto">{obtenerCantidadTotal(productosJson)} : {obtenerPrecioTotal(productos, productosJson)}Є</span>

      {/* Botón para mostrar/ocultar carrito */}
      <button className="toggle-carrito" onClick={toggleCarrito}>
        🛒
      </button>

      {/* Carrito de productos */}
      {carritoVisible && (
        <div className="carrito-productos">
          <h4>Carrito</h4>
          {productosJson.length > 0 ? (
            <ul>
              {productosJson.map((producto, index) => (
                <li key={index}>{producto.nombre} : {producto.cantidad}
                    {/* Botón para incrementar la cantidad */}
                    <button onClick={() => incrementarProducto(producto.nombre, producto.precio)}>+</button>
                    {/* Botón para decrementar la cantidad */}
                    <button onClick={() => decrementarProducto(producto.nombre, producto.precio)}>-</button>
                    {/* Botón para eliminar TODO el producto */}
                    <button onClick={() => eliminarProducto(producto.nombre)}>Eliminar</button>
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
  </>
);
};

export default Menu
