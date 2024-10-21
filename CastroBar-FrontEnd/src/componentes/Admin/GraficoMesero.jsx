import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../../estilos/Admin/GraficoMesero.scss';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GraficoMesero = () => {
  const data = {
    //simulacion de datos
    labels: ['Mesero 1', 'Mesero 2', 'Mesero 3', 'Mesero 4'], 
    datasets: [
      {
        label: 'Pedidos Atendidos',
        data: [10, 15, 7, 20], // Datos simulados de los meseros
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Meseros del Día',
      },
    },
  };

  return (
    <div className="graphContainer">
      <Bar data={data} options={options} />
    </div>
  )
};

export default GraficoMesero;