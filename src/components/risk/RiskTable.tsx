import React from 'react';

const RiskTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Age Group
            </th>
            <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ICU Risk
            </th>
            <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Severe Illness
            </th>
            <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Vaccine Recommendation
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-4 py-4 whitespace-nowrap">
              <div className="text-sm font-medium text-gray-900">Under 18</div>
            </td>
            <td className="px-4 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">0.1%</div>
            </td>
            <td className="px-4 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">0.5%</div>
            </td>
            <td className="px-4 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">Age-appropriate primary series</div>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-4 whitespace-nowrap">
              <div className="text-sm font-medium text-gray-900">18-30</div>
            </td>
            <td className="px-4 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">0.5%</div>
            </td>
            <td className="px-4 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">2%</div>
            </td>
            <td className="px-4 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">Primary series + booster every 12 months</div>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-4 whitespace-nowrap">
              <div className="text-sm font-medium text-gray-900">31-64</div>
            </td>
            <td className="px-4 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">3%</div>
            </td>
            <td className="px-4 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">7%</div>
            </td>
            <td className="px-4 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">Primary series + booster every 9 months</div>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-4 whitespace-nowrap">
              <div className="text-sm font-medium text-gray-900">65+</div>
            </td>
            <td className="px-4 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">12%</div>
            </td>
            <td className="px-4 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">18%</div>
            </td>
            <td className="px-4 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">Primary series + booster every 6 months</div>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-4 whitespace-nowrap">
              <div className="text-sm font-medium text-gray-900">Immunocompromised</div>
            </td>
            <td className="px-4 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">15%</div>
            </td>
            <td className="px-4 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">25%</div>
            </td>
            <td className="px-4 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">Primary series + booster every 4-6 months</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RiskTable;