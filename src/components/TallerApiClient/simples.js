import { postJSON, getJSON, deleteJSON, putJSON } from "../../utils/fetch";
import { BASE } from "./index";

export class RecursoSimple {
  /** Super Clase para manejar recursos que solo posean atributo nombre */
  static get endpoint() {
    //Atributo de clase
    return `${BASE}/recurso`; //debe sobreescribirse
  }

  constructor(id, nombre) {
    this.URL = `${this.__proto__.constructor.endpoint}/${id}`;
    this.id = id;
    this.nombre = nombre;
  }

  static async get_all() {
    /**Devuelve todos los recursos de este endpoint */
    let lista = [];
    let response = await getJSON(this.endpoint);

    if (response.items && response.items.forEach) {
      response.items.forEach((cat) => {
        lista.push(this.parse(cat));
      });

      return lista;
    }
  }

  static async get_one(id) {
    /**Devuelve un recurso*/
    let response = await getJSON(`${this.endpoint}/${id}`);

    if (response !== null) {
      return this.parse(response);
    } else {
      return null;
    }
  }

  static async add(
    /**Agrega un recurso */
    nombre
  ) {
    let data = {
      nombre
    };

    let response = await postJSON(this.endpoint, data);
  }

  static parse(obj) {
    /** convierte JSON en un objeto de esta clase*/
    if (obj === null) {
      return null;
    }
    const { nombre, id } = obj;

    return new this(id, nombre);
  }

  async delete() {
    /** Elimina el recurso */
    let response = await deleteJSON(this.URL);
  }

  async update() {
    /** Actualiza el recurso
     * Se debe utilizar luego de actualizar una propiedad. ej.
     *
     * recurso.nombre= 'otro nombre'
     * recurso.update()
     */

    let data = {
      nombre: this.nombre
    };

    let response = await putJSON(this.URL, data);
    return response;
  }
}
