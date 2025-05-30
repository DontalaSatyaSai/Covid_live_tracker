import React, { useState } from 'react';
import SectionHeading from '../shared/SectionHeading';
import RiskForm from './RiskForm';
import RiskResult from './RiskResult';
import RiskTable from './RiskTable';

interface RiskData {
  ageGroup: string;
  isImmunocompromised: boolean;
}

const RiskAnalyzer: React.FC = () => {
  const [riskData, setRiskData] = useState<RiskData | null>(null);

  const handleSubmit = (data: RiskData) => {
    setRiskData(data);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Know Your Risk" 
          subtitle="Understand your personal risk factors and get tailored recommendations"
          icon="activity"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#1A5276]">Age Group Risk Analyzer</h3>
              <p className="text-gray-600 mb-6">
                Input your information to receive personalized risk assessment and 
                recommendations based on your age and health status.
              </p>
              
              <RiskForm onSubmit={handleSubmit} />
            </div>
            
            {riskData && (
              <div className="mt-6">
                <RiskResult riskData={riskData} />
              </div>
            )}
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-[#1A5276]">Risk Comparison by Age Group</h3>
                <p className="text-gray-600 mb-6">
                  Compare risk levels and vaccine recommendations across different age groups.
                </p>
                
                <RiskTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskAnalyzer;