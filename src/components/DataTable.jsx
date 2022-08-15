import { Button, Table } from "@mantine/core";
import React, { useState } from "react";
import { deletePet, editPet, getAllPets } from "../utils/fetchData";
import PublicForm from "./PublicForm";
import PublicModal from "./PublicModal";

const DataTable = ({ pets =[], setAllPets }) => {
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

  const handleEditForm = (event) => {
    event.preventDefault();
    editPet(petData).then(() => getAllPets().then((response) => setAllPets(response)));
    setOpenEditModal(false)
  };
  const handleChange = (event) => {
    event.preventDefault();
    setPetData({
      ...petData,
      [event.target.name]: event.target.value,
    });
  };
  const handleDelete = (id) => deletePet(id).then(() => getAllPets().then((response) => setAllPets(response)));

  return (
    <>
      <Table striped highlightOnHover >
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>especie</th>
            <th>Mas</th>
          </tr>
        </thead>
        {pets &&
          pets?.map((pet) => (
            <tbody key={pet._id}>
              <tr>
                <td>{pet.name}</td>
                <td>{pet.age}</td>
                <td>{pet.breed}</td>
                <td>
                  <Button type="button" onClick={() => handleEdit(pet)}>
                    Editar
                  </Button>
                  <Button type="button" onClick={() => handleDelete(pet._id)}>
                    Borrar
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
      </Table>
        <PublicModal
          opened={openEditModal}
          onClose={() => setOpenEditModal(false)}
          title={"Editar mascota"}
        >
          <PublicForm
            formData={petData}
            buttonTitle="Editar"
            handleChange={handleChange}
            handleForm={handleEditForm}
          />
        </PublicModal>
    </>
  );
};

export default DataTable;
