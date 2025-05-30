import React from 'react';
import { ShieldAlert } from 'lucide-react';
import NavigationButtons from './NavigationButtons';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#1A5276] to-[#2E86C1] text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <ShieldAlert size={56} className="text-yellow-300" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            COVID-19 2025 Action Hub: Stay Informed & Safe
          </h1>
          <p className="text-xl mb-8">
            Your trusted source for real-time updates, precautions, and personalized 
            health insights on the 2025 COVID-19 spike in India.
          </p>
          <NavigationButtons />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent"></div>
    </section>
  );
};

export default HeroSection;