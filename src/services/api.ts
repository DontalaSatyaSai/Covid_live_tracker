// src/services/api.ts
import axios from 'axios';

export interface CovidData {
  Country: string;
  Confirmed: number;
  Deaths: number | null;
  Recovered: number | null;
  Active: number | null;
  Date: string;
}

export interface StateData {
  state: string;
  confirmed: number;
  active: number;
  recovered: number;
  deaths: number;
  lastUpdated: string;
}

// Fallback data for state-wise cases if API fetch fails
export const getFallbackData = (): StateData[] => [
  { state: 'Maharashtra', confirmed: 0, active: 84, recovered: 0, deaths: 0, lastUpdated: '2025-05-29T00:00:00Z' },
  { state: 'Uttar Pradesh', confirmed: 0, active: 44, recovered: 0, deaths: 0, lastUpdated: '2025-05-29T00:00:00Z' },
  { state: 'Delhi', confirmed: 0, active: 33, recovered: 0, deaths: 0, lastUpdated: '2025-05-29T00:00:00Z' },
  { state: 'Kerala', confirmed: 0, active: 30, recovered: 0, deaths: 0, lastUpdated: '2025-05-29T00:00:00Z' },
  { state: 'Gujarat', confirmed: 0, active: 28, recovered: 0, deaths: 0, lastUpdated: '2025-05-29T00:00:00Z' }
];

const indiaFallbackData: CovidData = {
  Country: 'India',
  Confirmed: 0,
  Deaths: null,
  Recovered: null,
  Active: null,
  Date: '2025-05-29T00:00:00Z'
};

export const fetchIndiaCovidData = async (): Promise<CovidData> => {
  try {
    console.log('Attempting to fetch national data from http://localhost:5000/api/covid');
    const response = await axios.get('http://localhost:5000/api/covid', { timeout: 5000 });
    const data = response.data.national;
    if (data) {
      console.log('Successfully fetched national data from local server:', data);
      // Clean the Date field to ensure it's a valid date string
      let cleanedDate = new Date().toISOString();
      if (data.Date && typeof data.Date === 'string') {
        // Extract only the date part if it contains extraneous text
        const dateMatch = data.Date.match(/(\d{4}-\d{2}-\d{2})/);
        cleanedDate = dateMatch ? dateMatch[0] + 'T00:00:00Z' : new Date().toISOString();
      }
      return {
        Country: data.Country || 'India',
        Confirmed: data.Confirmed ?? 0,
        Deaths: data.Deaths ?? 0,
        Recovered: data.Recovered ?? 0,
        Active: data.Active ?? 0,
        Date: cleanedDate
      };
    }
    console.error('No national data found in response, using fallback');
    throw new Error('No national data found');
  } catch (error) {
    console.error('Failed to fetch national data from local server:', error.message);
    console.warn('Using fallback national data');
    return indiaFallbackData;
  }
};

export const fetchStateWiseData = async (): Promise<StateData[]> => {
  try {
    console.log('Attempting to fetch state-wise data from http://localhost:5000/api/covid');
    const response = await axios.get('http://localhost:5000/api/covid', { timeout: 5000 });
    const data = response.data.stateData;
    if (data && data.length > 0) {
      console.log('Successfully fetched state-wise data from local server:', data.slice(0, 5));
      return data;
    }
    console.error('No state-wise data found in response, using fallback');
    throw new Error('No state-wise data found');
  } catch (error) {
    console.error('Failed to fetch state-wise data from local server:', error.message);
    console.warn('Using fallback state-wise data');
    return getFallbackData();
  }
};
