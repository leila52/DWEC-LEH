import '../estilos/Cuerpo.css';
import React, { useEffect, useState } from "react";
import ServicioAxios from "../servicios/ServicioAxios";
import Swal from "sweetalert2";
import ServicioDetalle from "./ServicioDetalle.jsx";
import FormularioServicioEdit from "./FormularioServicioEdit.jsx";
import Modal from "./Modal.jsx";
import FormularioServicio from "./FormularioServicio.jsx";



const Cuerpo = ({ servicios, setServicios })=> {
    //variables
    const [servicioSeleccionada, setServiciosSeleccionada] = useState(null);

      //Variables del modal de Nuevo
    const [isModalNuevoOpen, setIsModalNuevoOpen] = useState(false);
    const openModalNuevo = () => setIsModalNuevoOpen(true);
    const closeModalNuevo = () => setIsModalNuevoOpen(false);

    //Variables del modal de Detalle
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    //Variables del modal de Editar
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);
    const openModalEdit = () => setIsModalEditOpen(true);
    const closeModalEdit = () => setIsModalEditOpen(false);

    //dibujar los servicios
    useEffect(() => {
        ServicioAxios.getAll()
          .then((response) => {
            setServicios(response.data);
          })
          .catch((error) => {
    
            Swal.fire({
              title: "¿Tienes Internet?",
              text: "No consigo descargar las aficiones :(",
              icon: "question"
            });
          });
      }, []);
      
      const consultarDetalleAficion = (servicio) => {
        setServiciosSeleccionada(servicio);
        openModal(); // Abre el modal con la afición seleccionada
      };

      const EditarAficion = (servicio) => {
        setServiciosSeleccionada(servicio);
        openModalEdit(); // Abre el modal con la afición seleccionada
      };
    
      const borrarAficion =(servicio) => {
         //Enviar por Axios al Json de BD
         ServicioAxios.delete(servicio.id)
         .then(response => {
          
            Swal.fire("servicio borrada correctamente");   
          
            //borrar aficion en js  
          const nuevosServicios = servicios.filter((a) => a.id !== servicio.id);
          setServicios(nuevosServicios)
         })
         .catch(error => {
          
          Swal.fire("ERROR, No se ha borrado la afición");  
    
         });
    
       }


      return (
        <>
        <ul className="servicios-list">
            {//para coger toda la informacion
            servicios.length > 0 ? (
                servicios.map((servicio) => (
                    <li key={servicio.id} className="servicio-item">
                        <div>
                            <strong>{servicio.nombre}</strong>: {servicio.importe}
                        </div>
                        <div>
                            <button onClick={() => consultarDetalleAficion(servicio)}>Consulta</button>
                            <button onClick={() => borrarAficion(servicio)}>Borrar</button>
                            <button onClick={() => EditarAficion(servicio)}>Editar</button>
                        </div>
                    </li>
                ))
            ) : (
                <p>No se encontraron aficiones.</p>
            )}
        </ul>
        <button className="add-aficion-btn" onClick={openModalNuevo}>Añadir Afición</button>

            
      <Modal isOpen={isModalNuevoOpen} onClose={closeModalNuevo}>      
          <FormularioServicio servicios={servicios} setServicios={setServicios} onClose={closeModalNuevo} />
      </Modal>     
        <Modal isOpen={isModalOpen} onClose={closeModal}>
              {servicioSeleccionada && <ServicioDetalle servicio={servicioSeleccionada} />} 
        </Modal> 
         <Modal isOpen={isModalEditOpen} onClose={closeModalEdit} >
            <FormularioServicioEdit  servicio={servicioSeleccionada} setServicios={setServicios} onClose={closeModalEdit} />
        </Modal> 
         
        </>
        

      );
};

export default Cuerpo;