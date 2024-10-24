import React, { useState } from 'react';
import tinycolor from 'tinycolor2';
import '../../estilos/Login/Button.scss'


const Button = ({label = "Botón", backgroundColor = "#3D3C3B", color = "#DDE3CA", href = null, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const hoverBackgroundColor = tinycolor(backgroundColor).darken(10).toString();
    const buttonStyles = { 
        backgroundColor: isHovered ? hoverBackgroundColor : backgroundColor, 
        color 
};

const handleButtonClick = (event) => {
    
};

if (href) {
    return (
        <a 
            href={href} 
            className="button" 
            style={buttonStyles}
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            {label}
        </a>
    );
}

return (
    <button
        className="button"
        style={buttonStyles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleButtonClick}
    >
        {label} 
    </button>
);
};

export default Button;