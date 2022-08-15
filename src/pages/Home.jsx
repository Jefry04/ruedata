import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import DataTable from "../components/DataTable";
import PublicForm from "../components/PublicForm";
import PublicModal from "../components/PublicModal";
import { createPet, getAllPets } from "../utils/fetchData";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [allPets, setAllPets] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    breed: "",
  });

  useEffect(() => {
    getAllPets().then((response) => setAllPets(response));
  }, []);

  const handleNewPet = (event) => {
    event.preventDefault();
    createPet(formData);
    setFormData({
      name: "",
      age: 0,
      breed: "",
    });
  };

  const handleChange = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleOpenModal = () => setOpenModal(true);

  return (
    <>
      <button type="button" onClick={handleOpenModal}>
        Nueva mascota
      </button>
      <DataTable pets={allPets} />
      <PublicModal
        opened={openModal}
        onClose={() => setOpenModal(false)}
        title={"Crear mascota"}
      >
        <PublicForm
          handleForm={handleNewPet}
          handleChange={handleChange}
          formData={formData}
          buttonTitle="Crear mascota"
        />
      </PublicModal>
    </>
  );
};

export default Home;
