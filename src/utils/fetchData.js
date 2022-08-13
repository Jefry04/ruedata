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
    console.log(petData)
    const { data } = await axios.post(url, petData);
    return data;
  } catch (error) {
    return error;
  }
};