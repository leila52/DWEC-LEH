import { useParams } from "react-router-dom";
import "../estilos/detalleProducto.css";
import {buscarProducto} from "../herramientas/buscarProducto";

// Componente MenuSuperior
const DetalleProducto= ({informacion}) => {
    //cARRITO  sale los productos
    //detalle cada uno de los productos y el total de elementos
    console.log(informacion);
    //ruta del parametro
    let {nombre}=useParams();
    let infoProducto=buscarProducto(nombre,informacion);

    

  return (
    <div className="detalle-contenedor-Producto">
      <ul>
        <li>{infoProducto.nombre}</li>
        <li>{infoProducto.precio}</li>
        <li><img src={infoProducto.url} alt={infoProducto.nombre} /></li>
      </ul>
    </div>
  );
};

export default DetalleProducto;
