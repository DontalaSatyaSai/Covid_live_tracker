import React from 'react';
import { 
  BarChart3, 
  ShieldCheck, 
  Activity, 
  Microscope, 
  TrendingUp, 
  Stethoscope 
} from 'lucide-react';

const NavigationButtons: React.FC = () => {
  const buttons = [
    { id: 'dashboard', label: 'Live Tracker', icon: <BarChart3 size={20} /> },
    { id: 'precautions', label: 'Precautions', icon: <ShieldCheck size={20} /> },
    { id: 'risk', label: 'Risk Analyzer', icon: <Activity size={20} /> },
    { id: 'treatments', label: 'Treatments', icon: <Microscope size={20} /> },
    { id: 'factors', label: 'Driving Factors', icon: <TrendingUp size={20} /> },
    { id: 'recommendations', label: 'Your Action Plan', icon: <Stethoscope size={20} /> },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {buttons.map((button) => (
        <a
          key={button.id}
          href={`#${button.id}`}
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-3 rounded-lg font-medium transition-all duration-300"
        >
          {button.icon}
          <span>{button.label}</span>
        </a>
      ))}
    </div>
  );
};

export default NavigationButtons;