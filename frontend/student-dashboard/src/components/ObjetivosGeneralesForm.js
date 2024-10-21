import React, { useState } from 'react';
import '../assets/styles/Objetivos.css';


const ObjetivosGeneralesForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    descripcionGeneral: '',
    descripcionIntegrador: '',
    objetivoGeneral: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      descripcionGeneral: '',
      descripcionIntegrador: '',
      objetivoGeneral: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="objetivos-generales-form">
      <div>
        <label>Descripción General del Proyecto</label>
        <textarea
          name="descripcionGeneral"
          value={formData.descripcionGeneral}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div>
        <label>Descripción del Integrador</label>
        <textarea
          name="descripcionIntegrador"
          value={formData.descripcionIntegrador}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div>
        <label>Objetivo General</label>
        <textarea
          name="objetivoGeneral"
          value={formData.objetivoGeneral}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default ObjetivosGeneralesForm;
