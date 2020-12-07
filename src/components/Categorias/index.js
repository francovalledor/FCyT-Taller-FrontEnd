import React, { useEffect, useState } from "react";
import { Categoria } from "../TallerApiClient/categorias";
import { EditarCategoria } from "./FormCategoria";
import { AgregarCategoria } from "./FormCategoria";
import { ListaCategorias } from "./ListaCategorias";

export function PanelCategorias(props) {
  const [categorias, setCategorias] = useState([]);
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
    <div>
      <ListaCategorias
        refresh={getAllCategorias}
        editMode={setIsEditing}
        setCategoria={setCategoriaToEdit}
        categorias={categorias}
      />
      <hr />
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
  );
}
