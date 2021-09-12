import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { GRAPHQL_API_URL } from './config';

import "./index.css";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: GRAPHQL_API_URL,
  });

  return (
    <ApolloProvider client={client}>
      <div>WIP</div>
    </ApolloProvider>
  );
}

export default App;
