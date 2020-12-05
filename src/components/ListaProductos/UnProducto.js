import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export function UnProducto(props) {
  if (props.producto) {
    let { id, nombre, precio, descripcion, etiquetas } = props.producto;
    return (
      <tr>
        <th className="text-capitalize" scope="row">
          {nombre}
        </th>
        <td>${precio}</td>
        <td className="d-sm-none d-md-table-cell">
          {descripcion.slice(0, 30)}
        </td>
        <td className="d-sm-none d-md-table-cell">{etiquetas}</td>
        <td>
          <div className="btn-group btn-group-sm">
            <button className="btn btn-primary">
              <FaEdit />
            </button>
            <button className="btn btn-danger">
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
