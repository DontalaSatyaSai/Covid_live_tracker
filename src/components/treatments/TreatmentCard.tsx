import React from 'react';
import { Microscope, Beaker, Pill, ExternalLink } from 'lucide-react';

interface Treatment {
  id: string;
  type: 'current' | 'research';
  title: string;
  description: string;
  date: string;
  source?: string;
  sourceUrl?: string;
}

interface TreatmentCardProps {
  treatment: Treatment;
}

const TreatmentCard: React.FC<TreatmentCardProps> = ({ treatment }) => {
  const getIcon = () => {
    if (treatment.type === 'research') {
      return <Beaker size={24} className="text-[#1A5276]" />;
    }
    return <Pill size={24} className="text-[#1A5276]" />;
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-blue-50 p-2 rounded-full">
            {getIcon()}
          </div>
          <div className="ml-4">
            <h3 className="font-semibold text-lg text-[#1A5276] mb-2">{treatment.title}</h3>
            <p className="text-gray-600 mb-3">{treatment.description}</p>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">{treatment.date}</span>
              {treatment.source && (
                <a 
                  href={treatment.sourceUrl || '#'} 
                  className="flex items-center gap-1 text-[#2E86C1] hover:text-[#1A5276]"
                >
                  <span>{treatment.source}</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentCard;