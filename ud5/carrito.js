//tiene que haber dos componentes uno de menu y otro de cuerpo 
//en main.jsx o en APP.jsx se mencionara a los dos componentes
import Cuerpo from './componentes/cuerpo/Cuerpo.jsx'
import Menu from './componentes/menu/Menu.jsx'
createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Menu/>
      <Cuerpo/>
     
    </StrictMode>
)
//despues en el componente del cuerpo puedes mezclar tanto html como js 
// pero siempre lo quee hara sera una funcion y el html que devuelas tienes que ponerlo dentro de una etiqueta <> </> 
//a su vez luego lo exportas
import { useState } from "react";
import Menu from "../menu/ Menu";
import "./Cuerpo.css";
const Cuerpo = () => {
    //con usestate se carga automáticamente la página cuando cambia el valor de la variable
    //no hace falta cambiarlo nosotros como se hacia con el innerHTML en javascript
    const [valor, setvalor] = useState("valor inicial");
    // Función para añadir productos al carrito
    const AnadirProducto = (valores) => {
      setTotal((suma) => suma + parseInt(valores)); // Actualiza el total
      setProductosAnadidos((ProductosAdd) => [
        ...ProductosAdd,
        { },//aqui ira lo que quieres mostar
      ]); // Añade el producto al carrito
    };
  
    return (
        //aqui ira el codigo html o lo que quieras mostar
      <>
       <button
              className="boton"
              onClick={() => AnadirProducto(producto.nombre, producto.precio)}
            ></button>
      </>
      //aqui poer ejemplo si quieres que se añada el producto  cada vez que pulsa un boton
      
    );
  };
  
  export default Cuerpo;

 