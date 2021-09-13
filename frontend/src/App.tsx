import { useQuery } from '@apollo/client';

// Queries and mutations
import { QUERY_ALL_POLICIES } from './graphql/policy/policy-queries';

// Components
import DataTable from './components/DataTable';
import Pagination from './components/PaginationRow';

// CSS
import "./index.css";

function App(): JSX.Element {
  const { 
    data: policyData, 
    loading: policyLoading, 
    error: policyError 
  } = useQuery(QUERY_ALL_POLICIES);

  return (
      <>
        <DataTable data={policyData} loading={policyLoading} error={policyError} />
        <Pagination />
      </>
  );
}

export default App;
