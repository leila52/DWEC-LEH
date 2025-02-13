import http from "../serviciosAxios/http-axios";

class ServicioUsuario {
   getAllInformacion() {
     return http.get("/informacion");
   }
   getAllSkinCare() {
    return http.get("/skincare");
  }

   //encriptar contraseña
  login(usuario) {
   return http.get(`/usuarios?nombre=${usuario}`)
      //return http.get(`/usuarios?nombre=${usuario}&pass=${pass}`);
      //http://localhost:3000/usuarios?nombre=agustin&pass=123
   }
}

export default new ServicioUsuario();
