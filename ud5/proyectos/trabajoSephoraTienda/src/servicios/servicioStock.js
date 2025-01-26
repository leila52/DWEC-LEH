
import http from "./http-axios.js";

class ServicioStock {
  getAll() {
    return http.get("/stock");
  }

  get(id) {
    return http.get(`/stock/${id}`);
  }

  create(data) {
    return http.post("/stock", data);
  }

  update(id, data) {
    return http.put(`/stockaficiones/${id}`, data);
  }

  delete(id) {
    return http.delete(`/stock/${id}`);
  }
}

export default new ServicioStock();
