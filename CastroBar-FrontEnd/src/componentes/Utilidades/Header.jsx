import React from 'react';
import '../../estilos/Utilidades/Header.scss';
import CastroBarImage from '../../img/CastroBar.png'; 


const Header = () => {
return (
    <header className="header">
     <div className="CastroBarImage">
        <img src={CastroBarImage} alt="Imagen izquierda" />
     </div> 
    </header>
);
};

export default Header;