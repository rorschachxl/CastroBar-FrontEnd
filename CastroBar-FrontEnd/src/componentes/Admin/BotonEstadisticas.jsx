import React from "react";
import  "../../estilos/Admin/Boton.scss"

const Boton = ({ texto, onClick }) => {
    return (
        <button className="boton" onClick={onClick}>
            {texto}
        </button>
    );
};

export default Boton;