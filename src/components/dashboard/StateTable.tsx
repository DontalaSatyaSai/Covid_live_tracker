import React from 'react';
import { useTable, useSortBy } from 'react-table';
import { Download } from 'lucide-react';
import { StateData } from '../../services/api';

interface StateTableProps {
  data: StateData[];
}

const StateTable: React.FC<StateTableProps> = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'State/UT',
        accessor: 'state',
      },
      {
        Header: 'Confirmed',
        accessor: 'confirmed',
      },
      {
        Header: 'Active',
        accessor: 'active',
      },
      {
        Header: 'Recovered',
        accessor: 'recovered',
      },
      {
        Header: 'Deaths',
        accessor: 'deaths',
      },
      {
        Header: 'Last Updated',
        accessor: 'lastUpdated',
        Cell: ({ value }: { value: string }) => new Date(value).toLocaleDateString(),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

  const downloadCSV = () => {
    const headers = columns.map(column => column.Header).join(',');
    const dataRows = data.map(row => 
      Object.values(row).join(',')
    ).join('\n');
    const csv = `${headers}\n${dataRows}`;
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'covid19_state_data.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-end mb-4">
        <button
          onClick={downloadCSV}
          className="flex items-center gap-2 px-4 py-2 bg-[#1A5276] text-white rounded-md hover:bg-[#2E86C1] transition-colors"
        >
          <Download size={16} />
          <span>Download CSV</span>
        </button>
      </div>
      <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50"
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' ↓'
                        : ' ↑'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td
                    {...cell.getCellProps()}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StateTable;