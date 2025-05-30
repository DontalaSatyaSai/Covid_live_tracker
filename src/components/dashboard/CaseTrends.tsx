import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { getCaseTrendsData } from '../../data/casesData';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CaseTrends: React.FC = () => {
  const caseTrendsData = getCaseTrendsData();
  
  const data = {
    labels: caseTrendsData.dates,
    datasets: [
      {
        label: 'New Cases',
        data: caseTrendsData.newCases,
        borderColor: '#2E86C1',
        backgroundColor: 'rgba(46, 134, 193, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    interaction: {
      mode: 'nearest' as const,
      axis: 'x' as const,
      intersect: false,
    },
  };

  return <Line data={data} options={options} />;
};

export default CaseTrends;