import { Link } from 'react-router-dom';
import '../estilos/DetalleCarrito.css';

const DetalleCarrito = ({productos, informacion}) => {
  
  function buscarProducto(nombre) {
    return informacion.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase()) || null;
  }


  return (
    <div className="container-detalle">
      <ul> 
        <h2> Productos Seleccionados  </h2>
      {
        productos.map((producto , index)=>{
          let productoInfo = buscarProducto(producto)         
          return (
            
            <li key={index}>
            
              {producto} : {productoInfo.precio}Є
              <Link to={`/producto/${productoInfo.nombre}`}>
               <img src={productoInfo.url} alt={producto} />
              </Link>
              </li>
          )
        })
      }
      <li className='total'>Numero Elementos : {productos.length}</li>
      </ul>
    </div>
  );
};

export default DetalleCarrito ;
