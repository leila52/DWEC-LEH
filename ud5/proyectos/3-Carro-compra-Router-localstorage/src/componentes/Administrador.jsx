import React, { useState } from 'react';
import '../estilos/Administrador.css';
import ServicioInformacion from '../servicios/axios/ServicioInformacion';
import ProductoConsultar from './ProductoConsultar';
import Modal from './Modal';
import ProductoEditar from './ProductoEditar';

function Administrador() {
  // Almacenar los errores del Formulario
  const [errores, setErrores] = useState({});
  const [informacion, setInformacion] = useState([])

  // Amacenar los valores del formulario(En todo momento!!!) 
  const [form, setForm] = useState({
    nombre: '',
    precioMenor: "",
    precioMayor: "",

  });

  //ALMACENAMOS EL PROUCTO PARA CONSULTAR DETALLE

  const[productoSeleccionado,setProductoSeleccionado] = useState(null)
  const[productoEditado,setProductoEditado] = useState(null)

  //MODAL PARA CONTROLAR SI ESTA ABIERTO O CERRADA LA PESTAÑA DE CONSULTA
  const [modal, setModal] = useState({
    crear: false,
    consultar: false,
    editar: false
  });

  const gestionarModal = (tipo,estado,producto=null)=>{
    setModal({...modal,[tipo]:estado});
    if(tipo==="consultar")
      setProductoSeleccionado(producto)
  }

  //////////////////////////////////////
  // Función para gestionar los cambios en los campos del formulario
  //////////////////////////////////////
  const gestionarCambio = (e) => {

    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });


  };
  //////////////////////////////////////
  // Función de validación
  //////////////////////////////////////
  const validar = () => {
    const nuevosErrores = {};

    // Validar que el nombre no esté vacío si se ingresa
    if (form.nombre.trim() && !/^[a-zA-Z\s]+$/.test(form.nombre)) {
      nuevosErrores.nombre = 'El nombre solo puede contener letras y espacios.';
    }

    // Validar que los precios sean números válidos

    if(form.precioMayor.trim() && isNaN(form.precioMayor)){
      nuevosErrores.precioMayor = "El precio mayor tiene que ser un valor numerico"
    }

    if(form.precioMenor.trim() && isNaN(form.precioMenor)){
      nuevosErrores.precioMenor = "El precio menor tiene que ser un valor numerico"
    }
    
   
    // Validar que el precio mínimo no sea negativo

    if(form.precioMenor.trim() &&  Number(form.precioMenor)<0){
      nuevosErrores.precioMenor = "El precio menor tiene que ser positivo"
    }
   
    // Validar que el precio mínimo no sea mayor que el precio máximo

    console.log(form)
    if(form.precioMenor.trim() && !isNaN(form.precioMenor) && form.precioMayor.trim() && !isNaN(form.precioMayor)){
      
      if(Number(form.precioMenor)>Number(form.precioMayor)){
       
      nuevosErrores.precioMenor = "El precio minimo no puede ser mayor al precio maximo"
      }
      
    }
   

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  // Función para manejar el envío del formulario
  const enviarFormulario = (e) => {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  
    // Validar el formulario antes de enviar
    if (validar()) {
      // Si el campo "nombre" está lleno, buscar por nombre
      if (form.nombre.trim() !== "") {
        ServicioInformacion.getPorNombre(form.nombre)
          .then((response) => {
            setInformacion(response.data); // Actualiza el estado con los resultados
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "No se ha podido descargar la información..."
            });
            
            console.error(error); // Muestra el error en la consola
          });
      }
      // Si los campos de precio están llenos, buscar por precio
      else if (form.precioMenor.trim() !== "" || form.precioMayor.trim() !== "") {
        ServicioInformacion.getPorPrecio(form.precioMenor, form.precioMayor)
          .then((response) => {
            setInformacion(response.data); // Actualiza el estado con los resultados
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "No se ha podido descargar la información..."
            });
          
            console.error(error); // Muestra el error en la consola
          });
      }
      // Si no se llenó ningún campo, mostrar un mensaje
      else {
        Swal.fire({
          text: "Por favor, complete al menos un campo para buscar.",
          icon: "question"
        });
      
      }
    } else {
      Swal.fire({
        text: "Por favor, corrija los errores en el formulario antes de enviar.",
        icon: "error"
      });
   
    }
  };

  const consultar = (item)=>{
    setProductoSeleccionado(item)
    setModal(prevState => ({
      ...prevState,
      consultar: true
  }));
  }

  const borrar = (id)=>{
    ServicioInformacion.borrarElemento(id)
    .then((response)=>{
      setInformacion(informacion.filter((elemento)=>elemento.id!=id))
    })
    .catch((error)=>{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se ha podido descargar la información..."
      });
    
      console.error(error); // Muestra el error en la consola
    });
  }

  const editar = (item)=>{
    
    setProductoEditado(item)
    setModal(prevState => ({
      ...prevState,
      editar: true
  }));
  }

  const limpiarFormulario = ()=>{
    
   setForm({
    nombre: '',
    precioMenor: "",
    precioMayor: "",

  })

  setErrores({})

  setInformacion([])

  
  }
  

  return (
    <>
      <div className="filters">
        <form onSubmit={enviarFormulario}>
          {/* Campo de texto para nombre */}
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={gestionarCambio}
            placeholder="Escribe tu nombre"
          />
          {errores.nombre && <p className="error">{errores.nombre}</p>}

          {/* Campo de texto para apellidos */}
          <label htmlFor="apellidos">Precio Mínomo</label>
          <input
            id="precioMenor"
            type="text"
            name="precioMenor"
            value={form.precioMenor}
            onChange={gestionarCambio}
            placeholder="importe Mínimo"
          />
          {errores.precioMenor && <p className="error">{errores.precioMenor }</p>}

          <label htmlFor="apellidos">Precio Máximo</label>
          <input
            id="precioMayor"
            type="text"
            name="precioMayor"
            value={form.precioMayor}
            onChange={gestionarCambio}
            placeholder="importe Máximo"
          />
         {errores.precioMayor && <p className="error">{errores.precioMayor}</p>}

          <button type="submit">Buscar</button>
          <button type="button" onClick={()=>limpiarFormulario()}>Limpiar</button>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio (€)</th>
            <th>URL</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody id="productTable">

          {informacion.map((item, index) => (
            <tr key={index}>

              <td>{item.id}</td>
              <td>{item.nombre}</td>
              <td>{item.precio}</td>
              <td><a href="#">Ver Producto</a></td>
              <td className="actions">
                <button className="edit" onClick={()=>editar(item)}>Editar</button>
                <button className="delete" onClick={()=>borrar(item.id)}>Eliminar</button>
                <button className="view" onClick={()=>consultar(item)}>Consultar</button>
              </td>
            </tr>


          ))}


        </tbody>
      </table>

        <Modal isOpen={modal.consultar} onClose={()=>gestionarModal("consultar",false)}>
      {productoSeleccionado && (<ProductoConsultar producto={productoSeleccionado}></ProductoConsultar>)}
      </Modal>

      <Modal isOpen={modal.editar} onClose={()=>gestionarModal("editar",false)}>
      {productoEditado && (<ProductoEditar onClose={()=>gestionarModal("editar",false)} producto={productoEditado} informacion={informacion} setInformacion={setInformacion}></ProductoEditar>)}
      </Modal>
    </>

  );
}

export default Administrador;
