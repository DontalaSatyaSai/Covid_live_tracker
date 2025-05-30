export const getFactorsData = () => {
  return [
    {
      id: 'factor1',
      name: 'JN.1 Subvariant',
      description: 'The new JN.1 subvariant has increased transmissibility and partial immune escape compared to previous variants.',
      impact: 5, // On a scale of 1-5
      icon: 'variant'
    },
    {
      id: 'factor2',
      name: 'Waning Immunity',
      description: 'Population immunity has decreased as time has elapsed since last vaccination or infection.',
      impact: 4,
      icon: 'immunity'
    },
    {
      id: 'factor3',
      name: 'Relaxed Protocols',
      description: 'Reduced adherence to masking, social distancing, and other preventive measures in public spaces.',
      impact: 4,
      icon: 'protocols'
    },
    {
      id: 'factor4',
      name: 'Seasonal Factors',
      description: 'Weather patterns in certain regions conducive to viral spread and indoor gatherings.',
      impact: 3,
      icon: 'other'
    }
  ];
};