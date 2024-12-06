import React, { useEffect, useState } from "react";
import ServicioAficiones from "../servicios/servicioAficiones";
import "../estilos/Informe.css";
import FormularioSephora from "../componentes/FormularioSephora";
//import Swal from "sweetalert2";

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

  //funcion para añadir nueva aficion
  const agregarAficion =(nuevaAficion)=>{
    //para añadirl al json se hace el create
    ServicioAficiones.create(nuevaAficion)
    .then((response) => {
      setAficiones([...aficiones,nuevaAficion]);
      console.log("agregacion", response.data);
    })
    .catch((error) => {
      console.error("no se ha agregado sorry ",error);
    });
    
  }

  return (
    <div>
      <h1>Productos de Sephora</h1>
      <ul>
        {aficiones.map((aficion) => (
          <li key={aficion.id}> 
            <img src={aficion.url} alt={aficion.nombre}/> <br/>
            {aficion.nombre} - {aficion.descripcion}  
          </li>
        ))}
      </ul>
      <div>
        <h1>Formulario para introducir productos</h1>
        <FormularioSephora onAddProduct={agregarAficion} />
      </div>
    </div>
  );
};

export default Informe;
