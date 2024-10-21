import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DatosGenerales from './pages/DatosGenerales';  // Importa el componente DatosGenerales
import GestorDeObjetivos from './pages/GestorDeObjetivos';
import './assets/styles/App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Sidebar />
                <div className="content">
                    <Routes>
                        {/* Actualiza la ruta para mostrar el componente DatosGenerales */}
                        <Route path="/datos-generales" element={<DatosGenerales />} />
                        <Route path="/gestor-objetivos" element={<GestorDeObjetivos/>} />
                        <Route path="/gestor-recursos" element={<div>Gestor de Recursos</div>} />
                        <Route path="/tablero" element={<div>Tablero (Kanban o Scrum)</div>} />
                        <Route path="/observaciones" element={<div>Observaciones</div>} />
                        <Route path="/logout" element={<div>Cerrar Sesión</div>} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
