import './App.css'
import Menu from './componentes/menu/Menu';
import Cuerpo from './componentes/cuerpo/Cuerpo.jsx';

// Array de productos
const productos = [
  {
    id: 1,
    imagen: require('./componentes/cuerpo/imagenes/cup2.jpg'), // Ajuste de ruta
    descripcion: "cuphead1",
    precio: 15.49,
  },
  {
    id: 2,
    imagen: require('./componentes/cuerpo/imagenes/cup3.jpg'), // Ajuste de ruta
    descripcion: "cuphead2",
    precio: 10.99,
  },
  {
    id: 3,
    imagen: require('./componentes/cuerpo/imagenes/cup4.jpg'), // Ajuste de ruta
    descripcion: "cuphead3",
    precio: 8.75,
  },
];

const App = () => {
  return (
    <>
      <Menu />
      <div className="tarjetas-container">
        {
          // Renderizar las tarjetas desde el array
          productos.map((producto) => {
            return (
              <Cuerpo
                key={producto.id}
                imagen={producto.imagen}
                descripcion={producto.descripcion}
                precio={producto.precio}
              />
            );
          })
        }
      </div>
    </>
  );
};

export default App;
