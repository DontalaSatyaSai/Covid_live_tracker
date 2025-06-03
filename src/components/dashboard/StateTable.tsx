import React from 'react';
import { StateData } from '../../services/api';

interface StateTableProps {
  data: StateData[];
}

const StateTable: React.FC<StateTableProps> = ({ data }) => {
  const downloadCSV = () => {
    const headers = ['S. No.', 'State / UT', 'Active Cases', 'Recovered', 'Deaths'];
    const rows = data.map((state, index) => [
      index + 1,
      state.state,
      state.active.toLocaleString(),
      state.recovered.toLocaleString(),
      state.deaths.toLocaleString()
    ]);
    const csvContent = [
      headers,
      ...rows
    ].map(row => row.map(val => `"${val.toString().replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'statewise_covid_data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1.2rem 0 0.8rem 0',
        margin: '0 auto',
        maxWidth: '420px',
      }}
    >
      <button
        onClick={downloadCSV}
        style={{
          backgroundColor: '#1A5276',
          color: '#fff',
          padding: '0.65rem 1.4rem',
          border: 'none',
          borderRadius: '0.5rem',
          fontSize: '1rem',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'background-color 0.2s ease',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
        }}
        onMouseOver={e => (e.currentTarget.style.backgroundColor = '#2874A6')}
        onMouseOut={e => (e.currentTarget.style.backgroundColor = '#1A5276')}
      >
        Download State-Wise Data (CSV)
      </button>
    </div>
  );
};

export default StateTable;
