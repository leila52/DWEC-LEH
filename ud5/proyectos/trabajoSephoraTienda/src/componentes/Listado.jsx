import React, { useEffect, useState } from "react";
import servicioStock from "../servicios/servicioStock"; // Cambié a servicioStock
import "../estilos/Informe.css";
import Swal from "sweetalert2";
import ProductoBorrar from "./crud-aficion/ProductoBorrar.js";
import ProductoConsultar from "./crud-aficion/ProductoConsultar.jsx";
import ProductoEditar from "./crud-aficion/ProductoEditar.jsx";
import ProductoCrear from "./crud-aficion/ProductoCrear.jsx";
import Modal from "./Modal.jsx";

const Listado = () => {
  // Variables de productos
  const [productos, setProductos] = useState([]); // Cambié a productos
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const [modals, setModals] = useState({
    crear: false,
    consultar: false,
    editar: false,
  });

  const gestionarModal = (tipoModal, estadoAbierto) => {
    setModals((prevModals) => ({ ...prevModals, [tipoModal]: estadoAbierto }));
  };

  // ************************************************
  // Carga inicial de todos los productos, 
  // Gracias a UseEffect, se ejecuta una única vez
  // ************************************************
  useEffect(() => {
    servicioStock.getAll()
      .then((response) => {
        setProductos(response.data);
      })
      .catch((error) => {
        Swal.fire({
          title: "¿Tienes Internet?",
          text: "No consigo descargar los productos :(",
          icon: "question"
        });
      });
  }, []);

  // ************************************************
  // Manejadores de Eventos de: editar, crear y borrar
  // Gracias a UseEffect, se ejecuta una única vez
  // ************************************************
  const consultarProducto = (producto) => {
    setProductoSeleccionado(producto);
    gestionarModal("consultar", true);
  };

  const editarProducto = (producto) => {
    console.log("Producto a editar:", producto);
        setProductoSeleccionado(producto);
        gestionarModal("editar", true);
    
};

  const crearProducto = () => {
    gestionarModal("crear", true);
  };

  const borrarProducto = (producto) => {
    ProductoBorrar(producto, productos, setProductos); // Asegúrate de tener la lógica de ProductoBorrar
  };

  return (
    <>
      <ul className="productos-list">
        {productos.length > 0 ? (
          productos.map((producto) => (
            <li key={producto.id} className="producto-item">
              {/* Mostrar la imagen del producto */}
              {producto.url && (
                <div className="producto-imagen">
                  <img src={producto.url} alt={producto.nombre} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                </div>
              )}
              <div>
                <strong>{producto.nombre}</strong>: {producto.descripcion} : {producto.precio} €
              </div>
              <div>
                <button onClick={() => consultarProducto(producto)}>Consulta</button>
                <button onClick={() => borrarProducto(producto)}>Borrar</button>
                <button onClick={() => editarProducto(producto)}>Editar</button>
              </div>
            </li>
          ))
        ) : (
          <p>No se encontraron productos.</p>
        )}
      </ul>

      <button className="add-producto-btn" onClick={crearProducto}>
        Añadir Producto
      </button>

      <Modal isOpen={modals.crear} onClose={() => gestionarModal("crear", false)}>
        <ProductoCrear
          productos={productos}
          setProductos={setProductos}
          onClose={() => gestionarModal("crear", false)}
        />
      </Modal>

      <Modal isOpen={modals.consultar} onClose={() => gestionarModal("consultar", false)}>
        {productoSeleccionado && <ProductoConsultar producto={productoSeleccionado} />}
      </Modal>

      <Modal isOpen={modals.editar} onClose={() => gestionarModal("editar", false)}>
        <ProductoEditar
          producto={productoSeleccionado}
          setProductos={setProductos}
          onClose={() => gestionarModal("editar", false)}
        />
      </Modal>
    </>
  );
};

export default Listado;
