import React, {useEffect, useState}from 'react';
import Caja from '../diseños/CajasVentas.module.css';
import VentasIcon from '../img/ventas.png';

const CajasVentas = () => {
  const [ventas, setVentas]=useState({
    ventasDia:0,
    ventasSemana:0,
    ventasMes:0
  });
  useEffect(()=>{
    const fetchVentas= async()=>{
      setTimeout(()=>{
        const simulacion={
          ventasDia:30,
          ventasSemana:200,
          ventasMes:1000
        };
        setVentas(simulacion);
      },);
    };
    fetchVentas();
  },[]);
  return(
    <div className={Caja.container}>
      <div className={Caja.box}>
        <div className={Caja.boxContent}>
          <img src={VentasIcon} alt="Ventas Dia Icon" className={Caja.icon} />
          <p className={Caja.text}>Ventas Dia</p>
          <p className={Caja.number}>{ventas.ventasDia}</p>
        </div>
      </div>
      <div className={Caja.box}>
        <div className={Caja.boxContent}>
          <img src={VentasIcon} alt="Ventas Semana Icon" className={Caja.icon} />
          <p className={Caja.text}>Ventas Semana</p>
          <p className={Caja.number}>{ventas.ventasSemana}</p>
        </div>
      </div>
      <div className={Caja.box}>
        <div className={Caja.boxContent}>
          <img src={VentasIcon} alt="Ventas Mes Icon" className={Caja.icon} />
          <p className={Caja.text}>Ventas Mes</p>
          <p className={Caja.number}>{ventas.ventasMes}</p>
        </div>
      </div>
    </div>
  )
}
export default CajasVentas
