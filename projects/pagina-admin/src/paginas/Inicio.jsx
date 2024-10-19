import React from 'react';
import CajasEstadisticas from "../componentes/componentesIncio/CajasEstadisticas"
import styles from '../diseños/diseñosIncio/Inicio.module.css'
const Inicio = () => {
    return (
    <div className={styles.container}>
        <CajasEstadisticas /> 
    </div>
    );
}

export default Inicio;
