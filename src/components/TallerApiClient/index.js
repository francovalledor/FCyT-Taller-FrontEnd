import { postJSON, getJSON, deleteJSON, putJSON } from "../../utils/fetch";
// const BASE = "https://taller-fcyt.herokuapp.com";
const BASE = "http://localhost:5000";

export class Producto {
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
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.categoria_id = categoria_id;
    this.unidad_id = unidad_id;
    this.tipo_id = tipo_id;
    this.etiquetas = etiquetas;
  }

  async submit() {
    const endpoint = "/productos";
    console.log(JSON.stringify(this));

    let response = await postJSON(BASE + endpoint, this);
    console.log("posted");
    // response = response.json();
    console.log(response);
  }
}

export async function get_all_productos() {
  const endpoint = "/productos";
  let productos = [];
  let response = await getJSON(BASE + endpoint);

  if (response.items && response.items.forEach) {
    response.items.forEach((prod) => {
      const { nombre, descripcion, precio, id } = prod;
      const categoria_id = prod.categoria.id;
      const tipo_id = prod.tipo.id;
      const unidad_id = prod.unidad.id;
      const etiquetas = [];

      if (prod.etiquetas && prod.etiquetas.forEach) {
        prod.etiquetas.forEach((eti) => etiquetas.push(eti.nombre));
      }

      productos.push(
        new Producto(
          id,
          nombre,
          descripcion,
          precio,
          categoria_id,
          unidad_id,
          tipo_id,
          etiquetas
        )
      );
    });

    return productos;
  }
}
