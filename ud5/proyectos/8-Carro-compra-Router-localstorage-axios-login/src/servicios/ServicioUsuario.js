
import http from "./http-axios.js";

class ServicioUsuario {
   getAllFrutas() {
     return http.get("/frutas");
   }

   //encriptar contraseña
  login(usuario) {
   return http.get(`/usuarios?nombre=${usuario}`)
      //return http.get(`/usuarios?nombre=${usuario}&pass=${pass}`);
      //http://localhost:3000/usuarios?nombre=agustin&pass=123
   }
}

export default new ServicioUsuario();
