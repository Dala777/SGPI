// src/pages/GestorDeObjetivos.js
import React from 'react';
import IntegradorForm from '../components/IntegradorForm';
import '../assets/styles/Objetivos.css';


const GestorDeObjetivos = () => {
  return (
    <div className="gestor-de-objetivos">
      <h2>Gestión de Objetivos del Proyecto</h2>

      <div className="descripcion-general">
        <h3>Descripción General del Proyecto</h3>
        <textarea placeholder="Escribe la descripción general del proyecto" />
        <button>Actualizar Descripción</button>
      </div>

      <div className="integradores-container">
        <IntegradorForm integradorNombre="Integrador I" />
        <IntegradorForm integradorNombre="Integrador II" />
        <IntegradorForm integradorNombre="Integrador III" />
        <IntegradorForm integradorNombre="Integrador IV" />
      </div>
    </div>
  );
};

export default GestorDeObjetivos;
