import Input from './Input'
import Button from './Button'
import useFormulario from '../hooks/useFormulario'

const UserForm = ({ submit }) => {
  
  const [formulario, handleChange, reset , validar, errores] = useFormulario({
    name: '',
    email: '',
    lastname: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      submit(formulario);
      console.log('Formulario correcto:', formulario);
      reset();
    }
    else {
      console.log('Errores en el formulario:', errores);
    }

  }
  

  return (
          <form onSubmit={handleSubmit}>
            <Input
              label="Nombre"
              name="name"
              value={formulario.name}
              onChange={handleChange}
              placeholder='Nombre'
            />
             {errores.name && <p className="error">{errores.name}</p>}
            <Input
              label="Apellido"
              name="lastname"
              value={formulario.lastname}
              onChange={handleChange}
              placeholder='Apellido'
            />
             {errores.lastname && <p className="error">{errores.lastname}</p>}
            <Input
              label="Correo"
              name="email"
              value={formulario.email}
              onChange={handleChange}
              placeholder='Correo'
            />
             {errores.email && <p className="error">{errores.email}</p>}
            <Button>Enviar</Button>
          </form>
  )
}

export default UserForm
