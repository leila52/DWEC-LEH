import React, { useState } from "react";
import servicioProductos from "../../servicios/servicioProductos";
import Swal from "sweetalert2";
//le paso por parametro el modal de cierre , la funcion para actualizar y la de listar
function CrearProductos({ productos, setproductos, onClose }) {
  // Almacenar los errores del formulario
  
  const [errores, setErrores] = useState({});//guarda los errores
  //los {} son para la desestructuración de objetos como servicio

  // Almacenar los valores del formulario
  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    url: "",
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

  //////////////////////////////////////
  // Función de validación
  //////////////////////////////////////
  const validar = () => {
    const nuevosErrores = {};

    // Validación para "nombre"
    if (!form.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio";
    }

    // Validación para "descripcion"
    if (form.descripcion.length === 0 || form.descripcion.length > 100) {
      nuevosErrores.descripcion = "La descripción debe tener entre 0 y 100 caracteres";
    }
    // Validación para "importe" (precio)
    if (!form.precio || isNaN(form.precio) || form.precio <= 0) {
      nuevosErrores.precio = "El precio debe ser un número mayor que 0";
    }
    //Validación de la url, que no este vacío
    if (!form.url.trim()) {
      nuevosErrores.url = "LA URL DEL ES OBLIGATORIO";
    }
    setErrores(nuevosErrores);

    // Retorna true si no hay errores, de lo contrario retorna false
    return Object.keys(nuevosErrores).length === 0;
  };

  // Función para manejar el envío del formulario
  const enviarFormulario = (e) => {
    e.preventDefault();

    // Validar antes de enviar
    if (validar()) {
      console.clear();
      console.log("Formulario Enviado", form);

      const nuevoProducto = {
        nombre: form.nombre,
        descripcion: form.descripcion,
        precio: form.precio,
        url:form.url,
      };

      //Enviar por Axios al Json de BD
      servicioProductos
        .create(nuevoProducto)
        .then((response) => {
          Swal.fire("Servicio creado correctamente");
          // Limpiar el formulario después de agregar
          setForm({
            nombre: "",
            descripcion: "",
            precio:"",
            url:"",
          });

          // Le ponemos el id correcto de la BD
          nuevoProducto.id = response.data.id;

          // Actualizar el estado local de aficiones al final
          setproductos([...productos, nuevoProducto]);

          //Cerramos el modal
          onClose();
        })
        .catch((error) => {
          Swal.fire("ERROR al crear el servicio");
        });
    }
  };

  return (
    <form onSubmit={enviarFormulario}>
      {/* Campo de texto para nombre */}
      <label htmlFor="nombre">Nombre del servicio a Añadir</label>
      <input
        id="nombre"
        type="text"
        name="nombre"
        value={form.nombre}
        onChange={gestionarCambio}
        placeholder="Escribe el nombre del servicio"
      />
      {errores.nombre && <p className="error">{errores.nombre}</p>}

      {/* Campo de texto para descripción */}
      <label htmlFor="descripcion">Descripción del servicio</label>
      <textarea
        id="descripcion"
        name="descripcion"
        value={form.descripcion}
        onChange={gestionarCambio}
        placeholder="Escribe una breve descripción del servicio"
      />
      {errores.descripcion && <p className="error">{errores.descripcion}</p>}

      {/* Campo de texto para (precio) */}
      <br />
      <label htmlFor="precio">Precio del Servicio (€)</label>
      <input
        id="precio"
        type="number"
        name="precio"
        value={form.precio}
        onChange={gestionarCambio}
        placeholder="Escribe el precio del servicio"
      />
      {errores.precio && <p className="error">{errores.precio}</p>}

      {/* Campo de texto para la url */}
      <br />
      <label htmlFor="url">Nombre de la url:</label>
      <input
        type="text"
        id="url"
        name="url"
        value={form.url}
        onChange={gestionarCambio}
        placeholder="Escribe la url de la foto"
      />
      {errores.url && <p className="error">{errores.url}</p>}
      {/* Botón de envío */}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default CrearProductos;
