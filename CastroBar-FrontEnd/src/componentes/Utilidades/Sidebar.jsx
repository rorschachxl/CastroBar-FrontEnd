import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
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
import Proveedores from '../../img/proveedores.png'
import { usuarioActual } from '../../Querys/Auth.query';

const Sidebar = () => {
    console.log(usuarioActual)
    return (
        <div className="sidebar">
            <div className="adminSection">
                <h2 className="roleTitle">Administrador</h2>
                <ul>
                    <li className="sidebarItem">
                        <NavLink to="/dashboard"  className={({ isActive }) => isActive ? `$ link active` : "link"}> 
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
                    <li className="sidebarItem">
                        <NavLink to="/Roles"className={({ isActive }) => isActive ? `$link active` : "link"}>
                            <img src={RolesIcon} alt="Roles" className="icon" /> Usuarios
                        </NavLink>
                    </li>
                    <li className="sidebarItem">
                        <NavLink to="/Proveedores"className={({ isActive }) => isActive ? `$link active` : "link"}>
                            <img src={Proveedores} alt="Proveedores" className="icon" /> Provedores
                        </NavLink>
                    </li>
                </ul>
            </div>
            <hr/>
            <div className="Section">
                <h3 className="sectionTitle">Configuraciones</h3>
                <ul>
                    <li className="sidebarItem">
                        <NavLink to="/Informes" className={({ isActive }) => isActive ? `$link active` : "link"}>
                            <img src={InformesIcon} alt="Informes" className="icon" /> Informes
                        </NavLink>
                    </li>
                </ul>
            </div>
            <br/><br/><br/><br/><br/>
            <div className="Section">
            </div>
        </div>
    );
};

export default Sidebar;