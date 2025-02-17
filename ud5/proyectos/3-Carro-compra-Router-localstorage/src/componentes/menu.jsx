import React, { useState } from "react";
import "../estilos/menu.css";
import { Link } from 'react-router-dom';
import { calcularUnidades } from "../herramientas/buscarProducto";

// Componente MenuSuperior
const MenuSuperior = ({ total, productos, eliminarProducto }) => {
  const [carritoVisible, setCarritoVisible] = useState(false);

  const toggleCarrito = () => {
    setCarritoVisible(!carritoVisible);
  };

  let importeTotal = 10;//total.toFixed(2);  
  let unidades = calcularUnidades(productos)  

  return (
    <div className="menu-superior">
      <nav>
        <ul className="menu-lista">
          {/* Icono del supermercado */}
          <li>
            <img
              src="/imagenes/supermercado.png"
              alt="Supermercado"
              className="icono-supermercado"
            />
          </li>
  
          {/* Enlaces */}
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/detalle-carrito">Detalle</Link></li>
          <li><Link to="/administrador">Administrador</Link></li>
  
          {/* Información destacada del carrito */}
          <li className="carrito-info">
            <span className="carrito-unidades">
              🛒 Unidades: {unidades}
            </span>
            <span className="carrito-total">
              Total: {importeTotal} Є
            </span>
          </li>
  
          {/* Botón para mostrar/ocultar carrito */}
          <li>
            <button className="toggle-carrito" onClick={toggleCarrito}>
              🛒
            </button>
          </li>
  
          {/* Carrito desplegable */}
          {carritoVisible && (
            <li className="carrito-productos">
              <h4>Carrito</h4>
              {productos.length > 0 ? (
                <ul className="lista-productos">
                  {productos.map((producto, index) => (
                    <li key={index} className="producto-item">
                      <span>{producto.cantidad} x {producto.nombre}</span>
                      <button
                        className="eliminar-producto"
                        onClick={() => alert("Debes implementarme, soy una parte de la prueba")}
                      >
                        🗑️
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No hay productos en el carrito.</p>
              )}
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default MenuSuperior;
