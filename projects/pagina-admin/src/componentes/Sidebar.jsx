import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from './Usercontext';
import styles from './Sidebar.module.css'

import HomeIcon from '../img/home.png';
import MesasIcon from '../img/mesas.png';
import InventarioIcon from '../img/inventario.png';
import MenuIcon from '../img/menu.png';
import RecetasIcon from '../img/recetas.png';
import RolesIcon from '../img/roles.png';
import RoleIcon from '../img/image.png';
import InformesIcon from '../img/informes.png';
import AyudaIcon from '../img/question-circle.svg';
import ConfiguracionesIcon from '../img/gear.svg';


const Sidebar = () => {
    const { user } = useContext(UserContext);  
    return (
        <div className={styles.sidebar}>
            <div className={styles.adminSection}>
                <h2 className={styles.roleTitle}>{'Administrador'}</h2>
                <ul>
                    <li className={styles.sidebarItem}>
                        <NavLink to="/"  className={({ isActive }) => isActive ? `${styles.link} active` : styles.link}> 
                            <img src={HomeIcon} alt="Inicio" className={styles.icon} /> Inicio
                        </NavLink>
                    </li>
                </ul>
            </div>
            <hr/>
            <div className={styles.Section}>
                <h3 className={styles.sectionTitle}>Administración</h3>
                <ul>
                    <li className={styles.sidebarItem}>
                        <NavLink to="/Mesas" className={({ isActive }) => isActive ? `${styles.link} active` : styles.link}>
                            <img src={MesasIcon} alt="Mesas" className={styles.icon} /> Mesas
                        </NavLink>
                    </li>
                </ul>
                <hr/>
                <h3 className={styles.Title}>Gestión</h3>
                <ul>
                    <li className={styles.sidebarItem}>
                        <NavLink to="/Inventario" className={({ isActive }) => isActive ? `${styles.link} active` : styles.link}>
                            <img src={InventarioIcon} alt="Inventario" className={styles.icon} /> Inventario
                        </NavLink>
                    </li>
                    <li className={styles.sidebarItem}>
                        <NavLink to="/Menu" className={({ isActive }) => isActive ? `${styles.link} active` : styles.link}>
                            <img src={MenuIcon} alt="Menú" className={styles.icon} /> Menú
                        </NavLink>
                    </li>
                    <li className={styles.sidebarItem}>
                        <NavLink to="/Recetas" className={({ isActive }) => isActive ? `${styles.link} active` : styles.link}>
                            <img src={RecetasIcon} alt="Recetas" className={styles.icon} /> Recetas
                        </NavLink>
                    </li>
                </ul>
            </div>
            <hr/>
            <div className={styles.Section}>
                <h3 className={styles.sectionTitle}>Configuraciones</h3>
                <ul>
                    <li className={styles.sidebarItem}>
                        <NavLink to="/Roles"className={({ isActive }) => isActive ? `${styles.link} active` : styles.link}>
                            <img src={RolesIcon} alt="Roles" className={styles.icon} /> Roles
                        </NavLink>
                    </li>
                    <li className={styles.sidebarItem}>
                        <NavLink to="/Informes" className={({ isActive }) => isActive ? `${styles.link} active` : styles.link}>
                            <img src={InformesIcon} alt="Informes" className={styles.icon} /> Informes
                        </NavLink>
                    </li>
                </ul>
            </div>
            <br/><br/><br/><br/><br/>
            <div className={styles.Section}>
                <ul>
                    <li className={styles.sidebarItem}>
                        <NavLink to="/Ayuda" className={({ isActive }) => isActive ? `${styles.link} active` : styles.link}>
                            <img src={AyudaIcon} alt="Ayuda" className={styles.icon} /> Ayuda
                        </NavLink>
                    </li>
                    <li className={styles.sidebarItem}>
                        <NavLink to="/Configuraciones"className={({ isActive }) => isActive ? `${styles.link} active` : styles.link}>
                            <img src={ConfiguracionesIcon} alt="Configuraciones" className={styles.icon} /> Configuración
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className={styles.userSection}>
                <div className={styles.userProfile}>    
                    <img src={RoleIcon} alt="Usuario" className={styles.iconUser} />
                    <h2 className={styles.roleUser}>{user.name}</h2>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;