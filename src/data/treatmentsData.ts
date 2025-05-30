export const getTreatmentsData = () => {
  return [
    {
      id: 'treatment1',
      type: 'current',
      title: 'Home Management Protocol',
      description: 'Mild cases can be managed at home with monitoring, rest, hydration, and over-the-counter fever reducers.',
      date: 'Updated April 2025',
      source: 'Ministry of Health',
      sourceUrl: '#'
    },
    {
      id: 'treatment2',
      type: 'current',
      title: 'Antiviral Treatments',
      description: 'Oral antivirals remain effective against JN.1 variant when administered within 5 days of symptom onset.',
      date: 'Updated March 2025',
      source: 'ICMR Guidelines',
      sourceUrl: '#'
    },
    {
      id: 'treatment3',
      type: 'current',
      title: 'Hospital Protocols',
      description: 'ICU needs have decreased significantly in Karnataka, with most hospitalized patients recovering with standard oxygen therapy.',
      date: 'Updated May 2025',
      source: 'Karnataka Health Dept',
      sourceUrl: '#'
    },
    {
      id: 'research1',
      type: 'research',
      title: 'Long COVID Antiviral',
      description: 'New compound shows promise in reducing long COVID symptoms in pre-clinical trials with mice models.',
      date: 'Research published: April 2025',
      source: 'Nature Medicine',
      sourceUrl: '#'
    },
    {
      id: 'research2',
      type: 'research',
      title: 'Multi-variant Vaccine',
      description: 'Phase II trials for a pan-coronavirus vaccine showing 86% efficacy against multiple variants including JN.1.',
      date: 'Research published: February 2025',
      source: 'The Lancet',
      sourceUrl: '#'
    }
  ];
};