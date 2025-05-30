import React from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import { getFactorsData } from '../../data/factorsData';

// Register ChartJS components
ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const FactorsBubbleChart: React.FC = () => {
  const factors = getFactorsData();
  
  // Transform factor data for the bubble chart
  const bubbleData = factors.map((factor, index) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    r: factor.impact * 15, // Scale the radius based on impact
    label: factor.name
  }));
  
  const data = {
    datasets: [
      {
        label: 'Driving Factors',
        data: bubbleData,
        backgroundColor: bubbleData.map((_, i) => {
          const colors = ['rgba(26, 82, 118, 0.7)', 'rgba(46, 134, 193, 0.7)', 'rgba(52, 152, 219, 0.7)', 'rgba(133, 193, 233, 0.7)'];
          return colors[i % colors.length];
        }),
        borderColor: bubbleData.map((_, i) => {
          const colors = ['rgb(26, 82, 118)', 'rgb(46, 134, 193)', 'rgb(52, 152, 219)', 'rgb(133, 193, 233)'];
          return colors[i % colors.length];
        }),
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
        min: -10,
        max: 110,
      },
      y: {
        display: false,
        min: -10,
        max: 110,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const label = context.raw.label || '';
            const impact = context.raw.r / 15; // Convert back to original impact value
            return `${label}: Impact ${impact.toFixed(1)}/5`;
          }
        }
      }
    },
    elements: {
      point: {
        radius: function(context: any) {
          const index = context.dataIndex;
          return data.datasets[0].data[index].r;
        },
        hoverRadius: function(context: any) {
          const index = context.dataIndex;
          return data.datasets[0].data[index].r + 5;
        },
      },
    },
  };

  return <Scatter data={data} options={options} />;
};

export default FactorsBubbleChart;