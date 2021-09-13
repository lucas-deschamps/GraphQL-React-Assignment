import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { GRAPHQL_API_URL } from "./config";

import "./index.css";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: GRAPHQL_API_URL,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
