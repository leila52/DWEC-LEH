import { Link } from "react-router-dom";
import "../estilos/detalle.css";
import {buscarProducto} from "../herramientas/buscarProducto";

// Componente MenuSuperior
const Detalle= ({productos, informacion}) => {
    //cARRITO  sale los productos
    //detalle cada uno de los productos y el total de elementos
    console.log(productos,informacion);
    

  return (
    <div className="detalle-contenedor">
      <ul>
    {
      productos.map((producto,index)=>{
        let productoInformacion=buscarProducto(producto,informacion);
        return<li key={index}>
          <span>{productoInformacion.nombre}</span> 
          <span className="precio">${productoInformacion.precio}</span>
            <Link to={`/detalle-producto/${productoInformacion.nombre}`}><img src={productoInformacion.url}  /> </Link>
            </li>

      }
    )
    }

      </ul>
    </div>
  );
};

export default Detalle;
