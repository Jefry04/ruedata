import React from "react";

const DataTable = ({ pets }) => {

  const handleEdit = (id) => console.log("editar: ", id);
  const handleDelete = (id) => console.log("Borrar: ", id);

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>especie</th>
          <th>Mas</th>
        </tr>
      </thead>
      {pets &&
        pets.map((pet) => (
          <tbody key={pet._id}>
            <tr>
              <td>{pet.name}</td>
              <td>{pet.age}</td>
              <td>{pet.breed}</td>
              <td>
                <button type="button" onClick={() => handleEdit(pet._id)}>
                  Editar
                </button>
                <button type="button" onClick={() => handleDelete(pet._id)}>Borrar</button>
              </td>
            </tr>
          </tbody>
        ))}
    </table>
  );
};

export default DataTable;
