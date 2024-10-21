import React from "react";
import "../../estilos/Admin/CajasEstadisticas.scss"
import GraficoVentas from "../../componentes/Admin/GraficoVentas"
import CajasVentas from "../../componentes/Admin/CajasVentas"
import GraficoMesero from "../../componentes/Admin/GraficoMesero"
import GraficoPlatos from "../../componentes/Admin/GraficoPlatos"
import Boton from "../../componentes/Admin/BotonEstadisticas"

const CajasEstadisticas = () => {
    const manejarClick = () => {
        console.log('Botón presionado');
    };

    return (
        <div className="estadisticasContainer">
            <div>
                <Boton texto="Ver más Detalles" onClick={manejarClick} />
            </div>
            <div className="cajasVentasWrapper">
                <CajasVentas />
            </div>
            <div className="graficoPlatosWrapper">
                <GraficoPlatos />
            </div>
            <div className="graficoVentasWrapper">
                <GraficoVentas />
            </div>
            <div className="graficoMeseroWrapper">
                <GraficoMesero />
            </div>
        </div>
    );
};

export default CajasEstadisticas;


