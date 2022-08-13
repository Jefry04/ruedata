import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import DataTable from "../components/DataTable";
import PublicForm from "../components/PublicForm";
import { createPet, getAllPets } from "../utils/fetchData";

const mockData = [
  {
    _id: "62f8233991111503e8bdc568",
    name: "Kiara",
    age: 2,
    breed: "Cat",
  },
  {
    _id: "2",
    name: "Spike",
    age: 3,
    breed: "Dog",
  },
  {
    _id: "3",
    name: "Igor",
    age: 1,
    breed: "Dog",
  },
  {
    _id: "4",
    name: "Nemo",
    age: 5,
    breed: "Fish",
  },
];
const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    breed: "",
  });

  // useEffect(() => {
  //   getAllPets();
  // }, []);

  const handleNewPet = (event) => {
    event.preventDefault();
    createPet(formData)
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
      <DataTable pets={mockData} />
      {openModal && (
        <PublicForm
          handleForm={handleNewPet}
          handleChange={handleChange}
          formData={formData}
          buttonTitle= "Crear mascota"
        />
      )}
    </>
  );
};

export default Home;
