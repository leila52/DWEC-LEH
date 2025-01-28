import React, { useState } from "react";
import "../estilos/menu.css";
import { buscarProducto , obtenerCantidadTotal ,borrarTodo } from "../heramientas/buscarProducto";

// Componente MenuSuperior
const Menu = ({ cesta, setCesta, total, setTotal, servicios }) => {
  const [carritoVisible, setCarritoVisible] = useState(false);

  const toggleCarrito = () => {
    setCarritoVisible(!carritoVisible);
  };

  const calcularTotal = (productos) => {
    return productos.reduce((total, producto) => {
      // Usa la función buscarProducto para obtener el detalle del producto
      const productoDetalle = buscarProducto(producto.nombre, servicios);
      console.log("Producto:", producto);
      if (productoDetalle && productoDetalle.precio) {
        // Si encuentra el producto y tiene un precio, suma el precio total basado en la cantidad
        const subtotal = producto.cantidad * productoDetalle.precio;
        console.log(`Subtotal para ${producto.nombre}:`, subtotal);
        return total + subtotal;
      }
      return total; // Si no encuentra el producto, no sumamos nada
    }, 0);
};


  const eliminarProducto = (nombreProducto) => {
    console.log("Eliminar todo de: " + nombreProducto);

    // Usa la función borrarTodo para filtrar la cesta y eliminar el producto
    const nuevosProductos = borrarTodo(cesta, nombreProducto);

    console.log("Estado actualización de la cesta:", nuevosProductos);
    setCesta(nuevosProductos);

    // Calculamos el nuevo total después de eliminar el producto
    const nuevoTotal = calcularTotal(nuevosProductos);
    console.log("Nuevo total después de eliminar:", nuevoTotal);
    
    // Solo actualizamos el total si no es NaN y si la cesta no está vacía
    if (!isNaN(nuevoTotal) && nuevosProductos.length > 0) {
      setTotal(nuevoTotal);
    } else {
      // Si la cesta está vacía, el total debe ser 0
      setTotal(0);
    }
};
  return (
    <div className="menu-superior">
      {/* Icono a la izquierda */}
      <img
        src="/imagenes/supermercado.png"
        alt="Supermercado"
        className="icono-supermercado"
      />
      <span className="carrito-texto">
      {obtenerCantidadTotal(cesta)} : {total.toFixed(2)}€
      </span>

      {/* Botón para mostrar/ocultar carrito */}
      <button className="toggle-carrito" onClick={toggleCarrito}>
        🛒
      </button>

      {/* Carrito de productos */}
      {carritoVisible && (
        <div className="carrito-productos">
          <h4>Carrito</h4>
          {cesta.length > 0 ? (
            <ul>
              {cesta.map((producto, index) => (
                <li key={index}>
                  {producto.nombre} x {producto.cantidad}
                  {/* Botón para eliminar todo de ese producto */}
                  <button
                    className="eliminar-producto"
                    onClick={() => eliminarProducto(producto.nombre)}
                  >
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

export default Menu;
