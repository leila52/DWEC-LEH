import { Link } from 'react-router-dom';
import '../estilos/DetalleCarrito.css';
import { incrementarCantidad ,incrementarCantidadIntroducida} from '../herramientas/buscarProducto';
import FormularioCarrito from './FormularioCarrito';


const DetalleCarrito = ({ productos, setProductos , total, setTotal , informacion}) => {

   let cantidad=0;

  function incrementar(producto){
    // Actualizamos lista de productos
    setProductos(incrementarCantidad(productos, producto.nombre))
    //Actualiamos el total
    setTotal(total + producto.precio);    
  
  }
  function añadirCantidad(producto,cantidad){
    cantidad=Number(cantidad);

    setProductos(incrementarCantidadIntroducida(productos, producto.nombre, cantidad))
    setTotal(total + producto.precio*producto.cantidad); 

  }
  return (
    <div className="container-detalle">
      <ul>
        <h2>Productos Seleccionados</h2>
        {productos.map((producto, index) => {
          return (
            <li key={index} className="producto-item">
              <div className="producto-detalle">
                <span>
                  {producto.cantidad} x {producto.nombre} : {producto.precio}Є
                </span>
                <Link to={`/producto/${producto.nombre}`}>
                  <img src={producto.url} alt={producto.nombre} />
                </Link>
              </div>

              {/* Botones para incrementar/reducir cantidad */}
              <div className="producto-acciones">                
                <button
                  className="btn-incrementar"
                  onClick={() =>
                    incrementar(producto)
                  }
                >
                  +
                </button>
                <button
                  className="btn-incrementar"
                  onClick={() =>añadirCantidad(producto,prompt(Number("¿Cuantos productos quieres añadir?")) )
                   
                  }
                >
                  *
                </button>
              </div>
            </li>
          );
        })}
        <li className="total">Número de Elementos: {productos.length}</li>
      </ul>
      <FormularioCarrito productos={productos} setProductos={setProductos} informacion={informacion}/>
    </div>
  );
};

export default DetalleCarrito;
