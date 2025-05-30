export const getTotalCases = () => {
  return 266;
};

export const getStatesCasesData = () => {
  return [
    { id: 'KL', name: 'Kerala', cases: 87, percentChange: 12 },
    { id: 'MH', name: 'Maharashtra', cases: 76, percentChange: 8 },
    { id: 'DL', name: 'Delhi', cases: 58, percentChange: 15 },
    { id: 'KA', name: 'Karnataka', cases: 24, percentChange: 6 },
    { id: 'TN', name: 'Tamil Nadu', cases: 21, percentChange: 4 },
  ];
};

export const getCaseTrendsData = () => {
  // Generate last 30 days dates
  const dates = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (29 - i));
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  });

  // Generate sample case trend data with an upward trend
  const newCases = [
    8, 7, 10, 12, 9, 11, 14, 18, 22, 19, 
    24, 28, 32, 35, 30, 36, 42, 46, 41, 38, 
    45, 52, 58, 63, 70, 75, 82, 90, 85, 92
  ];

  return {
    dates,
    newCases
  };
};

export const getVariantData = () => {
  return [
    { name: 'JN.1', percentage: 53 },
    { name: 'KP.3', percentage: 28 },
    { name: 'LB.1', percentage: 15 },
    { name: 'Other Variants', percentage: 4 }
  ];
};