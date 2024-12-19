
import http from "./http-axios.js";

class ServicioAxios{
  getAll() {
    return http.get("/servicios");
  }

  get(id) {
    return http.get(`/servicios/${id}`);
  }

  create(data) {
    return http.post("/servicios", data);
  }

  update(id, data) {
    return http.put(`/servicios/${id}`, data);
  }

  delete(id) {
    return http.delete(`/servicios/${id}`);
  }
}

export default new ServicioAxios();
