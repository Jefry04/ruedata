import React, { useState } from "react";
import { deletePet, editPet } from "../utils/fetchData";
import PublicForm from "./PublicForm";

const DataTable = ({ pets }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [petData, setPetData] = useState({
    name: "",
    age: 0,
    breed: "",
  });

  const handleEdit = (petData) => {
    setOpenEditModal(true);
    setPetData(petData);
  };
  
  const handleEditForm = (event) =>{
    event.preventDefault();
    editPet(petData);
  }
  const handleChange = (event) => {
    event.preventDefault();
    setPetData({
      ...petData,
      [event.target.name]: event.target.value,
    });
  };
  const handleDelete = (id) => deletePet(id);

  return (
    <>
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
                  <button type="button" onClick={() => handleEdit(pet)}>
                    Editar
                  </button>
                  <button type="button" onClick={() => handleDelete(pet._id)}>
                    Borrar
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
      </table>
      {openEditModal && (
        <PublicForm
          formData={petData}
          buttonTitle="Editar"
          handleChange={handleChange}
          handleForm={handleEditForm}
        />
      )}
    </>
  );
};

export default DataTable;
