import React, { useEffect, useState } from 'react';
import { ApolloError, useMutation } from '@apollo/client';

import { 
  EDIT_POLICY 
} from '../graphql/requests/policy/policy-mutations';

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
  CreatedAt = 'createdAt'
};

enum SortDirection {
  Descending,
  Ascending,
};

const DataTable = (
{ data, loading, error, refetch }: {data: any[], loading: boolean, error: undefined | ApolloError, refetch: any}
): JSX.Element => {
  // States
  // Data to be rendered in the table
  const [renderData, setRenderData]: [renderData: any[], setRenderData: any] = useState(data);

  const [sortConfig, setSortConfig]: [sortConfig: any, setSortConfig: any] = useState(
    { type: SortTypes.Status, direction: SortDirection.Ascending }
  );
  
  const [inEditMode, setInEditMode]: [inEditMode: any, setInEditMode: any] = useState(
    { status: false, rowKey: null, rowColumn: null }
  );

  // Editable fields
  const [firstNameEdit, setFirstNameEdit] = useState('');
  const [lastNameEdit, setLastNameEdit] = useState('');
  const [providerEdit, setProviderEdit] = useState('');
  const [insuranceTypeEdit, setInsuranceTypeEdit] = useState('');
  const [statusEdit, setStatusEdit] = useState('');
  const [startDateEdit, setStartDateEdit] = useState('');
  const [endDateEdit, setEndDateEdit] = useState('');

  // Mutations
  const [editPolicy, { error: mutationError }] = useMutation(EDIT_POLICY);

  // Functions
  const sortBy = (type: SortTypes): void => {
    let directionToPass = SortDirection.Ascending;

    if (sortConfig.type === type && sortConfig.direction === SortDirection.Ascending)
      directionToPass = SortDirection.Descending;

    setSortConfig( () => ({ type, direction: directionToPass }) );
  };

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

  // Handle functions
  const handleFirstName = (e: Event | any) => setFirstNameEdit(e.currentTarget.value);
  const handleLastName = (e: Event | any) => setLastNameEdit(e.currentTarget.value);
  const handleProvider = (e: Event | any) => setProviderEdit(e.currentTarget.value);
  const handleInsuranceType = (e: Event | any) => setInsuranceTypeEdit(e.currentTarget.value);
  const handleStatus = (e: Event | any) => setStatusEdit(e.currentTarget.value);
  const handleStartDate = (e: Event | any) => setStartDateEdit(e.currentTarget.value);
  const handleEndDate = (e: Event | any) => setEndDateEdit(e.currentTarget.value);

  const handleSubmit = (e: Event | any): void => {
    if (mutationError) console.error(mutationError);
    
    e.preventDefault();

    editPolicy({
      variables: {
        editPolicyInput: {
          policyNumber: inEditMode.rowKey,
          customer: {
            firstName: firstNameEdit ? firstNameEdit : null,
            lastName: lastNameEdit ? lastNameEdit : null,
          },
          provider: providerEdit ? providerEdit : null,
          insuranceType: insuranceTypeEdit ? insuranceTypeEdit : null,
          status: statusEdit ? statusEdit : null,
          startDate: startDateEdit ? startDateEdit : null,
          endDate: endDateEdit ? endDateEdit : null,
        }
      }
    });

    setInEditMode({ status: false, rowKey: null, rowColumn: null });

    // resetting states
    setFirstNameEdit(''); setLastNameEdit(''); setProviderEdit(''); 
    setInsuranceTypeEdit(''); setStatusEdit(''); setStartDateEdit(''); 
    setEndDateEdit('');

    refetch();
  };

  // Misc.
  if (loading) return (<h2 className="flex flex-row justify-center font-medium m-20">Loading...</h2>);
  
  if (error) return (
    <div className="flex flex-col items-center font-medium m-20">
      <h2>We had a problem. We're very sorry.</h2>
      <div className="flex flex-col">
        <h2>Please try refreshing the page.</h2>
      </div>
    </div>
  );

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
                      <button type="button" onClick={() => sortBy(SortTypes.Customer)}>H</button>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Provider
                      <button type="button" onClick={() => sortBy(SortTypes.Provider)}>H</button>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Insurance Type
                      <button type="button" onClick={() => sortBy(SortTypes.InsuranceType)}>H</button>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                      <button type="button" onClick={() => sortBy(SortTypes.Status)}>H</button>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Policy Number
                      <button type="button" onClick={() => sortBy(SortTypes.PolicyNumber)}>H</button>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Start Date
                      <button type="button" onClick={() => sortBy(SortTypes.StartDate)}>H</button>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    End Date
                      <button type="button" onClick={() => sortBy(SortTypes.EndDate)}>H</button>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created At
                      <button type="button" onClick={() => sortBy(SortTypes.CreatedAt)}>H</button>
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
                            <button className="flex flex-col mx-2" type="button" onClick={() => setInEditMode({ status: true, rowKey: record.policyNumber, rowColumn: 'customer' })}>H</button>
                            {
                              inEditMode.status && inEditMode.rowColumn === 'customer' && inEditMode.rowKey === record.policyNumber ?
                              <form onSubmit={handleSubmit}>
                                <input
                                  className="mx-2"
                                  type="text"
                                  placeholder="First name"
                                  onChange={handleFirstName}
                                  required
                                />
                                <input
                                  className="mx-2"
                                  type="text"
                                  placeholder="Last name"
                                  onChange={handleLastName}
                                  required
                                />
                                <button type="submit"></button>
                              </form> 
                              : null
                            }
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {record.provider}
                            <button className="flex flex-col mx-2" type="button" onClick={() => setInEditMode({ status: true, rowKey: record.policyNumber, rowColumn: 'provider' })}>H</button>
                            {
                              inEditMode.status && inEditMode.rowColumn === 'provider' && inEditMode.rowKey === record.policyNumber ?
                              <form onSubmit={handleSubmit}>
                                <input
                                  className="mx-2"
                                  type="text"
                                  placeholder="Provider"
                                  onChange={handleProvider}
                                  autoFocus
                                />
                              </form> 
                              : null
                            }
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {record.insuranceType}
                            <button className="flex flex-col mx-2" type="button" onClick={() => setInEditMode({ status: true, rowKey: record.policyNumber, rowColumn: 'insuranceType' })}>H</button>
                            {
                              inEditMode.status && inEditMode.rowColumn === 'insuranceType' && inEditMode.rowKey === record.policyNumber ?
                              <form onSubmit={handleSubmit}>
                                <input
                                  className="mx-2"
                                  type="text"
                                  placeholder="Insurance Type"
                                  onChange={handleInsuranceType}
                                  autoFocus
                                />
                              </form> 
                              : null
                            }
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {record.status}
                            <button className="flex flex-col mx-2" type="button" onClick={() => setInEditMode({ status: true, rowKey: record.policyNumber, rowColumn: 'status' })}>H</button>
                            {
                              inEditMode.status && inEditMode.rowColumn === 'status' && inEditMode.rowKey === record.policyNumber ?
                              <form onSubmit={handleSubmit}>
                                <input
                                  className="mx-2"
                                  type="text"
                                  placeholder="Status"
                                  onChange={handleStatus}
                                  autoFocus
                                />
                              </form> 
                              : null
                            }
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
                            <button className="flex flex-col mx-2" type="button" onClick={() => setInEditMode({ status: true, rowKey: record.policyNumber, rowColumn: 'startDate' })}>H</button>
                            {
                              inEditMode.status && inEditMode.rowColumn === 'startDate' && inEditMode.rowKey === record.policyNumber ?
                              <form onSubmit={handleSubmit}>
                                <input
                                  className="mx-2"
                                  type="text"
                                  placeholder="Start Date"
                                  onChange={handleStartDate}
                                  autoFocus
                                />
                              </form> 
                              : null
                            }
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {record.endDate}
                            <button className="flex flex-col mx-2" type="button" onClick={() => setInEditMode({ status: true, rowKey: record.policyNumber, rowColumn: 'endDate' })}>H</button>
                            {
                              inEditMode.status && inEditMode.rowColumn === 'endDate' && inEditMode.rowKey === record.policyNumber ?
                              <form onSubmit={handleSubmit}>
                                <input
                                  className="mx-2"
                                  type="text"
                                  placeholder="End Date"
                                  onChange={handleEndDate}
                                  autoFocus
                                />
                              </form> 
                              : null
                            }
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
