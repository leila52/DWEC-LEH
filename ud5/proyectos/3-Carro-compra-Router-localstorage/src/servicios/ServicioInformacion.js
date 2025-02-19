
import http from "./http-axios.js";

class ServicioInformacion {
   getAll() {
     return http.get("/informacion");
   }  
    //encriptar contraseña
  login(usuario,password) {
    return http.get(`/usuarios?nombre=${usuario}`)
       //return http.get(`/usuarios?nombre=${usuario}&pass=${pass}`);
       //http://localhost:3000/usuarios?nombre=agustin&pass=123
    }
}

export default new ServicioInformacion();
