import '../estilos/cuerpo.css';

// Datos de imágenes
const imageUrls = [ 
  { url: "./imagenes/manzana.jpg", nombre: "Manzana", precio: 5 }, 
  { url: "./imagenes/pera.jpg", nombre: "Pera", precio: 7 }, 
  { url: "./imagenes/platano.jpg", nombre: "Platano", precio: 4 } 
];

// Componente ListaImagenes
const ListaImagenes = ({ total, setTotal , productos, setProductos }) => {
  
  const AnadirProducto = (nombre, precio) => {
    //alert(`${nombre} añadido al carrito, con precio ${precio}`);
    
    setTotal(total + precio); // Actualiza el total

    // setProductos((prevArray) => {    

    //   return [...prevArray, nombre]
    // }) 
    
    setProductos([...productos, nombre]);
        
    //console.log(productos)
   
  };

  return (
    <div className="container">
      {imageUrls.map((item, index) => (
        <div key={index}>
          <img src={item.url} alt="imagen" />
          <h3>{item.nombre}</h3>
          <p>Precio: {item.precio} Euros</p>
          <button onClick={() => AnadirProducto(item.nombre, item.precio)}>
            Añadir al carrito
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListaImagenes;
