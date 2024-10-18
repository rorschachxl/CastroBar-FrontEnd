import React from "react";
import styles from "../diseños/CajasEstadisticas.module.css";
import GraficoVentas from "./GraficoVentas";
import CajasVentas from "./CajasVentas";
import GraficoMesero from "./GraficoMesero";
import GraficoPlatos from "./GraficoPlatos";

const CajasEstadisticas = () => {
    return (
      <div className={styles.estadisticasContainer}>
        <div className={styles.ventasContainer}>
          <CajasVentas />
          <div className={styles.graficoPlatosContainer}>
            <GraficoPlatos />
          </div>
        </div>
        <div className={styles.graficoVentasContainer}>
          <GraficoVentas />
        </div>
        <div >
          <GraficoMesero />
        </div>
      </div>
    );
};

export default CajasEstadisticas;