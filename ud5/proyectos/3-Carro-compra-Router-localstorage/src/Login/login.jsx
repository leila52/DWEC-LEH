import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider.jsx';
import bcrypt from "bcryptjs";
import ServicioInformacion from '../servicios/ServicioInformacion';
// npm install bcryptjs
//import UseStateStorage from './servicios/UseSateStorage';
// import axios from 'axios';

const Login = () => {
  /*const [usuario, setUsuario] = UseStorageState("usuario",'');
  const [password, setPassword] = UseStorageState("password",'');
   */
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  //funcioj para cifrar
  const cifrarPassword = (con) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(con, salt);
    console.log(`salt ${salt}`);
    console.log(`hash ${hash}`);
    return hash;
  }
  //cifrarPassword("789");
  const handleSubmit = async (e) => {

    e.preventDefault();

    ServicioInformacion.login(usuario, password)
      .then((response) => {
        if (response.data.length !== 0) {
          const usuario = response.data[0].nombre;
          const hashUsuario = response.data[0].pass;
          const esCorrecta = bcrypt.compareSync(password, hashUsuario);
          if (esCorrecta) {
            login(usuario);
            //te lleva al inicio
            navigate('/');
          }else{
            setError("contraseña incoreecta");
          }

        } else {

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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
