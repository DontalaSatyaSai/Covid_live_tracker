import React, { useState } from 'react';
import SectionHeading from '../shared/SectionHeading';
import RecommendationForm from './RecommendationForm';
import RecommendationPlan from './RecommendationPlan';
import FeedbackForm from './FeedbackForm';

interface UserData {
  ageGroup: string;
  isImmunocompromised: boolean;
  location: string;
}

const HealthRecommendations: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  
  const handleSubmit = (data: UserData) => {
    setUserData(data);
    setShowFeedback(false);
  };
  
  const handleShowFeedback = () => {
    setShowFeedback(true);
  };

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Your COVID-19 Action Plan" 
          subtitle="Get personalized recommendations based on your profile"
          icon="stethoscope"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#1A5276]">Personalized Health Recommendations</h3>
              <p className="text-gray-600 mb-6">
                Input your information to receive tailored advice based on your age,
                health status, and location.
              </p>
              
              <RecommendationForm onSubmit={handleSubmit} />
            </div>
          </div>
          
          <div>
            {userData ? (
              <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
                <RecommendationPlan userData={userData} onFeedback={handleShowFeedback} />
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 flex flex-col items-center justify-center h-full">
                <div className="text-center p-6">
                  <div className="inline-block p-4 bg-blue-50 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#1A5276]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#1A5276]">Complete Your Profile</h3>
                  <p className="text-gray-600">
                    Fill out your information on the left to receive your personalized 
                    COVID-19 action plan with tailored recommendations.
                  </p>
                </div>
              </div>
            )}
            
            {showFeedback && (
              <div className="mt-6 bg-white rounded-xl shadow-md overflow-hidden p-6">
                <FeedbackForm />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthRecommendations;