import React, { useEffect, useState } from 'react';
import SectionHeading from '../shared/SectionHeading';
import CasesMap from './CasesMap';
import CaseTrends from './CaseTrends';
import VariantPrevalence from './VariantPrevalence';
import StateTable from './StateTable';
import { fetchIndiaCovidData, fetchStateWiseData, CovidData, StateData } from '../../services/api';
import { format } from 'date-fns';

const Dashboard: React.FC = () => {
  const [nationalData, setNationalData] = useState<CovidData | null>(null);
  const [stateData, setStateData] = useState<StateData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [national, states] = await Promise.all([
          fetchIndiaCovidData(),
          fetchStateWiseData()
        ]);
        setNationalData(national);
        setStateData(states);
      } catch (err) {
        setError('Failed to fetch COVID-19 data. Please try again later.');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // Refresh data every 30 minutes
    const interval = setInterval(fetchData, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#1A5276] border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 mb-4">{error}</div>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-[#1A5276] text-white rounded-md hover:bg-[#2E86C1]"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Live COVID-19 Tracker" 
          subtitle="Real-time data on the 2025 COVID-19 spike in India"
          icon="chart"
        />
        
        <div className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#1A5276]">
              <h3 className="text-lg font-medium text-gray-600">Total Cases</h3>
              <p className="text-3xl font-bold text-[#1A5276]">
                {nationalData?.Confirmed.toLocaleString()}
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#CB4335]">
              <h3 className="text-lg font-medium text-gray-600">Active Cases</h3>
              <p className="text-3xl font-bold text-[#CB4335]">
                {nationalData?.Active.toLocaleString()}
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#2ECC71]">
              <h3 className="text-lg font-medium text-gray-600">Recovered</h3>
              <p className="text-3xl font-bold text-[#2ECC71]">
                {nationalData?.Recovered.toLocaleString()}
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-gray-600">
              <h3 className="text-lg font-medium text-gray-600">Deaths</h3>
              <p className="text-3xl font-bold text-gray-600">
                {nationalData?.Deaths.toLocaleString()}
              </p>
            </div>
          </div>
          <p className="mt-4 text-right text-sm text-gray-500">
            Last Updated: {format(new Date(nationalData?.Date || new Date()), 'PPpp')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-4 border-b">
              <h3 className="font-semibold text-lg">Cases by State</h3>
            </div>
            <div className="p-4 h-[400px]">
              <CasesMap />
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-lg">Case Trends (Last 30 Days)</h3>
              </div>
              <div className="p-4 h-[180px]">
                <CaseTrends />
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-lg">Variant Prevalence</h3>
              </div>
              <div className="p-4 h-[180px]">
                <VariantPrevalence />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
          <h3 className="text-xl font-semibold mb-4">State-Wise COVID-19 Breakdown</h3>
          <StateTable data={stateData} />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;