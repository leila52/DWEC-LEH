import '../estilos/inferior.css'

const Inferior= ({productos}) =>{
  if (productos.length === 0){
    return <p>NO se han encontrado servicios</p>

  }
  // Si hay productos, obtenemos el último producto creado y es el que se muestra 
  const ultimoProducto =productos[productos.length - 1];

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div>
            {ultimoProducto ? (
              <div>
                <p><strong>Producto:</strong> {ultimoProducto.nombre}</p>
                <p><strong>Descripción:</strong> {ultimoProducto.descripcion}</p>
                <p><strong>Precio:</strong> {ultimoProducto.precio} €</p>
                <img src={ultimoProducto.url} alt={ultimoProducto.nombre}></img>
              </div>
            ) : (
              <p>No hay servicios disponibles.</p>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Inferior
