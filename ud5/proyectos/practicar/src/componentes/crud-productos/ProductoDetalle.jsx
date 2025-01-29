import React from "react";

const ProductoDetalle = ({ producto }) => {
  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>
        <strong>Descripción:</strong> {producto.descripcion}
      </p>
      <p>
        <strong>Precio:</strong> {producto.precio}€
      </p>
    </div>
  );
};

export default ProductoDetalle;

