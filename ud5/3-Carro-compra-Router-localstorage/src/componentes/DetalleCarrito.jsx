import { Link } from 'react-router-dom';
import '../estilos/DetalleCarrito.css';
import { incrementarCantidad  } from '../herramientas/buscarProducto';



const DetalleCarrito = ({ productos, setProductos , total, setTotal}) => {

  function incrementarMasivo(producto){
      
      let cantidad = parseInt(prompt("¿Cuantos productos quieres añadir?"))

      if(cantidad + producto.cantidad > 10 ||cantidad + producto.cantidad <= 0 ){
        alert("La cantidad es incorrecta")
      }else if (isNaN(cantidad)){
        alert("Has seleccionado cancelar")
      }else{
        setProductos(incrementarCantidad(productos, producto.nombre,cantidad))
        setTotal(parseInt(total) + (producto.precio*cantidad));  
      }
      


  }
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
                  onClick={() =>
                   incrementarMasivo(producto)
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
