import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './graficas.css'
import Chart from 'chart.js/auto';

function GraficaProductos() {
  const [categoria1Count, setCategoria1Count] = useState(0);
  const [categoria2Count, setCategoria2Count] = useState(0);

  useEffect(() => {
    axios.get('http://192.168.16.172:3000/api/productos')
      .then(response => {
        const productos = response.data;
        let countCategoria1 = 0;
        let countCategoria2 = 0;

        productos.forEach(producto => {
          if (producto.Categoria === 1 && countCategoria1 < 10) {
            countCategoria1++;
          } else if (producto.Categoria === 2 && countCategoria2 < 10) {
            countCategoria2++;
          }
        });

        const totalProductos = countCategoria1 + countCategoria2;
        const categoria1Porcentaje = (countCategoria1 / totalProductos) * 100;
        const categoria2Porcentaje = (countCategoria2 / totalProductos) * 100;

        setCategoria1Count(categoria1Porcentaje);
        setCategoria2Count(categoria2Porcentaje);

        dibujarGrafica(categoria1Porcentaje, categoria2Porcentaje);
      })
      .catch(error => {
        console.error('Error al obtener productos:', error);
      });
  }, []);

  const dibujarGrafica = (categoria1Porcentaje, categoria2Porcentaje) => {
    const ctx = document.getElementById('graficaProductos');

    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Categoría 1', 'Categoría 2'],
        datasets: [{
          label: 'Distribución de Productos',
          data: [categoria1Porcentaje, categoria2Porcentaje],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1,
        }],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: ' Productos por Categoría',
          },
        },
      },
    });
  };

  return (
    <div className='graficas '>
 
 <canvas id="graficaProductos" ></canvas>
    </div>
  );
}

export default GraficaProductos;