import React, { useEffect, useState } from "react";
import ServicioAficiones from "../servicios/servicioAficiones.js";
import "../estilos/Informe.css"
import Swal from "sweetalert2";
import AficionCrear from "./crud-aficion/AficionCrear.jsx";
import AficionEditar from "./crud-aficion/AficionEditar.jsx"
import AficionConsultar from "./crud-aficion/AficionConsultar.jsx";
import AficionBorrar from "./crud-aficion/AficionBorrar.js";
import Modal from "./Modal.jsx";


const ListadoPrincipal = () => {
  // Variables de Aficiones
  const [aficiones, setAficiones] = useState([]);
  const [aficionSeleccionada, setAficionSeleccionada] = useState(null);

  const [modals, setModals] = useState({
    crear: false,
    consultar: false,
    editar: false,
  });

  const gestionarModal = (tipoModal, estadoAbierto) => {
      setModals((previoModals) => ({ ...previoModals, [tipoModal]: estadoAbierto }));
    };

  // ************************************************
  // Carga inicial de todas las aficiones, 
  // Gracias a UseEffect, se ejecuta una única vez
  // ************************************************
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

  // ************************************************
  // Manejadores de Eventos de : editar , crear y borrar 
  // Gracias a UseEffect, se ejecuta una única vez
  // ************************************************
  const consultarAficion = (aficion) => {
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
          <button onClick={() => consultarAficion(aficion)}>Consulta</button>
          <button onClick={() => borrarAficion(aficion)}>Borrar</button>
          <button onClick={() => EditarAficion(aficion)}>Editar</button>
        </div>
      </li>
    ))
  ) : (
    <p>No se encontraron aficiones.</p>
  )}
</ul>

<button className="add-aficion-btn" onClick={crearAficion}>Añadir Afición</button>


      <Modal isOpen={modals.crear} onClose={()=>gestionarModal("crear",false)}>      
          <AficionCrear aficiones={aficiones} setAficiones={setAficiones} onClose={()=>gestionarModal("crear",false)} />
      </Modal>      

      <Modal isOpen={modals.consultar} onClose={()=>gestionarModal("consultar",false)}>
              {aficionSeleccionada && <AficionConsultar aficion={aficionSeleccionada} />} 
      </Modal> 
 
      <Modal isOpen={modals.editar} onClose={()=>gestionarModal("editar",false)} >
           <AficionEditar  aficiones={aficionSeleccionada} setAficiones={setAficiones} onClose={()=>gestionarModal("editar",false)} />
      </Modal>   
   
    </>
  );
};

export default ListadoPrincipal;
