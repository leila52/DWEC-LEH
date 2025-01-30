import React, { useState } from "react";
import "../estilos/menu.css";
import { Link } from 'react-router-dom';
import { calcularUnidades } from "../herramientas/buscarProducto";
//import Modal from "./Modal";
//import Carrito from "./Carrito";

// Componente MenuSuperior
const MenuSuperior = ({ total, productos, eliminarProducto }) => {
  const [carritoVisible, setCarritoVisible] = useState(false);
  const [modals, setModals] = useState({
    consultar: false,
});
//gestionar modales
const gestionarModal = (tipoModal, estadoAbierto) => {
  setModals((previoModals) => ({ ...previoModals, [tipoModal]: estadoAbierto }));
};


  const toggleCarrito = () => {
    setCarritoVisible(!carritoVisible);
  };
   //manejar modales
   const consultarCarrito = (productos) => {
    setInformacionSeleccionada(productos);
    gestionarModal("consultar", true)
};


  let importeTotal = total.toFixed(2);  
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
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No hay productos en el carrito.</p>
              )}
            </li>
          )}
           {/**< Modal isOpen={modals.consultar} onClose={() => gestionarModal("consultar", false)}> {productos&& <Carrito productos={productos} />}
            </Modal> */
           } 

        </ul>
      </nav>
    </div>
  );
};

export default MenuSuperior;
