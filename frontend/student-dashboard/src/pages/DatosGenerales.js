import React from 'react';
import DatosGeneralesForm from '../components/DatosGeneralesForm';
import '../assets/styles/DatosGeneralesForm.css';


const DatosGenerales = () => {
  const handleFormSubmit = async (formData) => {
    console.log('Datos enviados:', formData);

    try {
        const response = await fetch('http://localhost:5000/api/projects/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Proyecto registrado exitosamente:', data);
        alert('Proyecto registrado exitosamente');
      } else {
        console.error('Error al registrar el proyecto:', response.statusText);
        alert('Error al registrar el proyecto');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      alert('Error en la solicitud al servidor');
    }
  };

  return (
    <div>
      <h2>Datos Generales</h2>
      <DatosGeneralesForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default DatosGenerales;
