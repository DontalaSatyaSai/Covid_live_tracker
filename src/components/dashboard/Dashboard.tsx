// src/components/dashboard/Dashboard.tsx
import React, { useEffect, useState } from 'react';
import SectionHeading from '../shared/SectionHeading';
import CasesMap from './CasesMap';
import VariantsVisual from './VariantsVisual';
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
        setError(null);
        const [national, states] = await Promise.all([
          fetchIndiaCovidData(),
          fetchStateWiseData()
        ]);
        setNationalData(national);
        setStateData(states);
        console.log('Data loaded successfully:', { national, states });
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
        <p className="ml-4 text-gray-600">Loading dashboard...</p>
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

  // Function to safely format date
  const formatDateSafely = (dateStr: string): string => {
    try {
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) {
        return 'N/A'; // Return fallback if date is invalid
      }
      return format(date, 'PPpp');
    } catch (e) {
      console.error('Error formatting date:', e);
      return 'N/A';
    }
  };

  // Calculate total cases as sum of Active and Recovered
  const totalCases =
    (nationalData?.Active ?? 0) +
    (nationalData?.Recovered ?? 0);

  // Calculate total deaths as sum of deaths across all states
  const totalDeaths = stateData.reduce(
    (sum, state) => sum + (state.deaths ?? 0),
    0
  );

  const topStates = [...stateData]
    .sort((a, b) => b.active - a.active)
    .slice(0, 9);

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
                {totalCases ? totalCases.toLocaleString() : 'N/A'}
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#CB4335]">
              <h3 className="text-lg font-medium text-gray-600">Active Cases</h3>
              <p className="text-3xl font-bold text-[#CB4335]">
                {nationalData?.Active !== null && nationalData?.Active !== undefined ? nationalData.Active.toLocaleString() : 'N/A'}
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#2ECC71]">
              <h3 className="text-lg font-medium text-gray-600">Recovered</h3>
              <p className="text-3xl font-bold text-[#2ECC71]">
                {nationalData?.Recovered !== null && nationalData?.Recovered !== undefined ? nationalData.Recovered.toLocaleString() : 'N/A'}
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-gray-600">
              <h3 className="text-lg font-medium text-gray-600">Deaths</h3>
              <p className="text-3xl font-bold text-gray-600">
                {totalDeaths ? totalDeaths.toLocaleString() : 'N/A'}
              </p>
            </div>
          </div>
          <p className="mt-4 text-right text-sm text-gray-500">
            Last Updated: {nationalData?.Date ? formatDateSafely(nationalData.Date) : 'N/A'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-4 border-b">
              <h3 className="font-semibold text-lg"> Top 9 states by Active Cases</h3>
            </div>
            <div className="p-4 h-[400px]">
              <CasesMap data={topStates} />
            </div>
          </div>
          <VariantsVisual />
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <h3 className="text-xl font-semibold" style={{ flex: 1, margin: 0 }}>
              State-Wise COVID-19 Breakdown
            </h3>
            <div style={{ flexShrink: 0 }}>
              <StateTable data={stateData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
