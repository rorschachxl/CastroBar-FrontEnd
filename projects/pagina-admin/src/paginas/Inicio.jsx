import React from 'react';
import CajasEstadisticas from "../componentes/CajasEstadisticas.jsx";
import styles from '../diseños/Inicio.module.css'
const Inicio = () => {
    return (
    <div className={styles.container}>
        <CajasEstadisticas /> 
    </div>
    );
}

export default Inicio;
