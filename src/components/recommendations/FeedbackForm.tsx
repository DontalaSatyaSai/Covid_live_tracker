import React, { useState } from 'react';

const FeedbackForm: React.FC = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    setSubmitted(true);
  };
  
  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
          <svg xmlns="http://www.w3.org/2000/svg\" className="h-10 w-10 text-green-600\" fill="none\" viewBox="0 0 24 24\" stroke="currentColor">
            <path strokeLinecap="round\" strokeLinejoin="round\" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Thank You for Your Feedback!</h3>
        <p className="text-gray-600">
          Your input helps us improve our recommendations and better serve the community.
        </p>
      </div>
    );
  }
  
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-[#1A5276]">Provide Your Feedback</h3>
      <p className="text-gray-600 mb-6">
        How helpful were the recommendations provided? Your feedback helps us improve.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Rate the recommendations:
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setRating(value)}
                className={`w-10 h-10 rounded-full flex items-center justify-center focus:outline-none ${
                  rating === value
                    ? 'bg-[#1A5276] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-1">
            Your feedback:
          </label>
          <textarea
            id="feedback"
            rows={4}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#2E86C1] focus:ring focus:ring-[#2E86C1] focus:ring-opacity-50 p-2 border"
            placeholder="What could we improve?"
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1A5276] hover:bg-[#2E86C1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2E86C1] transition-colors"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;