import React from 'react';
import HeroSection from '../components/hero/HeroSection';
import Dashboard from '../components/dashboard/Dashboard';
import PrecautionsSection from '../components/precautions/PrecautionsSection';
import RiskAnalyzer from '../components/risk/RiskAnalyzer';
import TreatmentsSection from '../components/treatments/TreatmentsSection';
import FactorsSection from '../components/factors/FactorsSection';
import HealthRecommendations from '../components/recommendations/HealthRecommendations';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <div id="dashboard" className="scroll-mt-16">
        <Dashboard />
      </div>
      <div id="precautions" className="scroll-mt-16">
        <PrecautionsSection />
      </div>
      <div id="risk" className="scroll-mt-16">
        <RiskAnalyzer />
      </div>
      <div id="treatments" className="scroll-mt-16">
        <TreatmentsSection />
      </div>
      <div id="factors" className="scroll-mt-16">
        <FactorsSection />
      </div>
      <div id="recommendations" className="scroll-mt-16">
        <HealthRecommendations />
      </div>
    </div>
  );
};

export default HomePage;