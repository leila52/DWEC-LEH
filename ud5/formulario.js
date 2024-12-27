import React, { useState } from 'react';
import '../estilos/FormularioBase.css';

function FormularioBase() {
  // Almacenar los errores del Formulario
  const [errores, setErrores] = useState({});
  
  // Amacenar los valores del formulario(En todo momento!!!) 
  const [form, setForm] = useState({
    nombre: ''
  });

  //////////////////////////////////////
  // Función para gestionar los cambios en los campos del formulario
  //////////////////////////////////////
  const gestionarCambio = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      //es un  if
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  //////////////////////////////////////
  // Función de validación
  //////////////////////////////////////
  const validar = () => {
    const nuevosErrores = {};

    // Validación para "nombre"
    if (!form.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio';
    }

    // Validación para "descripcion"
    if (form.descripcion && (form.descripcion.length < 10 || form.descripcion.length > 100)) {
      nuevosErrores.descripcion = 'La descripción debe tener entre 10 y 100 caracteres';
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
      console.log('Formulario Enviado', form);
    }
  };



  return (
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

      {/* Checkbox para mayor de edad */}
      <div>
        <input
          id="mayorEdad"
          type="checkbox"
          name="mayorEdad"
          checked={form.mayorEdad}
          onChange={gestionarCambio}
        />
        <label htmlFor="mayorEdad">¿Eres mayor de edad?</label>
      </div>

      {/* Botón de envío */}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioBase;
