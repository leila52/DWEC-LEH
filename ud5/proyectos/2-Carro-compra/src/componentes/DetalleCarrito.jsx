import { Link } from "react-router-dom";
import "../estilos/detalle.css";
import { buscarProducto ,borrarSiHayMasDeUnProducto ,añadir} from "../herramientas/buscarProducto";

const DetalleCarrito = ({setProductosJson , informacion, productosJson, total, setTotal}) => { 
  
  const reducirCantidad = (nombreProducto) => {
    const producto = productosJson.find((p) => p.nombre === nombreProducto);

    if (producto) {
      // Buscar la información completa del producto
      const productoInformacion = buscarProducto(nombreProducto, informacion);
      // restar el precio del total
      setTotal((prevTotal) => prevTotal - productoInformacion.precio);
      const nuevosProductos = borrarSiHayMasDeUnProducto(productosJson, nombreProducto);
      //se actualiza el array de los tres productos de productos Json
      setProductosJson(nuevosProductos);
    }
   
  };
  const añadirCantidad=(nombreProducto) =>{
    const productoInformacion = buscarProducto(nombreProducto, informacion);
    if (productoInformacion) {
      // sumar el precio al total
      setTotal((precTotal) => precTotal + productoInformacion.precio);
      
      // actualizar productosJson con la nueva cantidad del producto
      const nuevosProductos = añadir(productosJson, nombreProducto);
      setProductosJson(nuevosProductos);
    }
  }

    return (
      <div className="container-detalle-carrito">
        <ul>
          {
             productosJson.map((producto,index) =>{
            
              let productoInformacion = buscarProducto(producto.nombre,informacion)
              return <li key={index}>{productoInformacion.nombre} ---  {producto.cantidad}   --- {productoInformacion.precio}€
              <Link to={`/detalle-producto/${productoInformacion.nombre}`}>
              <img src={productoInformacion.url}/>
              </Link>
              
              <button onClick={() => añadirCantidad(producto.nombre)}>
                Añadir
              </button>
              <button onClick={() => reducirCantidad(producto.nombre)}>
                Reducir
              </button>
              </li>
            }
            )
          }
        </ul>
    
      </div>
    );
  };
  
export default DetalleCarrito;