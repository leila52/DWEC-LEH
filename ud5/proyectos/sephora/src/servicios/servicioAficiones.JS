
import http from "./http-axios.js";

class ServicioAficiones {
  getAll() {
    return http.get("/imagenes");
  }

  get(id) {
    return http.get(`/imagenes/${id}`);
  }

  create(data) {
    return http.post("/imagenes", data);
  }

  update(id, data) {
    return http.put(`/imagenes/${id}`, data);
  }

  delete(id) {
    return http.delete(`/imagenes/${id}`);
  }
}

export default new ServicioAficiones();
