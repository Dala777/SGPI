import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>Student Dashboard</h2>
            </div>
            <ul className="sidebar-menu">
                <li>
                    <Link to="/datos-generales">Datos Generales</Link>
                </li>
                <li>
                    <Link to="/gestor-objetivos">Gestor de Objetivos</Link>
                </li>
                <li>
                    <Link to="/gestor-recursos">Gestor de Recursos</Link>
                </li>
                <li>
                    <Link to="/tablero">Tablero (Kanban o Scrum)</Link>
                </li>
                <li>
                    <Link to="/observaciones">Observaciones</Link>
                </li>
                <li>
                    <Link to="/logout">Cerrar Sesión</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
