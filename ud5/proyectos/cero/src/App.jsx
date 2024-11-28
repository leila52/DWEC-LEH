import './App.css'
import Li from './componente/Li'

function App() {
  //javascript se utiliza fuera del return y luego si quieres 
  //poner dentro js dentro del html se utilizan {}(bigotes)
  const maquillaje=[
    {nombre:"colorete",precio:20},
    {nombre:"base",precio:50},
    {nombre:"rimel",precio:10}
  ] 
  const total=maquillaje.length;

  return (
    /* se pone <> ya que solo se puede devolver un elemento */
    <>
      <h1>Laila El Haddad</h1>
      <h2>total de productos: {total}</h2>
      <ul>{
        //utilizamos un map de js
        maquillaje.map((maquillaj,index)=>{
          return <Li nombre={maquillaj.nombre} precio={maquillaj.precio} key={index}/>
          //return <li key={index}>{maquillaj.nombre} producto que vale {maquillaj.precio}$ </li>
        })
        
        }
        
      </ul>
    </>
  )
}

export default App
