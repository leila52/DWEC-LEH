import React from 'react';
import '../estilos/DetalleCarrito.css'

const DetalleCarrito = ({ productoM, informacion, skinCare }) => {
  const buscarProducto = (nombre) => {
    let producto = informacion.find(item => item.nombre.toLowerCase() === nombre.toLowerCase());
    if (!producto) {
      producto = skinCare.find(item => item.nombre.toLowerCase() === nombre.toLowerCase());
    }
    return producto;
  };

  return (
    <div className="container-detalle">
      <ul> 
        <h2>Productos Seleccionados</h2>
        {
          productoM.map((item, index) => {
            const productoInfo = buscarProducto(item.nombre);

            if (!productoInfo) {
              return <li key={index}>Producto no encontrado: {item.nombre}</li>;
            }

            return (
              <li key={index}>
                {productoInfo.nombre} : {productoInfo.precio}Є x {item.cantidad}
                <img src={productoInfo.url} alt={productoInfo.nombre} />
              </li>
            );
          })
        }
        <li className='total'>Número de Elementos: {productoM.reduce((acc, item) => acc + item.cantidad, 0)}</li>
      </ul>
    </div>
  );
};

export default DetalleCarrito;
