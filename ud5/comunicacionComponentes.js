//luego por ejemplo el menu va incorporando evariable del cuerpo.jsx
//habria que añadir el menu en APP.JSX para asi poder importar los datos necesarios que 
//serian las variable que quieres mostarr
import Menu from './componentes/menu/ Menu';
import Cuerpo from './componentes/cuerpo/Cuerpo';



const App = () => {
    const[total,setTotal]=useState(0);
  return (
    <>
      <Menu variable={total} variableSet={setTotal}/>
      <Cuerpo />
    </>
  );
};

//export default App;


//en menu pasamos por parametro la variable
//para asi poder trabajar con ellos
//a su vez si te fijas  hay que poner entre corchete las variables de js {}

import './Menu.css';
function Menu({ total,setTotal }) {
    

    return (
      <>

        <header>
            <a href="#contador">variable: {total}</a>
            <button
              className="boton"
              onClick={() => AnadirProducto(variables)}
            ></button>

        </header>
      </>
    );
  }
  
  export default Menu;
