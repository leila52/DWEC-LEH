import React, { useEffect, useState } from "react";
import ServicioAficiones from "../servicios/servicioAficiones";
import "../estilos/Informe.css"
import Swal from "sweetalert2";

const Informe = () => {
  const [aficiones, setAficiones] = useState([]);

  useEffect(() => {
    ServicioAficiones.getAll()
    //promesa
      .then((response) => {
        //se guarda en el set
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

  return (
    <div>
      <h1>Lista de Aficiones</h1>
      <ul>
        {aficiones.map((aficion) => (
          <li key={aficion.id}>{aficion.nombre} - {aficion.descripcion}</li>
        ))}
      </ul>
    </div>
  );
};

export default Informe;
