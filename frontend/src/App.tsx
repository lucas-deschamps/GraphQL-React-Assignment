import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Config variables
import { GRAPHQL_API_URL } from './config';

// Components
import DataTable from './components/DataTable';

// CSS
import "./index.css";

function App() {
  // Apollo Client
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: GRAPHQL_API_URL,
  });

  return (
    <ApolloProvider client={client}>
      <DataTable/>
    </ApolloProvider>
  );
}

export default App;
