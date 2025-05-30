import React from 'react';
import { Calendar, MapPin, Wine as Vaccine, AlertTriangle, CheckCircle } from 'lucide-react';

interface RecommendationPlanProps {
  userData: {
    ageGroup: string;
    isImmunocompromised: boolean;
    location: string;
  };
  onFeedback: () => void;
}

const RecommendationPlan: React.FC<RecommendationPlanProps> = ({ userData, onFeedback }) => {
  const { ageGroup, isImmunocompromised, location } = userData;
  
  // Generate recommendations based on user data
  const getRecommendations = () => {
    let vaccinationRec = '';
    let precautionRec = '';
    let monitoringRec = '';
    let riskLevel = '';
    
    // Vaccination recommendations
    if (ageGroup === '65+' || isImmunocompromised) {
      vaccinationRec = 'Schedule your booster dose every 6 months. Next dose recommended by June 2025.';
      precautionRec = 'Wear N95 masks in all public settings. Maintain strict social distancing.';
      monitoringRec = 'Weekly self-monitoring for symptoms. Immediate testing if symptoms appear.';
      riskLevel = 'High';
    } else if (ageGroup === '18-64') {
      vaccinationRec = 'Schedule your booster dose every 9-12 months. Next dose recommended by September 2025.';
      precautionRec = 'Wear masks in crowded indoor settings. Practice regular hand hygiene.';
      monitoringRec = 'Self-monitor for symptoms. Test if exposed to positive cases.';
      riskLevel = 'Moderate';
    } else {
      vaccinationRec = 'Follow age-appropriate vaccination schedule as advised by pediatrician.';
      precautionRec = 'Maintain hand hygiene. Wear masks in healthcare settings.';
      monitoringRec = 'Parents monitor for symptoms. Test if exposed to positive cases.';
      riskLevel = 'Low';
    }
    
    return { vaccinationRec, precautionRec, monitoringRec, riskLevel };
  };
  
  const { vaccinationRec, precautionRec, monitoringRec, riskLevel } = getRecommendations();
  
  // Get risk color based on level
  const getRiskColor = () => {
    if (riskLevel === 'High') return 'text-red-600 bg-red-50';
    if (riskLevel === 'Moderate') return 'text-amber-600 bg-amber-50';
    return 'text-green-600 bg-green-50';
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-[#1A5276]">Your Personalized Action Plan</h3>
      
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <MapPin size={18} className="text-gray-500" />
          <span className="text-gray-600">Location: {location || 'Not specified'}</span>
        </div>
        
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${getRiskColor()} mb-4`}>
          <AlertTriangle size={16} />
          <span className="font-medium">{riskLevel} Risk Profile</span>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="border-l-4 border-[#1A5276] pl-4">
          <div className="flex items-center gap-2 mb-2">
            <Vaccine size={20} className="text-[#1A5276]" />
            <h4 className="font-semibold text-[#1A5276]">Vaccination</h4>
          </div>
          <p className="text-gray-600">{vaccinationRec}</p>
          
          {location && (
            <div className="mt-2 bg-blue-50 p-3 rounded-md">
              <p className="text-sm font-medium text-[#1A5276]">Nearby Vaccination Centers:</p>
              <ul className="text-sm text-gray-600 mt-1">
                <li>• City Hospital, {location} - 2.3 km</li>
                <li>• Community Health Center, {location} - 3.8 km</li>
              </ul>
            </div>
          )}
        </div>
        
        <div className="border-l-4 border-[#2E86C1] pl-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle size={20} className="text-[#2E86C1]" />
            <h4 className="font-semibold text-[#2E86C1]">Precautions</h4>
          </div>
          <p className="text-gray-600">{precautionRec}</p>
        </div>
        
        <div className="border-l-4 border-[#3498DB] pl-4">
          <div className="flex items-center gap-2 mb-2">
            <Calendar size={20} className="text-[#3498DB]" />
            <h4 className="font-semibold text-[#3498DB]">Monitoring</h4>
          </div>
          <p className="text-gray-600">{monitoringRec}</p>
        </div>
      </div>
      
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button 
          onClick={onFeedback}
          className="flex-1 flex justify-center items-center gap-1 py-2 px-4 border border-[#1A5276] rounded-md shadow-sm text-sm font-medium text-[#1A5276] bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A5276] transition-colors"
        >
          <CheckCircle size={16} />
          <span>Provide Feedback</span>
        </button>
        
        <a 
          href="#dashboard"
          className="flex-1 flex justify-center items-center gap-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1A5276] hover:bg-[#2E86C1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2E86C1] transition-colors"
        >
          View Local Statistics
        </a>
      </div>
    </div>
  );
};

export default RecommendationPlan;