import React, { useState } from 'react';
import tinycolor from 'tinycolor2';
import styles from './Button.module.css'; 

const Button = ({label = "Botón", backgroundColor = "#3D3C3B", color = "#DDE3CA", href = null }) => {
    const [isHovered, setIsHovered] = useState(false);
    const hoverBackgroundColor = tinycolor(backgroundColor).darken(10).toString();
    const buttonStyles = { 
        backgroundColor: isHovered ? hoverBackgroundColor : backgroundColor, 
        color 
};

if (href) {
    return (
        <a 
            href={href} 
            className={styles.button} 
            style={buttonStyles}
                nMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            {label}
        </a>
    );
}

return (
    <button
        className={styles.button}
        style={buttonStyles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        {label} 
    </button>
);
};

export default Button;
