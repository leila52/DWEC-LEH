import '../estilos/cuerpo.css';
import { buscarProducto, incrementarCantidad } from '../herramientas/buscarProducto';
import { Link } from 'react-router-dom';


// Componente ListaImagenes
const ListaImagenes = ({ total, setTotal, productos, setProductos, informacion }) => {

  const AnadirProducto = (nombre, precio) => {


    setTotal(parseInt(total) + parseInt(precio));

    let productoAnadir = buscarProducto(informacion, nombre)

    if (buscarProducto(productos, nombre) === null) {

      setProductos([...productos,
      { url: productoAnadir.url, nombre: productoAnadir.nombre, precio: productoAnadir.precio, cantidad: 1 }])

    } else {

      setProductos(incrementarCantidad(productos, nombre))

    }



  };
  // el link que lleva a producto/nombre
  return (
    <div className="container">
      {informacion.map((item, index) => (
        <div key={index}>
          
          <Link to={`/producto/${item.nombre}`}>
            <img src={item.url} alt="imagen" />
            <h3>{item.nombre}</h3>
            <p>Precio: {item.precio} Euros</p>
          </Link>

          <button onClick={() => AnadirProducto(item.nombre, item.precio)}>
            Añadir al carrito
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListaImagenes;
