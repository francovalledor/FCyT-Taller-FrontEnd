import { postJSON, getJSON, deleteJSON, putJSON } from "../../utils/fetch";
// const BASE = "https://taller-fcyt.herokuapp.com";
import { Producto } from "./productos";
import { Categoria } from "./categorias";
import { Tipo } from "./tipos";
import { Unidad } from "./unidades";

export const BASE = "https://taller-fcyt.herokuapp.com";

export { Producto, Categoria, Tipo, Unidad };
