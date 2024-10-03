import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
import styles from './Sidebar.module.css'; 

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
        <div className={styles.sidebar}>
            <div className={styles.adminSection}>
                <h2 className={styles.roleTitle}>{'Administrador'}</h2>
                <ul>
                    <li className={styles.sidebarItem}>
                        <Link to="/template" className={styles.link}>
                            <img src={HomeIcon} alt="Inicio" className={styles.icon} /> Inicio
                        </Link>
                    </li>
                </ul>
            </div>
            <hr/>
            <div className={styles.Section}>
                <h3 className={styles.sectionTitle}>Administración</h3>
                <ul>
                    <li className={styles.sidebarItem}>
                        <Link to="/mesas" className={styles.link}>
                            <img src={MesasIcon} alt="Mesas" className={styles.icon} /> Mesas
                        </Link>
                    </li>
                </ul>
                <hr/>
                <h3 className={styles.Title}>Gestión</h3>
                <ul>
                    <li className={styles.sidebarItem}>
                        <Link to="/inventario" className={styles.link}>
                            <img src={InventarioIcon} alt="Inventario" className={styles.icon} /> Inventario
                        </Link>
                    </li>
                    <li className={styles.sidebarItem}>
                        <Link to="/menu" className={styles.link}>
                            <img src={MenuIcon} alt="Menú" className={styles.icon} /> Menú
                        </Link>
                    </li>
                    <li className={styles.sidebarItem}>
                        <Link to="/recetas" className={styles.link}>
                            <img src={RecetasIcon} alt="Recetas" className={styles.icon} /> Recetas
                        </Link>
                    </li>
                </ul>
            </div>
            <hr/>
            <div className={styles.Section}>
                <h3 className={styles.sectionTitle}>Configuraciones</h3>
                <ul>
                    <li className={styles.sidebarItem}>
                        <Link to="/roles" className={styles.link}>
                            <img src={RolesIcon} alt="Roles" className={styles.icon} /> Roles
                        </Link>
                    </li>
                    <li className={styles.sidebarItem}>
                        <Link to="/informes" className={styles.link}>
                            <img src={InformesIcon} alt="Informes" className={styles.icon} /> Informes
                        </Link>
                    </li>
                </ul>
            </div>
            <br/><br/><br/><br/><br/>
            <div className={styles.Section}>
                <ul>
                    <li className={styles.sidebarItem}>
                        <Link to="/ayuda" className={styles.link}>
                            <img src={AyudaIcon} alt="Ayuda" className={styles.icon} /> Ayuda
                        </Link>
                    </li>
                    <li className={styles.sidebarItem}>
                        <Link to="/configuraciones" className={styles.link}>
                            <img src={ConfiguracionesIcon} alt="Configuraciones" className={styles.icon} /> Configuración
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.userSection}>
                <div className={styles.userProfile}>
                    <img src={RoleIcon} alt="Usuario" className={styles.iconUser} />
                    <span>{user.name}</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
