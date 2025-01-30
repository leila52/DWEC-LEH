import '../estilos/DetalleProducto.css';
import {buscarProducto} from "../herramientas/buscarProducto"
import { useParams } from 'react-router-dom';

const DetalleProducto = ({informacion}) => {  

  const {nombre} = useParams()

  let producto = buscarProducto(informacion,nombre )

  return (
    <div className="container-detalle-producto">
      {producto !== null ? (
        <div className="producto-info">
          <h1 className="producto-nombre">{producto.nombre}</h1>
          <p className="producto-precio">{producto.precio} Є</p>
          <img
            className="producto-imagen"
            src={producto.url}
            alt={producto.nombre}
          />
        </div>
      ) : (
        <h1 className="error-mensaje">No existe el producto indicado</h1>
      )}
    </div>
  );
  
};

export default DetalleProducto ;
