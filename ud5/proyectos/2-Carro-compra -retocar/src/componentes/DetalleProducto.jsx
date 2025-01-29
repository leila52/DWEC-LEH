import { useParams } from "react-router-dom";
import "../estilos/detalleProducto.css";
import { buscarProducto  } from "../herramientas/buscarProducto";

const DetalleProducto = ({informacion}) => { 

  const {nombre} = useParams()

  console.log(useParams())

  let productoInformacion = buscarProducto(nombre,informacion)


  return (
    <div className="container-detale-producto">
      <ul>
        <li> Nombre {productoInformacion.nombre} </li>
        <li>Precio {productoInformacion.precio}</li>
        <li><img src={productoInformacion.url}/></li>        
      </ul>
  
    </div>
  );
};

export default DetalleProducto;
