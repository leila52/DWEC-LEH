import '../estilos/cuerpo.css';
import { ToastContainer, toast } from 'react-toastify';

// Componente ListaImagenes
const ListaImagenes = ({ total, setTotal , productos, setProductos , informacion}) => {
  
  const AnadirProducto = (nombre, precio) => {    
    
    setTotal(total + precio);

    toast(`uso de sotrage voy a meter ${nombre} ` );
    setProductos([...productos, nombre]);   
    toast(`uso de sotrage Precio actual: ${total} ` );
   
  };

  return (
    <div className="container">
      {informacion.map((item, index) => (
        <div key={index}>
          <img src={item.url} alt="imagen" />
          <h3>{item.nombre}</h3>
          <p>Precio: {item.precio} Euros</p>
          <button onClick={() => AnadirProducto(item.nombre, item.precio)}>
            Añadir al carrito
          </button>
          <ToastContainer/>
        </div>
      ))}
    </div>
  );
};

export default ListaImagenes;
