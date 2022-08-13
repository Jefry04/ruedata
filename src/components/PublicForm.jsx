import React, { useState } from "react";

const PublicForm = ({ handleForm, handleChange, formData, buttonTitle }) => {
  return (
    <form onSubmit={handleForm}>
      <input
        placeholder="Nombre"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      ></input>
      <input
        placeholder="Edad"
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
      ></input>
      <input
        placeholder="Especie"
        type="text"
        name="breed"
        value={formData.breed}
        onChange={handleChange}
      ></input>
      <button type="submit">{buttonTitle}</button>
    </form>
  );
};

export default PublicForm;
