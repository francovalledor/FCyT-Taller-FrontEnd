import React from "react";
import { Categoria } from "../../TallerApiClient/categorias";
import { SimpleForm } from "../../SimpleForm/index";

export function AgregarCategoria(props) {
  let fields = [];
  fields.push({
    name: "nombre",
    type: "text",
    placeholder: "Nombre",
    required: true
  });

  fields.push({
    name: "agregar",
    type: "submit",
    value: "Agregar",
    classes: "btn-primary"
  });

  async function handleAgregar(e) {
    let fd = new FormData(e.target);
    let nombre = fd.get("nombre");
    await Categoria.add(nombre);
    props.refresh();
  }

  return <SimpleForm title="Nueva" onSubmit={handleAgregar} fields={fields} />;
}
