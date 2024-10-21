import React, { useState } from 'react';

const DatosGeneralesForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    codigoSis: '',  // Cambiado a 'codigoSis'
    nombre: '',  // Cambiado a 'nombre'
    descripcion: '',
    palabrasClave: '',
    areaEnfoque: '',
    integrador: '',
    semestre: '',
    sede: '',
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
      codigoSis: '',
      nombre: '',
      descripcion: '',
      palabrasClave: '',
      areaEnfoque: '',
      integrador: '',
      semestre: '',
      sede: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="datos-generales-form">
      <div>
        <label>Código SIS</label>
        <input type="text" name="codigoSis" value={formData.codigoSis} onChange={handleChange} required />
      </div>
      <div>
        <label>Nombre del proyecto</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
      </div>
      <div>
        <label>Descripción</label>
        <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} required></textarea>
      </div>
      <div>
        <label>Palabras clave</label>
        <input type="text" name="palabrasClave" value={formData.palabrasClave} onChange={handleChange} />
      </div>
      <div>
        <label>Área de enfoque</label>
        <input type="text" name="areaEnfoque" value={formData.areaEnfoque} onChange={handleChange} />
      </div>
      <div>
        <label>Integrador</label>
        <select name="integrador" value={formData.integrador} onChange={handleChange} required>
          <option value="">Seleccione</option>
          <option value="Integrador I">Integrador I</option>
          <option value="Integrador II">Integrador II</option>
          <option value="Integrador III">Integrador III</option>
          <option value="Integrador Final">Integrador Final</option>
        </select>
      </div>
      <div>
        <label>Semestre</label>
        <select name="semestre" value={formData.semestre} onChange={handleChange} required>
          <option value="">Seleccione</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
      </div>
      <div>
        <label>Sede</label>
        <select name="sede" value={formData.sede} onChange={handleChange} required>
          <option value="">Seleccione</option>
          <option value="CBBA">CBBA</option>
          <option value="La Paz">La Paz</option>
          <option value="El Alto">El Alto</option>
          <option value="Santa Cruz">Santa Cruz</option>
        </select>
      </div>
      <button type="submit">Registrar Proyecto</button>
    </form>
  );
};

export default DatosGeneralesForm;
