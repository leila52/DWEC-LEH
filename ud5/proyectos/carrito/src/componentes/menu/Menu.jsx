import "./menu.css";

const Menu = ({precio, index}) => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <a href="#" className="logo">
            <img src="/carrito.png" alt="" />
          </a>
          <a>
            Coste Total:
            <span key={index}><b>{precio}€</b>
            </span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Menu;
