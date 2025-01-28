import '../estilos/Cuerpo.css';
import React, { useEffect, useState } from "react";
import { buscarProducto, añadir } from '../heramientas/buscarProducto.js';
import ServicioAxios from "../servicios/ServicioAxios";
import Swal from "sweetalert2";
import ServicioDetalle from "./ServicioDetalle.jsx";
import FormularioServicioEdit from "./FormularioServicioEdit.jsx";
import Modal from "./Modal.jsx";
import FormularioServicio from "./FormularioServicio.jsx";


const Cuerpo = ({ servicios, setServicios, total, setTotal, cesta, setCesta }) => {
  // Variables
  const [servicioSeleccionada, setServiciosSeleccionada] = useState(null);

  // Variables del modal de Nuevo
  const [isModalNuevoOpen, setIsModalNuevoOpen] = useState(false);
  const openModalNuevo = () => setIsModalNuevoOpen(true);
  const closeModalNuevo = () => setIsModalNuevoOpen(false);

  // Variables del modal de Detalle
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Variables del modal de Editar
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const openModalEdit = () => setIsModalEditOpen(true);
  const closeModalEdit = () => setIsModalEditOpen(false);

  // Dibujar los servicios
  useEffect(() => {
    ServicioAxios.getAll()
      .then((response) => {
        setServicios(response.data);
      })
      .catch((error) => {
        Swal.fire({
          title: "¿Tienes Internet?",
          text: "No consigo descargar las aficiones :(",
          icon: "question",
        });
      });
  }, []);

  // Función para añadir un servicio a la cesta
  const AnadirACesta = (nombre, importe) => {
    // Actualizar el total
    setTotal((prevTotal) => prevTotal + parseFloat(importe));

    // Verificar si el producto ya está en la cesta
    if (buscarProducto(nombre, cesta) === null) {
      // Si no está, añadirlo con cantidad inicial de 1
      setCesta((prevCesta) => [...prevCesta, { nombre, cantidad: 1 }]);
    } else {
      // Si ya está, actualizar su cantidad
      setCesta((prevCesta) => añadir(prevCesta, nombre));
    }

    Swal.fire("Producto añadido a la cesta", `${nombre} añadido`, "success");
  };

  // Consultar el detalle de un servicio
  const consultarDetalleAficion = (servicio) => {
    setServiciosSeleccionada(servicio);
    openModal(); // Abre el modal con la afición seleccionada
  };

  // Editar una afición
  const EditarAficion = (servicio) => {
    setServiciosSeleccionada(servicio);
    openModalEdit(); // Abre el modal con la afición seleccionada
  };

  // Borrar una afición
  const borrarAficion = (servicio) => {
    ServicioAxios.delete(servicio.id)
      .then((response) => {
        Swal.fire("Servicio borrado correctamente");

        const nuevosServicios = servicios.filter((a) => a.id !== servicio.id);
        setServicios(nuevosServicios);
      })
      .catch((error) => {
        Swal.fire("ERROR, No se ha borrado la afición");
      });
  };

  return (
    <>
      <ul className="servicios-list">
        {servicios.length > 0 ? (
          servicios.map((servicio) => (
            <li key={servicio.id} className="servicio-item">
              <div>
                <strong>{servicio.nombre}</strong>: {servicio.importe}
              </div>
              <div>
                <button onClick={() => consultarDetalleAficion(servicio)}>
                  Consulta
                </button>
                <button onClick={() => borrarAficion(servicio)}>Borrar</button>
                <button onClick={() => EditarAficion(servicio)}>Editar</button>
                <button
                  onClick={() =>
                    AnadirACesta(servicio.nombre, servicio.importe)
                  }
                >
                  Añadir a la cesta
                </button>
              </div>
            </li>
          ))
        ) : (
          <p>No se encontraron servicios.</p>
        )}
      </ul>
      <button className="add-aficion-btn" onClick={openModalNuevo}>
        Añadir Afición
      </button>

      {/* Modal de Nuevo */}
      <Modal isOpen={isModalNuevoOpen} onClose={closeModalNuevo}>
        <FormularioServicio
          servicios={servicios}
          setServicios={setServicios}
          onClose={closeModalNuevo}
        />
      </Modal>

      {/* Modal de Detalle */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {servicioSeleccionada && <ServicioDetalle servicio={servicioSeleccionada} />}
      </Modal>

      {/* Modal de Editar */}
      <Modal isOpen={isModalEditOpen} onClose={closeModalEdit}>
        <FormularioServicioEdit
          servicio={servicioSeleccionada}
          setServicios={setServicios}
          onClose={closeModalEdit}
        />
      </Modal>
    </>
  );
};

export default Cuerpo;
