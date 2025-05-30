import React, { useState } from 'react';

interface RecommendationFormProps {
  onSubmit: (data: { ageGroup: string; isImmunocompromised: boolean; location: string }) => void;
}

const RecommendationForm: React.FC<RecommendationFormProps> = ({ onSubmit }) => {
  const [ageGroup, setAgeGroup] = useState('18-64');
  const [isImmunocompromised, setIsImmunocompromised] = useState(false);
  const [location, setLocation] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ageGroup, isImmunocompromised, location });
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="ageGroup" className="block text-sm font-medium text-gray-700 mb-1">
          Age Group
        </label>
        <select
          id="ageGroup"
          value={ageGroup}
          onChange={(e) => setAgeGroup(e.target.value)}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#2E86C1] focus:ring focus:ring-[#2E86C1] focus:ring-opacity-50 p-2 border"
        >
          <option value="under-18">Under 18</option>
          <option value="18-64">18-64</option>
          <option value="65+">65+</option>
        </select>
      </div>
      
      <div>
        <div className="flex items-center">
          <input
            id="isImmunocompromised"
            type="checkbox"
            checked={isImmunocompromised}
            onChange={(e) => setIsImmunocompromised(e.target.checked)}
            className="h-4 w-4 text-[#2E86C1] focus:ring-[#2E86C1] border-gray-300 rounded"
          />
          <label htmlFor="isImmunocompromised" className="ml-2 block text-sm text-gray-700">
            I have a compromised immune system
          </label>
        </div>
      </div>
      
      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
          Your Location (State)
        </label>
        <select
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#2E86C1] focus:ring focus:ring-[#2E86C1] focus:ring-opacity-50 p-2 border"
        >
          <option value="">Select State</option>
          <option value="Kerala">Kerala</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Delhi">Delhi</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="West Bengal">West Bengal</option>
          <option value="Other">Other</option>
        </select>
      </div>
      
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1A5276] hover:bg-[#2E86C1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2E86C1] transition-colors"
      >
        Get My Action Plan
      </button>
    </form>
  );
};

export default RecommendationForm;