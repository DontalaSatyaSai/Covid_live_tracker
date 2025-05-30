import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { getStatesCasesData } from '../../data/casesData';

// Simplified India GeoJSON - this would normally be a complete file
const INDIA_TOPO_JSON = {
  type: "Topology",
  objects: {
    india: {
      type: "GeometryCollection",
      geometries: [
        // This is a simplified representation - in a real implementation, 
        // you would use a complete GeoJSON file for India with all states
        { type: "Polygon", coordinates: [[[78, 22]]], id: "KL" }, // Kerala
        { type: "Polygon", coordinates: [[[76, 18]]], id: "MH" }, // Maharashtra
        { type: "Polygon", coordinates: [[[77, 28]]], id: "DL" }  // Delhi
      ]
    }
  }
};

const CasesMap: React.FC = () => {
  const statesCasesData = getStatesCasesData();
  
  // Function to determine color based on case count
  const getColor = (caseCount: number) => {
    if (caseCount >= 80) return "#1A5276"; // dark blue
    if (caseCount >= 60) return "#2874A6"; // medium blue
    if (caseCount >= 40) return "#3498DB"; // blue
    if (caseCount >= 20) return "#85C1E9"; // light blue
    return "#D6EAF8"; // very light blue
  };

  return (
    <div className="relative h-full w-full">
      <div className="text-center mb-2 text-sm text-gray-500">
        Hover over states to see case details
      </div>
      
      {/* This is a simplified placeholder - in a real implementation, 
          you would use a proper India map with react-simple-maps */}
      <div className="h-full flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {statesCasesData.map((state) => (
            <div 
              key={state.id}
              className="relative overflow-hidden rounded-lg p-4 transition-all duration-300 hover:shadow-md"
              style={{ backgroundColor: getColor(state.cases) }}
            >
              <div className="text-white">
                <h3 className="font-medium">{state.name}</h3>
                <p className="text-2xl font-bold">{state.cases}</p>
                <p className="text-sm opacity-80">Active Cases</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 p-2">
        <div className="flex items-center text-xs">
          <div className="w-3 h-3 rounded-full bg-[#D6EAF8] mr-1"></div>
          <span>Low</span>
        </div>
        <div className="flex items-center text-xs">
          <div className="w-3 h-3 rounded-full bg-[#3498DB] mr-1"></div>
          <span>Medium</span>
        </div>
        <div className="flex items-center text-xs">
          <div className="w-3 h-3 rounded-full bg-[#1A5276] mr-1"></div>
          <span>High</span>
        </div>
      </div>
    </div>
  );
};

export default CasesMap;