import { postJSON, getJSON, deleteJSON, putJSON } from "../../utils/fetch";
import { BASE } from "./index";
import { RecursoSimple } from "./simples";

export class Unidad extends RecursoSimple {
  static get endpoint() {
    return `${BASE}/unidades`;
  }
}
