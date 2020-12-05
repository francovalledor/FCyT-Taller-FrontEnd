import React from "react";
import { UnProducto } from "./UnProducto";

export function ListaProductos(props) {
  function renderProductos() {
    if (props.productos && props.productos.map) {
      return props.productos.map((producto) => (
        <UnProducto key={producto.id} producto={producto} />
      ));
    }
  }
  return (
    <>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th className="d-sm-none d-md-table-cell" scope="col">
              Descripcion
            </th>
            <th className="d-sm-none d-md-table-cell" scope="col">
              Etiquetas
            </th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {renderProductos()}
          {/* <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          </tr>
          <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr> */}
        </tbody>
      </table>
      <p>No hay elementos</p>
    </>
  );
}
