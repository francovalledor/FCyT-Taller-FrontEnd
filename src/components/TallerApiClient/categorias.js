import { postJSON, getJSON, deleteJSON, putJSON } from "../../utils/fetch";
import { BASE } from "./index";
import { RecursoSimple } from "./simples";

export class Categoria extends RecursoSimple {
  static get endpoint() {
    return `${BASE}/categorias`;
  }
}

// export class Categoria {
//   /** Clase para manejar el recurso categoria */
//   static get endpoint() {
//     //Atributo de clase
//     return `${BASE}/categorias`;
//   }
//   constructor(id, nombre) {
//     this.URL = `${this.endpoint}/${id}`;
//     this.id = id;
//     this.nombre = nombre;
//   }

//   static async get_all() {
//     /**Devuelve todos los productos */
//     let categorias = [];
//     let response = await getJSON(this.endpoint);

//     if (response.items && response.items.forEach) {
//       response.items.forEach((cat) => {
//         categorias.push(Categoria.parse(cat));
//       });

//       return categorias;
//     }
//   }

//   static async get_one(id) {
//     /**Devuelve una categoria*/
//     let response = await getJSON(`${this.endpoint}/${id}`);

//     if (response !== null) {
//       return Categoria.parse(response);
//     } else {
//       return null;
//     }
//   }

//   static async add(
//     /**Agrega un recurso categoria */
//     nombre
//   ) {
//     let data = {
//       nombre
//     };

//     let response = await postJSON(this.endpoint, data);
//     // console.log("Categoria:", response);
//   }

//   static parse(cat) {
//     /** convierte JSON en un objeto Categoria */
//     if (cat === null) {
//       return null;
//     }
//     const { nombre, id } = cat;

//     return new Categoria(id, nombre);
//   }

//   async delete() {
//     /** Elimina el producto */
//     let response = await deleteJSON(this.URL);
//     // console.log(`Categoria: ${this.id} ${this.nombre} =>`, response);
//   }

//   async update() {
//     /** Actualiza la categoria
//      * Se debe utilizar luego de actualizar una propiedad. ej.
//      *
//      * categoria.nombre= 'otro nombre'
//      * producto.update()
//      */
//     let data = {
//       nombre: this.nombre
//     };

//     let response = await putJSON(this.URL, data);
//     // console.log(`Categoria: ${this.id} ${this.nombre} =>`, response);
//     return response;
//   }
// }
