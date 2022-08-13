import axios from "axios";

const url = "https://crudcrud.com/api/9091096872d54fcc85732e325a0d39ec/pet";

export const getAllPets = async () => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return error;
  }
};

export const createPet = async (petData) => {
  try {
    const { data } = await axios.post(url, petData);
    return data;
  } catch (error) {
    return error;
  }
};

export const editPet = async (petData) => {
  const {_id} = petData;
  const petObject = {
    name: petData.name,
    age: petData.age,
    breed: petData.breed,
  }
  try {

    const { data } = await axios.put(`${url}/${_id}`, petObject);
    return data;
  } catch (error) {
    return error;
  }
};

export const deletePet = async (id) => {
  try {

    const { data } = await axios.delete(`${url}/${id}`);
    return data;
  } catch (error) {
    return error;
  }
};