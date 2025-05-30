import React from 'react';
import SectionHeading from '../shared/SectionHeading';
import TreatmentCard from './TreatmentCard';
import { getTreatmentsData } from '../../data/treatmentsData';

const TreatmentsSection: React.FC = () => {
  const treatments = getTreatmentsData();

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Latest Treatments & Research" 
          subtitle="Current protocols and emerging research for COVID-19 management"
          icon="microscope"
        />
        
        <div className="space-y-4 mb-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-blue-50 px-3 text-lg font-medium text-gray-900">Current Management</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {treatments.filter(t => t.type === 'current').map((treatment) => (
              <TreatmentCard key={treatment.id} treatment={treatment} />
            ))}
          </div>
        </div>
        
        <div className="space-y-4 mt-12">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-blue-50 px-3 text-lg font-medium text-gray-900">Emerging Research</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {treatments.filter(t => t.type === 'research').map((treatment) => (
              <TreatmentCard key={treatment.id} treatment={treatment} />
            ))}
          </div>
        </div>
        
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Research & Educational Resources</h3>
          <p className="text-gray-600 mb-6">
            Stay updated with the latest peer-reviewed research and expert explanations
            of current COVID-19 treatment approaches.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a 
              href="#" 
              className="flex p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="min-w-0 flex-1">
                <h4 className="text-base font-medium text-[#1A5276]">
                  Video: Understanding the JN.1 Variant
                </h4>
                <p className="text-sm text-gray-500">
                  Expert explanation of the 2025 dominant variant
                </p>
              </div>
              <div className="ml-4 flex-shrink-0 self-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
            
            <a 
              href="#" 
              className="flex p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="min-w-0 flex-1">
                <h4 className="text-base font-medium text-[#1A5276]">
                  Latest Studies on PubMed
                </h4>
                <p className="text-sm text-gray-500">
                  Curated research on 2025 treatment protocols
                </p>
              </div>
              <div className="ml-4 flex-shrink-0 self-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;