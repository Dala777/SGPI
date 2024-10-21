import React, { useState } from 'react';

function ObjetivosEspecificosForm({ objetivosEspecificos, onAddObjetivoEspecifico, onEditObjetivoEspecifico, onDeleteObjetivoEspecifico }) {
  // Estado para manejar el texto del nuevo objetivo específico
  const [nuevoObjetivo, setNuevoObjetivo] = useState('');

  // Asegúrate de que la lista de objetivosEspecificos esté inicializada como un arreglo
  const objetivos = objetivosEspecificos || [];

  const handleAddObjetivo = () => {
    if (nuevoObjetivo.trim() !== '') {
      onAddObjetivoEspecifico(nuevoObjetivo); // Llama a la función para agregar el objetivo
      setNuevoObjetivo(''); // Limpia el campo de entrada después de agregar el objetivo
    }
  };

  return (
    <div className="objetivos-especificos-form">
      <h3>Objetivos Específicos</h3>

      {/* Lista de objetivos específicos existentes */}
      <ul>
        {objetivos.map((objetivo, index) => (
          <li key={index}>
            <input
              type="text"
              value={objetivo.texto}
              onChange={(e) => onEditObjetivoEspecifico(index, e.target.value)}
            />
            <button onClick={() => onDeleteObjetivoEspecifico(index)}>Eliminar</button>
          </li>
        ))}
      </ul>

      {/* Campo para agregar un nuevo objetivo específico */}
      <div className="nuevo-objetivo-container">
        <input
          type="text"
          placeholder="Escribe un nuevo objetivo específico"
          value={nuevoObjetivo}
          onChange={(e) => setNuevoObjetivo(e.target.value)}
        />
        <button onClick={handleAddObjetivo}>Añadir Objetivo Específico</button>
      </div>
    </div>
  );
}

export default ObjetivosEspecificosForm;
