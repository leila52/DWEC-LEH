import { useState } from 'react'
//hace la funcion de useSatet pero el creador quiso crear uno propio en vez de la te da react

const useFormulario = (inicial) => {
  const [formulario, setFormulario] = useState(inicial)
  const [errores, setErrores] = useState({});
  
  const handleChange = (e) => {
      setFormulario({
        ...formulario,
        [e.target.name]: e.target.value
      })
   
  }
  const reset = () => {
    setFormulario(inicial)
    setErrores({});
  }
  const validar = () => {
    const nuevosErrores = {};

    // Validación para "nombre"
    if (!formulario.name.trim()) {
      nuevosErrores.name = 'El nombre es obligatorio';
    }
    if (!formulario.lastname.trim()) {
      nuevosErrores.lastname = 'El apellido es obligatorio';
    }
    if (!formulario.email.trim()) {
      nuevosErrores.email = 'El email es obligatorio';
    }
    setErrores(nuevosErrores);

    // Retorna true si no hay errores, de lo contrario retorna false
    return Object.keys(nuevosErrores).length === 0;
  };

  return [formulario, handleChange, reset, validar, errores];
}

export default useFormulario
