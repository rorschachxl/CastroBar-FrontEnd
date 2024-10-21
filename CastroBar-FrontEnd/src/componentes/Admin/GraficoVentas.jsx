import React from "react";
import {Bar} from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../../estilos/Admin/GraficoVentas.scss';

ChartJS.register (CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);

const GraficoVentas=()=>{
    //simulacion de datos
    const data = {
        labels:['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
        datasets:[
            {
                label:'Ventas mensuales',
                data:[1333971, 1886645, 1416700, 100, 429480, 625216, 371030, 1000730, 0, 0, 0, 0],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };
    const options = {
        indexAxis: 'y', 
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Ventas Mensuales',
          },
        },
      };
    
      return (
        <div className="graphContainer">
          <Bar data={data} options={options} />
        </div>
      )
};
export default GraficoVentas