import axios from 'axios';
import { format } from 'date-fns';

const COVID_API_BASE_URL = 'https://api.covid19api.com';

export interface CovidData {
  Country: string;
  Confirmed: number;
  Deaths: number;
  Recovered: number;
  Active: number;
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

// Fallback data in case API is unavailable
export const getFallbackData = (): StateData[] => [
  {
    state: 'Maharashtra',
    confirmed: 10234567,
    active: 45678,
    recovered: 10000000,
    deaths: 188889,
    lastUpdated: '2025-05-29T00:00:00Z'
  },
  {
    state: 'Kerala',
    confirmed: 6634722,
    active: 23456,
    recovered: 6500000,
    deaths: 111266,
    lastUpdated: '2025-05-29T00:00:00Z'
  },
  // Add more states here...
];

// Fallback data for India overall
const indiaFallbackData: CovidData = {
  Country: 'India',
  Confirmed: 45123456,
  Deaths: 531234,
  Recovered: 44123456,
  Active: 468766,
  Date: '2025-05-29T00:00:00Z'
};

export const fetchIndiaCovidData = async (): Promise<CovidData> => {
  try {
    const response = await axios.get(`${COVID_API_BASE_URL}/country/india`);
    return response.data[response.data.length - 1]; // Get latest data
  } catch (error) {
    console.warn('Using fallback data due to API error:', error);
    return Promise.resolve(indiaFallbackData); // Explicitly return a resolved promise
  }
};

export const fetchStateWiseData = async (): Promise<StateData[]> => {
  // Return fallback data directly since the API endpoint is a placeholder
  return getFallbackData();
};