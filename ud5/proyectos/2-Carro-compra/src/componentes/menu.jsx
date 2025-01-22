import React, { useState } from "react";
import "../estilos/menu.css";
import { Link } from "react-router-dom";
import { obtenerCantidadTotal ,borrarTodo} from "../herramientas/buscarProducto";

// Componente MenuSuperior
const MenuSuperior = ({ total, productosJson,setProductosJson }) => {
  const [carritoVisible, setCarritoVisible] = useState(false);

  const toggleCarrito = () => {
    setCarritoVisible(!carritoVisible);
  };

  const eliminarProducto = (nombreProducto) => {
    console.log("Intentando eliminar: " + nombreProducto);
    const nuevosProductos = borrarTodo(productosJson, nombreProducto);
    console.log("Estado actualizado del carrito:", nuevosProductos);
    setProductosJson(nuevosProductos);
  };

  return (
    <div className="menu-superior">
      {/* Icono a la izquierda */}
      <img
        src="/imagenes/supermercado.png"
        alt="Supermercado"
        className="icono-supermercado"
      />
      <Link to="/"> Inicio</Link>
      <Link to="/detalle-carrito"> Detalle</Link>
      {/* Texto a la derecha */}
      <span className="carrito-texto">{obtenerCantidadTotal(productosJson)} : {total}Є</span>

      {/* Botón para mostrar/ocultar carrito */}
      <button className="toggle-carrito" onClick={toggleCarrito}>
        🛒
      </button>

      {/* Carrito de productos */}
      {carritoVisible && (
        <div className="carrito-productos">
          <h4>Carrito</h4>
          { productosJson.length > 0 ? (
            <ul>
              { productosJson.map((producto, index) => (
                <li key={index}>
                {producto.nombre}x {producto.cantidad}
                {/* Botón para eliminar el producto */}
                <button
                    className="eliminar-producto"
                    onClick={() => eliminarProducto(producto.nombre)}>
                     Eliminar todo
                  </button>
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

export default MenuSuperior;