import React, { useEffect, useState } from "react";
import ServicioAficiones from "../servicios/servicioAficiones";
import "../estilos/Informe.css"
import Swal from "sweetalert2";
import FormularioAficiones from "./FormularioAficiones.jsx";
import FormularioAficionEdit from "./FormularioAficionEdit.jsx"
//import AficionDetalle from "./AficionDetalle.jsx";
import AficionBorrar from "./AficionBorrar.js";
import Modal from "./Modal.jsx";


const Informe = () => {
  // Variables de Aficiones
  const [aficiones, setAficiones] = useState([]);
  const [aficionSeleccionada, setAficionSeleccionada] = useState(null);

  //asi diferenciamos si quiere borrar,consultar o editar
  const [modals, setModals] = useState({
    crear: false,
    consultar: false,
    editar: false,
  });
  //lo gestionamos
  const gestionarModal =(tipoModal,estadoAbierto)=>{
    setModals((previoModals) => ({...previoModals, [tipoModal]:estadoAbierto}))
  };

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
    gestionarModal("consultar",true)
  };

  const EditarAficion = (aficion) => {
    setAficionSeleccionada(aficion);
    gestionarModal("editar",true)
  };

  const crearAficion = () => {    
    gestionarModal("crear",true)
  };

  const borrarAficion = (aficion) =>{
      AficionBorrar(aficion, aficiones, setAficiones)
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
          <button onClick={() => EditarAficion(aficion)}>Editar</button>
        </div>
      </li>
    ))
  ) : (
    <p>No se encontraron aficiones.</p>
  )}
</ul>

<button className="add-aficion-btn" onClick={openModalNuevo}>Añadir Afición</button>


<Modal isOpen={modals.crear} onClose={()=>gestionarModal("crear",false)}>      
          <FormularioAficiones aficiones={aficiones} setAficiones={setAficiones} onClose={()=>gestionarModal("crear",false)} />
      </Modal>  
 
      <Modal isOpen={modals.editar} onClose={()=>gestionarModal("editar",false)} >
           <FormularioAficionEdit  aficiones={aficionSeleccionada} setAficiones={setAficiones} onClose={()=>gestionarModal("editar",false)} />
      </Modal>   
   
    </>
  );
};

export default Informe;
