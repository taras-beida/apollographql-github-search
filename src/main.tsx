import React from 'react'
import ReactDOM from 'react-dom/client'

import { ApolloClient, ApolloProvider, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import { CustomInMemoryCache } from './cache.ts'

import App from './App.tsx'

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GITHUB_API,
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: CustomInMemoryCache,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)
