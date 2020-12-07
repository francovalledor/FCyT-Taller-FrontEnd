import React, { useEffect, useState } from "react";
import "./styles.css";
import { SimpleForm } from "./components/SimpleForm/";
import {
  Categoria,
  Producto,
  Unidad,
  Tipo
} from "./components/TallerApiClient/";
import { ListaProductos } from "./components/ListaProductos";
import { FaCaretSquareUp } from "react-icons/fa";

import { PanelCategorias } from "./components/Categorias";

export default function App() {
  let fields = [];

  fields.push({
    type: "text",
    name: "producto",
    label: "Nombre",
    placeholder: "Nombre"
  });

  fields.push({
    type: "text",
    name: "descripcion",
    placeholder: "Descripción"
  });

  fields.push({
    type: "number",
    name: "precio",
    placeholder: 0,
    value: 0,
    note: "Precio. Solo números enteros."
  });

  fields.push({
    type: "select",
    name: "categoria",
    value: "sincategoria",
    options: [
      { text: "Sin Categoria", value: "sincategoria" },
      { text: "Comida Vergana", value: "vergana" },
      { text: "Comida Normal", value: "normal" },
      { text: "Postre", value: "postre" },
      { text: "Bebida", value: "bebida" }
    ]
  });

  fields.push({
    type: "submit",
    name: "enviar",
    value: "Enviar"
  });

  function handleSubmit(e) {
    console.log(e.target);
  }

  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  async function get_productos() {
    // console.log(await Tipo.get_all());
    // console.log(await Tipo.add("holanda"));
    let response = await Producto.get_all();
    let cats = await Categoria.get_all();
    console.log(cats);

    setCategorias(cats);

    // console.log(response);
    // let producto = await Producto.get_one(19);
    // console.log(producto);
    // if (producto) {
    //   producto.nombre = "Tarta";
    //   producto.precio = 100;
    //   producto.add_etiqueta("chancho");
    //   producto.delete_etiqueta("cerdo");
    //   producto.update();
    // }
    setProductos(response);
    // Producto.add("Sanguche", "De milanesa", 130);
  }

  useEffect(() => {
    get_productos();
    // get_all_categorias();
    // Categoria.submit("Otra");
  }, []);

  return (
    <div className="App">
      <div className="container p-4 mt-4 shadow">
        <div className="row">
          <div className="col-md-8 mx-auto">
            {/* <h2>Productos</h2> */}
            {/* <ListaProductos productos={productos} /> */}
            {/* </div>
          <div className="col-md-3 mx-auto">
            <SimpleForm
              fields={fields}
              onSubmit={handleSubmit}
              title="Agregar Producto"
            /> */}
            <PanelCategorias />
          </div>
        </div>
      </div>
    </div>
  );
}
