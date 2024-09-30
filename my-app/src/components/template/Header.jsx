import React from 'react';
import styles from './Header.module.css';
import CastroBarImage from '../../img/CastroBar.png'; 


const Header = () => {
return (
<header className={styles.header}>
    <div className={styles.CastroBarImage}>
    <img src={CastroBarImage} alt="Imagen izquierda" />
    </div>
    </header>
);
};

export default Header;
