import "../estilos/ProductoEditar.css"
import React, { useState } from 'react';
import ServicioInformacion from "../servicios/axios/ServicioInformacion";

const ProductoEditar = ({onClose,producto,informacion,setInformacion}) => {
  

    const [errores, setErrores] = useState({});

    const [form, setForm] = useState({
        nombre: producto.nombre,
        precio: producto.precio,
        descripcion: producto.descripcion || "Sin descripcion",
    
    });

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

    const validar = () => {
      const nuevosErrores = {};
  
      if (!isNaN(form.nombre) || !isNaN(form.descripcion)) {
        nuevosErrores.textos = 'El nombre y descripcion tienen que ser texto';
      }
  
      setErrores(nuevosErrores);
      return Object.keys(nuevosErrores).length === 0;
    };

   // Función para manejar el envío del formulario
    const enviarFormulario = (e) => {
      e.preventDefault(); // Evita que el formulario se envíe automáticamente
    
      // Validar el formulario antes de enviar
      if (validar()) {
        
        ServicioInformacion.actualizarElemento(producto.id,form.nombre,form.precio,form.descripcion)
        .then((response)=>{
         

            console.log(response.data)

            //Cambia solo el item json que tenga el mismo id
            setInformacion(prevInformacion => 
              prevInformacion.map(item => 
                  item.id === response.data.id ? response.data : item
              )
              );

              Swal.fire({
                icon: "success",
                title: "Editado con exito"
              });

              onClose()
            
            

        }).catch((error)=>{
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ha habido un error en la edicion"
          });
          
          console.error(error); // Muestra el error en la consola
      })
        
       

       
      } else {
        Swal.fire({
          text: "Por favor, corrija los errores en el formulario antes de enviar.",
          icon: "error"
        });
     
      }
    };

    

 

    return (
     <>
        <div> 
        <h2>Editar Producto</h2>
        <form id="editarProductoForm" onSubmit={enviarFormulario}>
        <label for="id">ID:</label>
        <input type="text" id="id" name="id" value={producto.id} readOnly></input>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" value={form.nombre} onChange={gestionarCambio} ></input>
        
        <label for="precio">Precio:</label>
        <input type="number" id="precio" name="precio" value={form.precio} onChange={gestionarCambio}></input>
        
        <label for="descripcion">Descripción:</label>
        <textarea id="descripcion" name="descripcion" value={form.descripcion} onChange={gestionarCambio}> </textarea>
        
        {errores && (<h2>{errores.textos}</h2>)}
        <button type="submit">Guardar Cambios</button>
    

        </form>
        </div>
  
     </>
    );
  };
  
  export default ProductoEditar;
  