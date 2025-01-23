import React, { useState } from "react";
import "../estilos/menu.css";
import { Link } from "react-router-dom";
import { buscarProducto,obtenerCantidadTotal ,borrarTodo} from "../herramientas/buscarProducto";

// Componente MenuSuperior
const MenuSuperior = ({ total, setTotal ,productosJson,setProductosJson,informacion }) => {
  const [carritoVisible, setCarritoVisible] = useState(false);

  const toggleCarrito = () => {
    setCarritoVisible(!carritoVisible);
  };
  //calculamos total
  const calcularTotal =(productos,informacion)=>{
    return productos.reduce((total, producto) => {
      // Busca el producto en la información completa
      const productoDetalle = buscarProducto(producto.nombre, informacion);
      if (productoDetalle) {
        // Si encuentra el producto, suma el precio total basado en la cantidad
        return total + producto.cantidad * productoDetalle.precio;
      }
      return total;
    }, 0);
    
  }
  const eliminarProducto = (nombreProducto) => {
    console.log(" eliminar: " + nombreProducto);
    
    const nuevosProductos = borrarTodo(productosJson, nombreProducto);

    console.log("Estado actualizacion :", nuevosProductos);
    setProductosJson(nuevosProductos);

    const nuevoTotal = calcularTotal(nuevosProductos,informacion);
    console.log("Nuevo total después de eliminar:", nuevoTotal);
    setTotal(nuevoTotal);
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