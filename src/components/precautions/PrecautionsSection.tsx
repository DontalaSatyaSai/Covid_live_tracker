import React from 'react';
import SectionHeading from '../shared/SectionHeading';
import PrecautionCard from './PrecautionCard';
import { Download } from 'lucide-react';
import { getPrecautionsData } from '../../data/precautionsData';

const PrecautionsSection: React.FC = () => {
  const precautions = getPrecautionsData();

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Stay Safe: Key Precautions" 
          subtitle="Essential guidelines to protect yourself and others"
          icon="shield"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {precautions.map((precaution) => (
            <PrecautionCard key={precaution.id} precaution={precaution} />
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h3 className="text-lg font-semibold mb-3">Additional Resources</h3>
          <p className="text-gray-600 mb-4">
            Download our comprehensive guidelines and educational materials to stay informed
            about the latest COVID-19 prevention measures.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href="#" 
              className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Download size={20} className="text-[#1A5276]" />
              <div>
                <p className="font-medium">Complete Precautions Guide</p>
                <p className="text-sm text-gray-500">PDF, 2.4MB</p>
              </div>
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Download size={20} className="text-[#1A5276]" />
              <div>
                <p className="font-medium">Home Isolation Protocol</p>
                <p className="text-sm text-gray-500">PDF, 1.8MB</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrecautionsSection;