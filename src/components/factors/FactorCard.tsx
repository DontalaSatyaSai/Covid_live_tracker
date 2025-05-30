import React from 'react';
import { TrendingUp, Zap, Users, Brush as Virus } from 'lucide-react';

interface Factor {
  id: string;
  name: string;
  description: string;
  impact: number;
  icon: string;
}

interface FactorCardProps {
  factor: Factor;
}

const FactorCard: React.FC<FactorCardProps> = ({ factor }) => {
  const getIcon = () => {
    switch (factor.icon) {
      case 'variant':
        return <Virus size={20} className="text-[#1A5276]" />;
      case 'immunity':
        return <Zap size={20} className="text-[#1A5276]" />;
      case 'protocols':
        return <Users size={20} className="text-[#1A5276]" />;
      default:
        return <TrendingUp size={20} className="text-[#1A5276]" />;
    }
  };
  
  // Generate impact dots based on factor impact (1-5 scale)
  const impactDots = Array.from({ length: 5 }).map((_, i) => (
    <div 
      key={i} 
      className={`w-2 h-2 rounded-full ${
        i < factor.impact ? 'bg-[#1A5276]' : 'bg-gray-200'
      }`}
    ></div>
  ));

  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
      <div className="flex items-start">
        <div className="flex-shrink-0 bg-blue-50 p-2 rounded-full">
          {getIcon()}
        </div>
        <div className="ml-3 flex-1">
          <div className="flex justify-between items-start">
            <h4 className="font-medium text-[#1A5276]">{factor.name}</h4>
            <div className="flex space-x-1">
              {impactDots}
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-1">{factor.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FactorCard;