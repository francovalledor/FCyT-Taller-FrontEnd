import { postJSON, getJSON, deleteJSON, putJSON } from "../../utils/fetch";
// const BASE = "https://taller-fcyt.herokuapp.com";
import { Producto } from "./productos";
import { Categoria } from "./categorias";
import { Tipo } from "./tipos";
import { Unidad } from "./unidades";

export const BASE = "http://localhost:5000";

export { Producto, Categoria, Tipo, Unidad };
