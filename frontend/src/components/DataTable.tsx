import React, { useEffect, useState } from 'react';
import { ApolloError } from '@apollo/client';

interface IPolicy {
  customer: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
  }
  provider: string;
  insuranceType: string;
  status: string;
  policyNumber: string;
  startDate: string;
  endDate: string;
  createdAt: string;
};

enum SortTypes {
  Customer = 'customer',
  Provider = 'provider',
  InsuranceType = 'insuranceType',
  Status = 'status',
  PolicyNumber = 'policyNumber',
  StartDate = 'startDate',
  EndDate = 'endDate',
  CreatedAt = 'CreatedAt'
};

enum SortDirection {
  Descending = -1,
  Ascending = 1,
};

const DataTable = ({ data, loading, error }: {data: any[], loading: boolean, error: undefined | ApolloError }): JSX.Element => {
  const [renderData, setRenderData]: [renderData: any[], setRenderData: any] = useState(data);
  const [sortConfig, setSortConfig]: [sortType: any, setSortConfig: any] = useState({ type: SortTypes.Status, direction: SortDirection.Ascending });

  useEffect(() => {
    function sortArray({ type, direction }: {type: SortTypes, direction: SortDirection}): void {
      const sorted: IPolicy[] = data && [...data].sort((a, b) => {
        if (type === SortTypes.Customer) {
          const fullNameOne = a.customer.firstName + a.customer.lastName;
          const fullNameTwo = b.customer.firstName + b.customer.lastName;
          const computedNumberValue = fullNameOne.localeCompare(fullNameTwo);

          return direction === SortDirection.Ascending ? computedNumberValue : computedNumberValue * -1;
        }
        
        else if (a[type] < b[type])
          return direction === SortDirection.Ascending ? -1 : 1;
        
        else if (a[type] > b[type])
          return direction === SortDirection.Ascending ? 1 : -1;
        
        return 0;
      });
      setRenderData(sorted);
    };

    sortArray(sortConfig);
  }, [sortConfig, data]);

  if (loading) return <h2 className="flex flex-row justify-center font-medium m-20">Loading...</h2>;
  if (error) console.log(error);
  
  console.log('DATA: ', data, 'RENDERDATA: ', renderData);

  return (
    <div className="flex flex-col items-center">
      <h1 className="m-8 font-medium font-mono">Get Popsure — Policy Info</h1>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                      <button type="button" onClick={() => setSortConfig({ type: SortTypes.Customer, direction: sortConfig.direction * -1 })}>H</button>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Provider
                      <button type="button" onClick={() => setSortConfig({ type: SortTypes.Provider, direction: sortConfig.direction * -1 })}>H</button>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Insurance Type
                      <button type="button" onClick={() => setSortConfig({ type: SortTypes.InsuranceType, direction: sortConfig.direction * -1 })}>H</button>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                      <button type="button" onClick={() => setSortConfig({ type: SortTypes.Status, direction: sortConfig.direction * -1 })}>H</button>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Policy Number
                      <button type="button" onClick={() => setSortConfig({ type: SortTypes.PolicyNumber, direction: sortConfig.direction * -1 })}>H</button>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Start Date
                      <button type="button" onClick={() => setSortConfig({ type: SortTypes.StartDate, direction: sortConfig.direction * -1 })}>H</button>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    End Date
                      <button type="button" onClick={() => setSortConfig({ type: SortTypes.EndDate, direction: sortConfig.direction * -1 })}>H</button>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created At
                      <button type="button" onClick={() => setSortConfig({ type: SortTypes.CreatedAt, direction: sortConfig.direction * -1 })}>H</button>
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
              {
                renderData && renderData.map((record: any) => {
                  return (
                    <tr key={record.policyNumber}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {record.customer.firstName} {record.customer.lastName}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {record.provider}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {record.insuranceType}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {record.status}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {record.policyNumber}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {record.startDate}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {record.endDate}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {record.createdAt}
                        </div>
                      </td>
                    </tr>
                  );
                })
              }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
