import { useState } from 'react';
import { useQuery } from '@apollo/client';

// Queries and mutations
import {  
  QUERY_ALL_POLICIES 
} from './graphql/requests/policy/policy-queries';

// Components
import Header from './components/Header';
import DataTable from './components/DataTable';
import PaginationRow from './components/PaginationRow';

// CSS
import "./index.css";

function App(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage] = useState(5);

  const { 
    data: policyData,
    loading: policyLoading,
    error: policyError,
    refetch
  } = useQuery(QUERY_ALL_POLICIES);

  // Pagination
  let currentPageSlice;

  const lastCustomerIndex = currentPage * customersPerPage;
  const firstCustomerIndex = lastCustomerIndex - customersPerPage;

  if (policyData && policyData.policies)
    currentPageSlice = policyData.policies.slice(firstCustomerIndex, lastCustomerIndex);

  const paginateForward = () => setCurrentPage(currentPage + 1);
  const paginateBackward = () => setCurrentPage(currentPage - 1);

  return (
      <>
        <Header/>
        <DataTable 
          data={currentPageSlice} 
          loading={policyLoading} 
          error={policyError}
          refetch={refetch}
        />
        <PaginationRow 
          nextPage={paginateForward} 
          previousPage={paginateBackward} 
          currentPage={currentPage} 
          customersPerPage={customersPerPage} 
          total={ policyData && policyData.policies ? policyData.policies.length : 0 }
        />
      </>
  );
}

export default App;
