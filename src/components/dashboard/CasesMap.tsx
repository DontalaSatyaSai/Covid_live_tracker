import React from 'react';
import { StateData } from '../../services/api';

interface CasesMapProps {
  data: StateData[];
}

const BOX_COLOR = '#2874A6'; // Consistent blue for all boxes
const FONT_COLOR = '#fff';   // Consistent white text

const CasesMap: React.FC<CasesMapProps> = ({ data }) => {
  // Ensure exactly 9 boxes for layout
  const boxes = data.slice(0, 9);
  while (boxes.length < 9) {
    boxes.push({
      state: '',
      confirmed: 0,
      active: 0,
      recovered: 0,
      deaths: 0,
      lastUpdated: ''
    });
  }

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '700px', // Prevents grid from being too wide on large screens
        margin: '0 auto',
        minHeight: '30px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        gap: '0.8rem',
        background: '#fff',
        padding: '0.8rem 0',
        boxSizing: 'border-box',
      }}
    >
      {boxes.map((state, idx) => (
        <div
          key={state.state || idx}
          style={{
            background: BOX_COLOR,
            color: FONT_COLOR,
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', // vertical center
            alignItems: 'center',     // horizontal center
            fontWeight: 600,
            fontSize: '1rem',
            minHeight: 0,
            height: '125px',
            width: '100%',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            transition: 'box-shadow 0.2s',
            padding: '0.5rem 0.2rem'
          }}
        >
          {state.state ? (
            <>
              <div style={{ fontSize: '1.3rem', marginBottom: '0.08em', letterSpacing: '0.3px', textAlign: 'center' }}>{state.state}</div>
              <div style={{ fontSize: '1.7rem', margin: '0.08em 0', fontWeight: 700, textAlign: 'center' }}>{state.active.toLocaleString()}</div>
              <div style={{ fontSize: '1rem', fontWeight: 400, textAlign: 'center', opacity: 0.95 }}>Active Cases</div>
            </>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default CasesMap;
