import React, { useState } from 'react';

interface RiskFormProps {
  onSubmit: (data: { ageGroup: string; isImmunocompromised: boolean }) => void;
}

const RiskForm: React.FC<RiskFormProps> = ({ onSubmit }) => {
  const [ageGroup, setAgeGroup] = useState('18-64');
  const [isImmunocompromised, setIsImmunocompromised] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ageGroup, isImmunocompromised });
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
      
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1A5276] hover:bg-[#2E86C1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2E86C1] transition-colors"
      >
        Analyze My Risk
      </button>
    </form>
  );
};

export default RiskForm;