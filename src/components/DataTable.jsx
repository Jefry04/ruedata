import { Button, Table } from "@mantine/core";
import React, { useState } from "react";
import { deletePet, editPet, getAllPets } from "../utils/fetchData";
import PublicForm from "./PublicForm";
import PublicModal from "./PublicModal";
import "../styles/dataTable.css";

const DataTable = ({ pets = [], setAllPets }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [petId, setPetId] = useState("false");
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
    editPet(petData).then(() =>
      getAllPets().then((response) => setAllPets(response))
    );
    setOpenEditModal(false);
  };
  const handleChange = (event) => {
    event.preventDefault();
    setPetData({
      ...petData,
      [event.target.name]: event.target.value,
    });
  };
  const handleDelete = () => {
    deletePet(petId).then(() =>
      getAllPets().then((response) => setAllPets(response))
    );
    setOpenDeleteModal(false);
  };

  const handleOpenModal = (petData, id) => {
    setOpenDeleteModal(true);
    setPetData(petData);
    setPetId(id);
  };

  return (
    <>
      <div className="table-container">
        <Table striped highlightOnHover className="table" verticalSpacing="md">
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
                    <Button
                      type="button"
                      onClick={() => handleEdit(pet)}
                      className="table-button"
                    >
                      Editar
                    </Button>
                    <Button
                      type="button"
                      onClick={() => handleOpenModal(pet, pet._id)}
                      className="table-button"
                    >
                      Borrar
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))}
        </Table>
      </div>
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

      <PublicModal
        opened={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        title={"Borrar mascota?"}
      >
        <p className="table-message">Seguro que desea borrar la mascota {petData.name}</p>
        <Button type="button" onClick={handleDelete}>
          Borrar
        </Button>
      </PublicModal>
    </>
  );
};

export default DataTable;
