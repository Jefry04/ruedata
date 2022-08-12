import axios from "axios";

const url = "https://crudcrud.com/api/746b455a3a1d49d58f144705cd0b6e8c/pet";

export const getAllPets = async () => {
  const { data } = await axios.get(url);
  console.log(data);
};
