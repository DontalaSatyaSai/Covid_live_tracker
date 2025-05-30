export const getPrecautionsData = () => {
  return [
    {
      id: 'mask',
      title: 'Mask Guidelines',
      description: 'Wear N95 masks in crowded or medical settings. Ensure proper fit and disposal.',
      icon: 'mask'
    },
    {
      id: 'hand',
      title: 'Hand Hygiene',
      description: 'Wash hands frequently for 20 seconds with soap and water or use alcohol-based sanitizer.',
      icon: 'hand'
    },
    {
      id: 'isolation',
      title: 'Isolation Rules',
      description: 'Isolate if symptomatic for 5-7 days. Monitor symptoms and seek medical help if needed.',
      icon: 'home'
    }
  ];
};