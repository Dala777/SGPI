// src/components/IntegradorForm.js
import React, { useState } from 'react';
import ObjetivosEspecificosForm from './ObjetivosEspecificosForm';
import '../assets/styles/Objetivos.css';

const IntegradorForm = ({ integradorNombre }) => {
  const [descripcionIntegrador, setDescripcionIntegrador] = useState('');
  const [objetivoGeneral, setObjetivoGeneral] = useState('');
  const [objetivosEspecificos, setObjetivosEspecificos] = useState([]);

  const handleDescripcionChange = (e) => {
    setDescripcionIntegrador(e.target.value);
  };

  const handleObjetivoGeneralChange = (e) => {
    setObjetivoGeneral(e.target.value);
  };

  const handleActualizarDescripcion = () => {
    console.log('Descripción del integrador actualizada:', descripcionIntegrador);
  };

  const handleActualizarObjetivoGeneral = () => {
    console.log('Objetivo general actualizado:', objetivoGeneral);
  };

  // Función para añadir un nuevo objetivo específico
  const handleAddObjetivoEspecifico = (nuevoObjetivo) => {
    setObjetivosEspecificos([...objetivosEspecificos, { texto: nuevoObjetivo }]);
  };

  // Función para editar un objetivo específico
  const handleEditObjetivoEspecifico = (index, nuevoTexto) => {
    const nuevosObjetivos = [...objetivosEspecificos];
    nuevosObjetivos[index].texto = nuevoTexto;
    setObjetivosEspecificos(nuevosObjetivos);
  };

  // Función para eliminar un objetivo específico
  const handleDeleteObjetivoEspecifico = (index) => {
    const nuevosObjetivos = objetivosEspecificos.filter((_, i) => i !== index);
    setObjetivosEspecificos(nuevosObjetivos);
  };

  return (
    <div className="integrador-form">
      <h3>{integradorNombre}</h3>

      <div className="form-group">
        <label>Descripción del Integrador</label>
        <textarea
          value={descripcionIntegrador}
          onChange={handleDescripcionChange}
          placeholder="Escribe la descripción del integrador"
        />
        <button onClick={handleActualizarDescripcion}>Actualizar Integrador</button>
      </div>

      <div className="form-group">
        <label>Objetivo General</label>
        <textarea
          value={objetivoGeneral}
          onChange={handleObjetivoGeneralChange}
          placeholder="Escribe el objetivo general del integrador"
        />
        <button onClick={handleActualizarObjetivoGeneral}>Actualizar Objetivo General</button>
      </div>

      {/* Pasamos las funciones y el estado al componente ObjetivosEspecificosForm */}
      <ObjetivosEspecificosForm
        objetivosEspecificos={objetivosEspecificos}
        onAddObjetivoEspecifico={handleAddObjetivoEspecifico}
        onEditObjetivoEspecifico={handleEditObjetivoEspecifico}
        onDeleteObjetivoEspecifico={handleDeleteObjetivoEspecifico}
      />
    </div>
  );
};

export default IntegradorForm;
