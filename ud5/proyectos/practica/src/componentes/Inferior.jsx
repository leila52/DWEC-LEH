import React from 'react';
import "../estilos/Inferior.css";

function Inferior({ servicios }) {
    // Verificamos si hay elementos en el array de servicios
    if (servicios.length === 0) {
      return <p>No hay servicios disponibles para mostrar.</p>;
    }
  
    // Obtenemos el último servicio
    const ultimoServicio = servicios[servicios.length - 1];
  
    return (
      <div className="inferior">
        <h3>{ultimoServicio.nombre}</h3>
        <div className="servicio-card">
          <img src={ultimoServicio.url} alt={ultimoServicio.nombre} width="200" />
          <h4>{ultimoServicio.nombre}</h4>
          <p>{ultimoServicio.descripcion}</p>
          <p>Importe: ${ultimoServicio.importe}</p>
        </div>
      </div>
    );
  }
  
  export default Inferior;