
import http from "./http-axios.js";

class ServicioInformacion {
   getAll() {
     return http.get("/informacion");
   }  
}

export default new ServicioInformacion();
