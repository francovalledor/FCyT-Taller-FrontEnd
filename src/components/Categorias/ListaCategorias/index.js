import React from "react";
import { Categoria } from "./Categoria";

export function ListaCategorias(props) {
  function renderCategorias() {
    if (
      props.categorias &&
      props.categorias.map &&
      props.categorias.length > 0
    ) {
      return props.categorias.map((categoria) => (
        <Categoria
          editMode={props.editMode}
          setCategoria={props.setCategoria}
          key={categoria.id}
          refresh={props.refresh}
          categoria={categoria}
        />
      ));
    }
  }
  if (renderCategorias()) {
    return (
      <>
        <h3>Categorias</h3>
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>{renderCategorias()}</tbody>
        </table>
      </>
    );
  } else {
    return (
      <>
        <h1>Categorias</h1>
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
        </table>
        <p>No hay elementos</p>
      </>
    );
  }
}
