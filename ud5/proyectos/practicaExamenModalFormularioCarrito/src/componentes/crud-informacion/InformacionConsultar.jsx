import React from 'react';

const InformacionConsultar = ({ info }) => {
  
  return (
    <div>
      <h2>{info.nombre}</h2>
      <p><strong>precio:</strong> {info.precio}</p>
      <img src={info.url} alt={info.nombre} />
    </div>
  );
};

export default InformacionConsultar;