import '../estilos/cuerpo.css';

// Datos de imágenes
const imageUrls = [
  { url: "./imagenes/GoW.jpg", nombre: "God of War", precio: 40 },
  { url: "./imagenes/Cyberpunk.jpg", nombre: "Cyberpunk 2077", precio: 30 },
  { url: "./imagenes/Horizon.jpg", nombre: "Horizon", precio: 20 },
  { url: "./imagenes/platano.jpg", nombre: "Banana", precio: 0.35 },
  { url: "./imagenes/Sekiro.jpg", nombre: "Sekiro", precio: 50 },
];

// Componente ListaImagenes
const Cuerpo = ({ total, setTotal, productos, setProductos }) => {

  // const [total, setTotal] = useState(0); 

  const AnadirProducto = (nombre, precio) => {
  setTotal(total + precio); // Actualiza el total
  setProductos([...productos, nombre]);
  };

  return (
    
    <div className="container">
      {
        imageUrls.map((item, index) => {
          return (
            <div className="rojo" key={index}>
              <img src={item.url} alt="imagen" />
              <h3>{item.nombre}</h3>
              <p>{item.precio.toFixed(2)}€</p>
              <button onClick={() => AnadirProducto(item.nombre, item.precio)}>
                Añadir al carrito
              </button>
            </div>)
        })
      }
    </div>
  );
};

export default Cuerpo;
