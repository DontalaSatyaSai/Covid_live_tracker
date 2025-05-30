import React from 'react';
import SectionHeading from '../shared/SectionHeading';
import FactorsBubbleChart from './FactorsBubbleChart';
import FactorCard from './FactorCard';
import { getFactorsData } from '../../data/factorsData';

const FactorsSection: React.FC = () => {
  const factors = getFactorsData();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Why Cases Are Rising" 
          subtitle="Understanding the key factors behind the 2025 COVID-19 spike"
          icon="trendingUp"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-8">
          <div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#1A5276]">Key Driving Factors</h3>
              <p className="text-gray-600 mb-6">
                The size of each bubble represents the relative impact of each factor
                on the current COVID-19 spike in India.
              </p>
              
              <div className="h-80">
                <FactorsBubbleChart />
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#1A5276]">Factor Analysis</h3>
              <p className="text-gray-600 mb-6">
                Detailed explanation of the primary factors contributing to the 2025 COVID-19 spike.
              </p>
              
              <div className="space-y-4">
                {factors.map((factor) => (
                  <FactorCard key={factor.id} factor={factor} />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-6 mt-8">
          <h3 className="font-semibold text-lg mb-3 text-[#1A5276]">Regional Comparison</h3>
          <p className="text-gray-600 mb-4">
            How India's COVID-19 driving factors compare to other regions globally:
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 bg-white text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Factor
                  </th>
                  <th className="px-4 py-3 bg-white text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    India
                  </th>
                  <th className="px-4 py-3 bg-white text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Asia
                  </th>
                  <th className="px-4 py-3 bg-white text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Europe
                  </th>
                  <th className="px-4 py-3 bg-white text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Americas
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    JN.1 Subvariant
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">High</span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">High</span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Medium</span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Medium</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Waning Immunity
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">High</span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Medium</span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Medium</span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Medium</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Relaxed Protocols
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">High</span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Medium</span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Low</span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Medium</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactorsSection;