import '../estilos/menu.css'
import React, { useState } from "react";

import { obtenerCantidadTotal, obtenerPrecioTotal } from '../herramientas/buscarproducto';
const Menu= ({productos, productosJson}) =>{
  const [carritoVisible, setCarritoVisible] = useState(false);

  const toggleCarrito = () => {
    setCarritoVisible(!carritoVisible);
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
                  {/*BOTON QUITAR PRODUCTOS*/}
                  <button onClick={() => eliminarProducto(producto.nombre)}>-</button>
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
