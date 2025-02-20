import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import ServicioUsuario from '../servicios/ServicioUsuario';
import bcrypt from "bcryptjs";

// import axios from 'axios';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [form, setForm] = useState({
    nombre: '',
    sesion:false,
    notificacion:false,
  });
  const gestionarCambio = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const [error, setError] = useState('');
  const { login ,loginNoLogeada} = useAuth();
  const navigate = useNavigate();
  //funcioj para cifrar
  const cifrarPassword = (con) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(con, salt);
    console.log(`salt ${salt}`);
    console.log(`hash ${hash}`);
    return hash;
  }
  console.log(cifrarPassword("123"))

 
  

  const handleSubmit = async (e) => {
  
    e.preventDefault();
  
    ServicioUsuario.login(usuario,password)
      .then((response) => {
       if(response.data.length !== 0 ){   
        const usuario = response.data[0].nombre;
        const hashUsuario = response.data[0].pass;
        const esCorrecta = bcrypt.compareSync(password, hashUsuario);
        if (esCorrecta ) {
          if(form.sesion ===true && form.notificacion ===true){
            alert("sesion guardada y se te informara");
            login(usuario);
          }
          if(form.sesion ===true && form.notificacion ===false){
            alert("sesion guardada y no se te informara");
            login(usuario);
          }
          if(form.sesion ===false && form.notificacion ===false){
            alert("sesion  no guardada y no se te informara");
            
            loginNoLogeada(usuario);
          }
          if(form.sesion ===false && form.notificacion ===true){
            alert("sesion  no guardada y se te informara");
            loginNoLogeada(usuario);
          }
          //te lleva al inicio
          navigate('/');
        }else{
              setError("contraseña incoreecta");
        }
       }
       
       else {
        
        setError("Usuario no es correcto")
       }
       
        
      })
      .catch((error) => {   
        alert(error)                 
       navigate('/login'); 
      });    
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Usuario</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <input
             type="checkbox"
             name="sesion"
             checked={form.sesion}
             onChange={gestionarCambio}
          />
          <label htmlFor="sesion">Recordar Sesion</label>
        </div>
        <div>
          <input
             type="checkbox"
             name="notificacion"
             checked={form.notificacion}
             onChange={gestionarCambio}
          />
          <label htmlFor="notificacion">Permitir Notificaciones</label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
