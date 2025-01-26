import React from 'react';

const ProductoConsultar = ({ producto }) => {
  
  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p><strong>Descripción:</strong> {producto.descripcion}</p>
      <p><strong>precio:</strong> {producto.precio}</p>
    </div>
  );
};

export default ProductoConsultar;
