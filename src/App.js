import React, { useEffect, useState } from "react";
import "./styles.css";
import { SimpleForm } from "./components/SimpleForm/";
import { get_all_productos, Producto } from "./components/TallerApiClient/";
import { ListaProductos } from "./components/ListaProductos";
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
  async function get_productos() {
    let response = await get_all_productos();
    console.log(response);
    setProductos(response);
  }

  useEffect(() => {
    get_productos();
  }, []);

  return (
    <div className="App">
      <div className="container p-4 mt-4 shadow">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2>Productos</h2>
            <ListaProductos productos={productos} />
          </div>
          <div className="col-md-3 mx-auto">
            <SimpleForm
              fields={fields}
              onSubmit={handleSubmit}
              title="Agregar Producto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
