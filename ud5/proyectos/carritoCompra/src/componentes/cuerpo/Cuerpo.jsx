import { useState } from "react";
import Menu from "../menu/Menu.jsx";
import "./Cuerpo.css";

import cup2 from './imagenes/cup2.jpg';
import cup3 from './imagenes/cup3.jpg';
import cup4 from './imagenes/cup4.jpg';
import cup5 from './imagenes/cup5.jpg';


// Array de productos
const productos = [
  {
    id: 1,
    imagen: cup2,
    descripcion: "the devil",
    precio: 7.49,
  },
  {
    id: 2,
    imagen: cup3,
    descripcion: "cuphead",
    precio: 8.99,
  },
  {
    id: 3,
    imagen: cup4,
    descripcion: "chuphead y su hermano",
    precio: 25.75,
  },
  {
    id: 4,
    imagen: cup5,
    descripcion: "señor dados",
    precio: 15.75,
  },
];
// Componente para cada tarjeta
const Cuerp = ({ imagen, descripcion, precio, onAddToCart }) => {
  return (
    <div className="tarjetas-contenedor">
      <div className="tarjeta">
        <div className="tarjeta-titulo">
          <h4>{descripcion}</h4>
        </div>
        <img src={imagen} alt={descripcion} className="tarjeta-imagen" />
        <div className="tarjeta-contenido">
          <p className="tarjeta-precio">Precio: {precio.toFixed(2)}€</p>
          <button onClick={() => onAddToCart(descripcion, precio)}>
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

// Componente principal
const Cuerpo = () => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  const AñadirProducto = (descripcion, precio) => {
    setCarrito([...carrito, { descripcion, precio }]);
    setTotal(total + precio);
  };

  return (
    <>
      <Menu itemCount={carrito.length} totalPrice={total} />
      <div className="lista-carrito">
        <h2>Lista de la compra</h2>
        <ul>
          {carrito.map((producto, index) => (
            <li key={index}>
              {producto.descripcion} - {producto.precio.toFixed(2)}€
            </li>
          ))}
        </ul>
        <h2>Total: {total.toFixed(2)}€</h2>
      </div>
      <div className="tarjetas-container">
        {productos.map((producto) => (
          <Cuerp
            key={producto.id}
            imagen={producto.imagen}
            descripcion={producto.descripcion}
            precio={producto.precio}
            onAddToCart={AñadirProducto}
          />
        ))}
      </div>
    </>
  );
};

export default Cuerpo;