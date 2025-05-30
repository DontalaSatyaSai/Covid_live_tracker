import React from 'react';
import { ShieldAlert, ShieldCheck, Home } from 'lucide-react';

interface Precaution {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface PrecautionCardProps {
  precaution: Precaution;
}

const PrecautionCard: React.FC<PrecautionCardProps> = ({ precaution }) => {
  const getIcon = () => {
    switch (precaution.icon) {
      case 'mask':
        return <ShieldAlert size={40} className="text-[#1A5276]" />;
      case 'hand':
        return <ShieldCheck size={40} className="text-[#1A5276]" />;
      case 'home':
        return <Home size={40} className="text-[#1A5276]" />;
      default:
        return <ShieldAlert size={40} className="text-[#1A5276]" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 bg-blue-50 p-4 rounded-full">
            {getIcon()}
          </div>
          <h3 className="font-bold text-xl mb-2 text-[#1A5276]">{precaution.title}</h3>
          <p className="text-gray-600">{precaution.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PrecautionCard;