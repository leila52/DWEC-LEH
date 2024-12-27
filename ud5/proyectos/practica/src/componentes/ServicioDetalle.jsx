import React from 'react';

const AficionDetalle = ({ servicio}) => {
  return (
    <div>
      <h2>{servicio.nombre}</h2>
      <p><strong>Descripción:</strong> {servicio.descripcion}</p>
    </div>
  );
};

export default AficionDetalle;