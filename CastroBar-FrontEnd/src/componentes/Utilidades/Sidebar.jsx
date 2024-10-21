import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from './Usercontext'
import '../../estilos/Utilidades/Sidebar.scss'

import HomeIcon from '../../img/home.png';
import MesasIcon from '../../img/mesas.png';
import InventarioIcon from '../../img/inventario.png';
import MenuIcon from '../../img/menu.png';
import RecetasIcon from '../../img/recetas.png';
import RolesIcon from '../../img/roles.png';
import RoleIcon from '../../img/image.png';
import InformesIcon from '../../img/informes.png';
import AyudaIcon from '../../img/question-circle.svg';
import ConfiguracionesIcon from '../../img/gear.svg';


const Sidebar = () => {
    const { user } = useContext(UserContext);  
    return (
        <div className="sidebar">
            <div className="adminSection">
                <h2 className="roleTitle">{'Administrador'}</h2>
                <ul>
                    <li className="sidebarItem">
                        <NavLink to="/"  className={({ isActive }) => isActive ? `$ link active` : "link"}> 
                            <img src={HomeIcon} alt="Inicio" className="icon" /> Inicio
                        </NavLink>
                    </li>
                </ul>
            </div>
            <hr/>
            <div className="Section">
                <h3 className="sectionTitle">Administración</h3>
                <ul>
                    <li className="sidebarItem">
                        <NavLink to="/Mesas" className={({ isActive }) => isActive ? `$ link active` : "link"}>
                            <img src={MesasIcon} alt="Mesas" className="icon" /> Mesas
                        </NavLink>
                    </li>
                </ul>
                <hr/>
                <h3 className="Title">Gestión</h3>
                <ul>
                    <li className="sidebarItem">
                        <NavLink to="/Inventario" className={({ isActive }) => isActive ? `$ link active` : "link"}>
                            <img src={InventarioIcon} alt="Inventario" className="icon" /> Inventario
                        </NavLink>
                    </li>
                    <li className="sidebarItem">
                        <NavLink to="/Menu" className={({ isActive }) => isActive ? `$ link active` : "link"}>
                            <img src={MenuIcon} alt="Menú" className="icon" /> Menú
                        </NavLink>
                    </li>
                    <li className="sidebarItem">
                        <NavLink to="/Recetas" className={({ isActive }) => isActive ? `$ link active` : "link"}>
                            <img src={RecetasIcon} alt="Recetas" className="icon" /> Recetas
                        </NavLink>
                    </li>
                </ul>
            </div>
            <hr/>
            <div className="Section">
                <h3 className="sectionTitle">Configuraciones</h3>
                <ul>
                    <li className="sidebarItem">
                        <NavLink to="/Roles"className={({ isActive }) => isActive ? `$link active` : "link"}>
                            <img src={RolesIcon} alt="Roles" className="icon" /> Roles
                        </NavLink>
                    </li>
                    <li className="sidebarItem">
                        <NavLink to="/Informes" className={({ isActive }) => isActive ? `$link active` : "link"}>
                            <img src={InformesIcon} alt="Informes" className="icon" /> Informes
                        </NavLink>
                    </li>
                </ul>
            </div>
            <br/><br/><br/><br/><br/>
            <div className="Section">
                <ul>
                    <li className="sidebarItem">
                        <NavLink to="/Ayuda" className={({ isActive }) => isActive ? `$link active` : "link"}>
                            <img src={AyudaIcon} alt="Ayuda" className="icon" /> Ayuda
                        </NavLink>
                    </li>
                    <li className="sidebarItem">
                        <NavLink to="/Configuraciones"className={({ isActive }) => isActive ? `$link active` : "link"}>
                            <img src={ConfiguracionesIcon} alt="Configuraciones" className="icon" /> Configuración
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="userSection">
                <div className="userProfile">    
                    <img src={RoleIcon} alt="Usuario" className="iconUser" />
                    <h2 className="roleUser">{user.name}</h2>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;