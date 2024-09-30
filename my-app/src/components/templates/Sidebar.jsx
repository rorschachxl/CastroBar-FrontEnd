import React, { useState } from 'react';
import './Sidebar.css'; // Importamos los estilos

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // Estado para gestionar si está plegado

const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed); // Cambiamos el estado al hacer clic
};

return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      {/* Botón para plegar/expandir el sidebar */}
    <button onClick={toggleSidebar} className="toggle-btn">
        {isCollapsed ? '>' : '<'}
    </button>

      {/* Menú */}
    <ul className="menu">
        <li className="section">Administración</li>
        <li>
        <a href="#">
            <span className="icono">🪑</span>
            {!isCollapsed && <span>Mesas</span>}
        </a>
        </li>
        <li className="section">Gestión</li>
        <li>
        <a href="#">
            <span className="icono">📦</span>
            {!isCollapsed && <span>Inventario</span>}
        </a>
        </li>
        <li>
        <a href="#">
            <span className="icono">🍽️</span>
            {!isCollapsed && <span>Menú</span>}
        </a>
        </li>
        <li>
        <a href="#">
            <span className="icono">📜</span>
            {!isCollapsed && <span>Recetas</span>}
        </a>
        </li>

        <li className="section">Configuraciones</li>
        <li>
        <a href="#">
            <span className="icono">⚙️</span>
            {!isCollapsed && <span>Roles</span>}
        </a>
        </li>
        <li>
        <a href="#">
            <span className="icono">📊</span>
            {!isCollapsed && <span>Informes</span>}
        </a>
        </li>
    </ul>

      {/* Parte inferior */}
    <div className="bottom-section">
        <div className="notifications">
        <span className="icono">🔔</span>
        {!isCollapsed && <span>Notificaciones</span>}
        <span className="badge">20</span>
        </div>
        <div>
        <span className="icono">❓</span>
        {!isCollapsed && <span>Ayuda</span>}
        </div>
        <div>
        <span className="icono">⚙️</span>
        {!isCollapsed && <span>Configuraciones</span>}
        </div>
        <div className="profile">
        <span className="icono">👤</span>
        {!isCollapsed && <span>Mateo Maduro</span>}
        </div>
    </div>
    </div>
);
};

export default Sidebar;
