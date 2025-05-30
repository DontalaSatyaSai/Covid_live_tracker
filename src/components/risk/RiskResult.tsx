import React from 'react';
import { AlertTriangle, Info, Check } from 'lucide-react';

interface RiskResultProps {
  riskData: {
    ageGroup: string;
    isImmunocompromised: boolean;
  };
}

const RiskResult: React.FC<RiskResultProps> = ({ riskData }) => {
  const { ageGroup, isImmunocompromised } = riskData;
  
  let riskLevel = '';
  let riskIcon = null;
  let riskColor = '';
  let recommendation = '';
  
  // Determine risk level based on age group and immune status
  if (ageGroup === '65+' || isImmunocompromised) {
    riskLevel = 'High Risk';
    riskIcon = <AlertTriangle size={24} />;
    riskColor = 'text-red-600 bg-red-50';
    recommendation = isImmunocompromised 
      ? 'Schedule an annual booster and maintain strict precautions.' 
      : 'Schedule an annual booster and avoid crowded settings.';
  } else if (ageGroup === '18-64') {
    riskLevel = 'Moderate Risk';
    riskIcon = <Info size={24} />;
    riskColor = 'text-amber-600 bg-amber-50';
    recommendation = 'Consider a booster if it has been over 9 months since your last dose.';
  } else {
    riskLevel = 'Low Risk';
    riskIcon = <Check size={24} />;
    riskColor = 'text-green-600 bg-green-50';
    recommendation = 'Follow hygiene protocols and stay updated with recommended vaccinations.';
  }
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 animate-fadeIn">
      <h3 className="text-xl font-semibold mb-4 text-[#1A5276]">Your Risk Assessment</h3>
      
      <div className={`flex items-center gap-2 p-3 rounded-lg ${riskColor} mb-4`}>
        {riskIcon}
        <span className="font-medium">{riskLevel}</span>
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-gray-700">Age Group:</h4>
          <p className="text-gray-900">{ageGroup}</p>
        </div>
        
        <div>
          <h4 className="font-medium text-gray-700">Immune Status:</h4>
          <p className="text-gray-900">{isImmunocompromised ? 'Immunocompromised' : 'Normal'}</p>
        </div>
        
        <div>
          <h4 className="font-medium text-gray-700">Recommendation:</h4>
          <p className="text-gray-900">{recommendation}</p>
        </div>
        
        <div className="pt-4">
          <a 
            href="#recommendations" 
            className="text-[#2E86C1] hover:text-[#1A5276] font-medium flex items-center gap-1"
          >
            <span>View your personalized action plan</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RiskResult;