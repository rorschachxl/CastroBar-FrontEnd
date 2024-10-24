import React, {useEffect, useState}from 'react'
import '../../estilos/Admin/CajasVentas.scss'
import VentasIcon from '../../img/ventas.png';

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
    <div className="container">
      <div className="box">
        <div className="boxContent">
          <img src={VentasIcon} alt="Ventas Dia Icon" className="icondata" />
          <p className="text">Ventas Dia</p>
          <p className="number">{ventas.ventasDia}</p>
        </div>
      </div>
      <div className="box">
        <div className="boxContent">
          <img src={VentasIcon} alt="Ventas Semana Icon" className="icondata" />
          <p className="text">Ventas Semana</p>
          <p className="number">{ventas.ventasSemana}</p>
        </div>
      </div>
      <div className="box">
        <div className="boxContent">
          <img src={VentasIcon} alt="Ventas Mes Icon" className="icondata" />
          <p className="text">Ventas Mes</p>
          <p className="number">{ventas.ventasMes}</p>
        </div>
      </div>
    </div>
  )
}
export default CajasVentas
