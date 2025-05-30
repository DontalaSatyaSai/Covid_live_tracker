import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { getVariantData } from '../../data/casesData';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

const VariantPrevalence: React.FC = () => {
  const variantData = getVariantData();
  
  const data = {
    labels: variantData.map(d => d.name),
    datasets: [
      {
        data: variantData.map(d => d.percentage),
        backgroundColor: [
          '#1A5276', // dark blue
          '#2874A6', // medium blue
          '#3498DB', // blue
          '#85C1E9', // light blue
        ],
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    ],
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          boxWidth: 12,
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.label}: ${context.raw}%`;
          }
        }
      }
    },
    cutout: '60%',
  };

  return <Doughnut data={data} options={options} />;
};

export default VariantPrevalence;