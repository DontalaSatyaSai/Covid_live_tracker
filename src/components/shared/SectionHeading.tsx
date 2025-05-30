import React from 'react';
import { BarChart3, ShieldCheck, Activity, Microscope, TrendingUp, Stethoscope } from 'lucide-react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  icon: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, icon }) => {
  const getIcon = () => {
    switch (icon) {
      case 'chart':
        return <BarChart3 size={32} className="text-[#1A5276]" />;
      case 'shield':
        return <ShieldCheck size={32} className="text-[#1A5276]" />;
      case 'activity':
        return <Activity size={32} className="text-[#1A5276]" />;
      case 'microscope':
        return <Microscope size={32} className="text-[#1A5276]" />;
      case 'trendingUp':
        return <TrendingUp size={32} className="text-[#1A5276]" />;
      case 'stethoscope':
        return <Stethoscope size={32} className="text-[#1A5276]" />;
      default:
        return <BarChart3 size={32} className="text-[#1A5276]" />;
    }
  };

  return (
    <div className="text-center mb-12">
      <div className="flex justify-center mb-4">
        {getIcon()}
      </div>
      <h2 className="text-3xl font-bold text-[#1A5276] mb-2">{title}</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      <div className="w-20 h-1 bg-[#1A5276] mx-auto mt-6"></div>
    </div>
  );
};

export default SectionHeading;