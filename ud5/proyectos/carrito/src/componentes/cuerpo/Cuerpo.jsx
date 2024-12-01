import "./cuerpo.css";
import { useState } from "react";
const Cuerpo = () => {

  //con usestate se carga automáticamente la página cuando cambia el valor de la variable
  //no hace falta cambiarlo nosotros como se hacia con el innerHTML en javascript
  const [productosAnadidos, setProductosAnadidos] = useState([]);
  const [total, setTotal] = useState(0);

  // Función para añadir productos al carrito
  const AnadirProducto = (nombre, precio) => {
    setTotal((suma) => suma + parseInt(precio)); // Actualiza el total
    setProductosAnadidos((ProductosAdd) => [
      ...ProductosAdd,
      { nombre, precio },
    ]); // Añade el producto al carrito
  };
  //hay que ponerle classname porque sino choca con react
  //da error en la consola

  const productos = [
    //esto es un set de arrays de productos
    {
      nombre: "Manzana",
      precio: "2",
      img: "/manzana.jpeg",
      descripcion: "Deliciosa manzana fresca",
    },
    {
      nombre: "Plátano",
      precio: "3",
      img: "/platano.jpg",
      descripcion: "Plátano maduro y sabroso",
    },
    {
      nombre: "Pera",
      precio: "1",
      img: "/pera.webp",
      descripcion: "Pera natural, jugosa y perfecta",
    },
  ];

  return (
    <>
      <div className="carrito">
      <h1>BIENVENIDO AL CARRITO</h1>
      <p>
        {productosAnadidos.map((producto, index) => (
          <span key={index}>
            {producto.nombre} - {producto.precio}€<br />
          </span>
        ))}
      </p>
      <h3>Total: {total}€</h3>
      </div>

      <div className="card-container">
        {productos.map((producto, index) => (
          <div className="card" key={index}>
            <img src={producto.img} alt={producto.nombre} />
            <h3>
              {producto.nombre} <span>{producto.precio}€</span>
            </h3>
            <p>{producto.descripcion}</p>
            <button
              className="boton"
              onClick={() => AnadirProducto(producto.nombre, producto.precio)}
            >
              Añadir al carrito
            </button>
          </div>
        ))}
      </div>
     
    </>
  );
};

export default Cuerpo;
