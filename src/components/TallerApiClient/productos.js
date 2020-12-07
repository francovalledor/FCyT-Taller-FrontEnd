import { postJSON, getJSON, deleteJSON, putJSON } from "../../utils/fetch";
import { BASE } from "./index";

export class Producto {
  /** Clase para manejar el recurso producto */
  static get endpoint() {
    //Atributo de clase
    return `${BASE}/productos`;
  }
  constructor(
    id,
    nombre,
    descripcion = "",
    precio = 0,
    categoria_id = undefined,
    unidad_id = undefined,
    tipo_id = undefined,
    etiquetas = []
  ) {
    this.URL = `${Producto.endpoint}/${id}`;
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.categoria_id = categoria_id;
    this.unidad_id = unidad_id;
    this.tipo_id = tipo_id;
    this.etiquetas = etiquetas;
  }

  static async get_all() {
    /**Devuelve todos los productos */
    let productos = [];
    let response = await getJSON(Producto.endpoint);

    if (response.items && response.items.forEach) {
      response.items.forEach((prod) => {
        productos.push(Producto.parse(prod));
      });

      return productos;
    }
  }

  static async get_one(id) {
    /**Devuelve un producto */
    let response = await getJSON(`${Producto.endpoint}/${id}`);

    if (response !== null) {
      return Producto.parse(response);
    } else {
      return null;
    }
  }

  static async add(
    /**Agrega un recurso producto */
    nombre,
    descripcion,
    precio,
    categoria_id = undefined,
    unidad_id = undefined,
    tipo_id = undefined,
    etiquetas = []
  ) {
    let data = {
      nombre,
      descripcion,
      precio,
      categoria_id,
      unidad_id,
      tipo_id,
      etiquetas
    };

    let response = await postJSON(Producto.endpoint, data);
    console.log("Producto:", response);
  }

  static parse(prod) {
    /** convierte JSON en un objeto Producto */
    if (!prod) {
      console.log(prod);
      return null;
    }

    const { nombre, descripcion, precio, id } = prod;
    const categoria_id = prod.categoria.id;
    const tipo_id = prod.tipo.id;
    const unidad_id = prod.unidad.id;
    const etiquetas = [];

    if (prod.etiquetas && prod.etiquetas.forEach) {
      prod.etiquetas.forEach((eti) => etiquetas.push(eti.nombre));
    }

    return new Producto(
      id,
      nombre,
      descripcion,
      precio,
      categoria_id,
      unidad_id,
      tipo_id,
      etiquetas
    );
  }

  async delete() {
    /** Elimina el producto */
    let response = await deleteJSON(this.URL);
    console.log(
      `Producto: ${this.id} ${this.nombre} $${this.precio} =>`,
      response
    );
  }

  async update() {
    /** Actualiza el producto
     * Se debe utilizar luego de actualizar una propiedad. ej.
     *
     * producto.nombre= 'otro nombre'
     * producto.precio= 200
     * producto.update()
     */
    let data = {
      nombre: this.nombre,
      descripcion: this.descripcion,
      precio: this.precio,
      categoria_id: this.categoria_id,
      unidad_id: this.unidad_id,
      tipo_id: this.unidad_id
    };

    let response = await putJSON(this.URL, data);
    console.log(
      `Producto: ${this.id} ${this.nombre} $${this.precio} =>`,
      response
    );
    return response;
  }

  async add_etiqueta(nombre) {
    /**Agrega una etiqueta */
    let data = { nombre };
    let response = await postJSON(`${this.URL}/etiquetas`, data);
    console.log(`Etiqueta ${nombre}: ${response}`);
    return response;
  }

  async delete_etiqueta(nombre) {
    /**Borra una etiqueta */
    let data = { nombre };
    let response = await deleteJSON(`${this.URL}/etiquetas`, data);
    console.log(`Etiqueta ${nombre}: ${response}`);
    return response;
  }
}
