import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export function Categoria(props) {
  async function handleDelete(e) {
    await props.categoria.delete();
    props.refresh();
  }

  async function handleEdit(e) {
    props.setCategoria(props.categoria);
    props.editMode(true);
  }

  if (props.categoria) {
    let { id, nombre } = props.categoria;
    return (
      <tr>
        <th className="text-capitalize" scope="row">
          {id}
        </th>
        <td className="text-capitalize"> {nombre}</td>
        <td>
          <div className="btn-group btn-group-sm">
            <button className="btn btn-primary" onClick={handleEdit}>
              <FaEdit />
            </button>
            <button onClick={handleDelete} className="btn btn-danger">
              <FaTrash />
            </button>
          </div>
        </td>
      </tr>
    );
  } else {
    return "";
  }
}
