import React from "react";
import { Categoria } from "../../TallerApiClient/categorias";
import { SimpleForm } from "../../SimpleForm/index";

export function EditarCategoria(props) {
  let fields = [];
  fields.push({
    name: "nombre",
    type: "text",
    placeholder: "Nombre",
    required: true,
    classes: "text-capitalize",
    value: props.categoria.nombre
  });

  fields.push({
    name: "agregar",
    type: "submit",
    value: "Listo",
    classes: "btn-warning"
  });

  async function handleListo(e) {
    let fd = new FormData(e.target);
    let nombre = fd.get("nombre");
    props.categoria.nombre = nombre;
    await props.categoria.update();
    props.editMode(false);
    props.refresh();
  }

  return <SimpleForm title="Editar" onSubmit={handleListo} fields={fields} />;
}
