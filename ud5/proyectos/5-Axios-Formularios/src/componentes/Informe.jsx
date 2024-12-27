import React, { useEffect, useState } from "react";
import ServicioAficiones from "../servicios/servicioAficiones";
import "../estilos/Informe.css"
import Swal from "sweetalert2";
import FormularioAficiones from "./FormularioAficiones.jsx";
import AficionDetalle from "./AficionDetalle.jsx";
import Modal from "./Modal.jsx";


const Informe = () => {
  // Variables de Aficiones
  const [aficiones, setAficiones] = useState([]);
  const [aficionSeleccionada, setAficionSeleccionada] = useState(null);

  //Variables del modal de Nuevo
  const [isModalNuevoOpen, setIsModalNuevoOpen] = useState(false);
  const openModalNuevo = () => setIsModalNuevoOpen(true);
  const closeModalNuevo = () => setIsModalNuevoOpen(false);

  //Variables del modal de Nuevo
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Dibujar las aficiones una sola vez
  useEffect(() => {
    ServicioAficiones.getAll()
      .then((response) => {
        setAficiones(response.data);
      })
      .catch((error) => {

        Swal.fire({
          title: "¿Tienes Internet?",
          text: "No consigo descargar las aficiones :(",
          icon: "question"
        });
      });
  }, []);

  const consultarDetalleAficion = (aficion) => {
    setAficionSeleccionada(aficion);
    openModal(); // Abre el modal con la afición seleccionada
  };

  const borrarAficion =(aficion) => {
     //Enviar por Axios al Json de BD
     ServicioAficiones.delete(aficion.id)
     .then(response => {
      
        Swal.fire("Afición borrada correctamente");   
      
        //borrar aficion en js  
      const nuevasAficiones = aficiones.filter((a) => a.id !== aficion.id);
      setAficiones(nuevasAficiones)
     })
     .catch(error => {
      
      Swal.fire("ERROR, No se ha borrado la afición");  

     });

   }
  
 
  

  return (
    <>      
      <ul className="aficiones-list">
  {aficiones.length > 0 ? (
    aficiones.map((aficion) => (
      <li key={aficion.id} className="aficion-item">
        <div>
          <strong>{aficion.nombre}</strong>: {aficion.descripcion}
        </div>
        <div>
          <button onClick={() => consultarDetalleAficion(aficion)}>Consulta</button>
          <button onClick={() => borrarAficion(aficion)}>Borrar</button>
        </div>
      </li>
    ))
  ) : (
    <p>No se encontraron aficiones.</p>
  )}
</ul>

<button className="add-aficion-btn" onClick={openModalNuevo}>Añadir Afición</button>


      <Modal isOpen={isModalNuevoOpen} onClose={closeModalNuevo}>
          <FormularioAficiones aficiones={aficiones} setAficiones={setAficiones} onClose={closeModalNuevo} />
      </Modal>     
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {aficionSeleccionada && <AficionDetalle aficion={aficionSeleccionada} />}  {/* Pasamos la afición seleccionada al modal */}
      </Modal>
    </>
  );
};

export default Informe;
