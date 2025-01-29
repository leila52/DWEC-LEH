import { Link } from "react-router-dom";
import "../estilos/detalleCarrito.css";
import { buscarProducto  } from "../herramientas/buscarProducto";

const DetalleCarrito = ({productos , informacion, productosJson}) => { 
  
  return (
    <div className="container-detalle-carrito">
      <ul>
        {
          productosJson.map((producto,index) =>{

            let productoInformacion = buscarProducto(producto.nombre,informacion)


            return <li key={index}>{productoInformacion.nombre} - {productoInformacion.precio} x {producto.cantidad}
            <Link to={`/detalle-producto/${productoInformacion.nombre}`}>
            <img src={productoInformacion.url}/>
            </Link>
            </li>
          }
          )
        }
      </ul>
  
    </div>
  );
};

export default DetalleCarrito;
