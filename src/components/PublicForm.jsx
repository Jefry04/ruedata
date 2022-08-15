import React from "react";
import "../styles/publicForm.css";

const PublicForm = ({ handleForm, handleChange, formData, buttonTitle }) => {
  return (
    <form onSubmit={handleForm} className="form">
      <div className="form_group">
        <label htmlFor="name" className="form_label">
          Nombre:
        </label>
        <input
          required
          placeholder="Nombre"
          type="text"
          name="name"
          className="form_input"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form_group">
        <label htmlFor="age" className="form_label">
          Edad:
        </label>
        <input
          required
          placeholder="Edad"
          type="number"
          name="age"
          className="form_input"
          value={formData.age}
          onChange={handleChange}
        />
      </div>
      <div className="form_group">
        <label htmlFor="name" className="form_label">
          Especie
        </label>
        <input
          required
          placeholder="Especie"
          type="text"
          name="breed"
          className="form_input"
          value={formData.breed}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="form_button">{buttonTitle}</button>
    </form>
  );
};

export default PublicForm;
