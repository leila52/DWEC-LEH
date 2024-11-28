import "./Cuerpo.css";

const Cuerpo = ({ imagen, descripcion, precio }) => {
  return (
    <div className="tarjeta">
      <div className="tarjeta-titulo">
        <h4>{descripcion}</h4>
      </div>
      <img src={imagen} alt={descripcion} className="tarjeta-imagen" />
      <div className="tarjeta-contenido">
        <p className="tarjeta-precio">Precio: {precio.toFixed(2)}€</p>
        <button className="tarjeta-boton">Añadir</button>
      </div>
    </div>
  );
};

export default Cuerpo;