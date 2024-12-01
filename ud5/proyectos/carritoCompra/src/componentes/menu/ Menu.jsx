import './Menu.css';

function Menu({ totalElementos, total }) {
  return (
    <>
      <header>
        <img src="https://i.pinimg.com/736x/af/e7/19/afe719ec610b907536e4ec62976697a2.jpg" alt="Logotipo" />
        <nav>
          <a href="#contador">Carrito: {totalElementos}</a>
          <a href="#coste">
            Coste: {total ? total.toFixed(2) : "0.00"}€
          </a>
          <a href="#contacto">Finalizar Compra</a>
        </nav>
      </header>
    </>
  );
}

export default Menu;