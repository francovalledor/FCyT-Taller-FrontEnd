import React, { useEffect, useState } from "react";
import { Categoria } from "../TallerApiClient/categorias";
import { EditarCategoria } from "./FormCategoria";
import { AgregarCategoria } from "./FormCategoria";
import { ListaCategorias } from "./ListaCategorias";

export function PanelCategorias(props) {
  const [categorias, setCategorias] = useState(undefined);
  const [isEditing, setIsEditing] = useState(false);
  const [categoriaToEdit, setCategoriaToEdit] = useState(undefined);

  async function getAllCategorias() {
    let cats = await Categoria.get_all();
    setCategorias(cats);
  }

  useEffect(() => {
    getAllCategorias();
  }, []);

  return (
    <div className="container">
      <h1>Categorias</h1>
      <hr />
      <div className="row">
        <div className="col-md-6 mx-auto bg-light">
          <ListaCategorias
            refresh={getAllCategorias}
            editMode={setIsEditing}
            setCategoria={setCategoriaToEdit}
            categorias={categorias}
          />
        </div>
        <div className="col-md-6 mx-auto bg-light">
          {isEditing ? (
            <EditarCategoria
              editMode={setIsEditing}
              refresh={getAllCategorias}
              categoria={categoriaToEdit}
            />
          ) : (
            <AgregarCategoria refresh={getAllCategorias} />
          )}
        </div>
      </div>
    </div>
  );
}
