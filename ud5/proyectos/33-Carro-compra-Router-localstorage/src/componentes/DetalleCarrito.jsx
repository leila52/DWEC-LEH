import { Link } from 'react-router-dom';
import '../estilos/DetalleCarrito.css';
import { reducirCantidad , incrementarCantidad } from '../herramientas/buscarProducto';



const DetalleCarrito = ({ productos, setProductos , total, setTotal}) => {

   
  function incrementar(producto){
    // Actualizamos lista de productos
    setProductos(incrementarCantidad(productos, producto.nombre))
    //Actualiamos el total
    setTotal(total + producto.precio);    
  
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
                <Link to={`/producto/${producto.id}`}>
                  <img src={producto.url} alt={producto.nombre} />
                  {console.log(producto)}
                </Link>
              </div>

              {/* Botones para incrementar/reducir cantidad */}
              <div className="producto-acciones">
                <button
                  className="btn-reducir"
                  onClick={() => alert("Debes implementarme, soy una parte de la prueba")}
                >
                  -
                </button>
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
                  onClick={() =>
                    prompt("¿Cuantos productos quieres añadir?")
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
    </div>
  );
};

export default DetalleCarrito;
