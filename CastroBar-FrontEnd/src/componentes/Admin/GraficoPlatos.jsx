import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import '../../estilos/Admin/GraficoPlatos.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

const GraficoPlatos = () => {
  const data = {
    labels: ['Plato 1', 'Plato 2', 'Plato 3', 'Plato 4', 'Plato 5'],
    datasets: [
      {
        label: 'Platos más vendidos',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="graphContainer">
      <h3>Ventas de Platos</h3>
      <Pie data={data} options={{ responsive: true }} />
    </div>
  );
};

export default GraficoPlatos;
