import '../estilos/DetalleProducto.css';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ServicioInformacion from '../servicios/axios/ServicioInformacion';

const DetalleProducto = ({informacion}) => {  

  const {id} = useParams()


  const [producto,setProducto] = useState([])

  useEffect(() => {
    ServicioInformacion.get(id)
      .then((response) => {
        setProducto(response.data);
      })
      .catch((error) => {
        
       alert("No se ha podido consultar el producto"+id)
      });
    }, []);

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
