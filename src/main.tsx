import React from 'react'
import ReactDOM from 'react-dom/client'

import { ApolloClient, ApolloProvider, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import { CustomInMemoryCache } from './cache.ts'

import App from './App.tsx'

import './index.css'

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
})

const authLink = setContext((_, { headers }) => {
  const token =
    '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'
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
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
